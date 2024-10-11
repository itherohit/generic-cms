import { PostgreSQLStorage } from "./data-store";
import { Consent, ConsentDetails, ConsentProvider, ConsentStorage, ConsentStatus } from "./types";

export class ConsentManager {
    constructor(
      private provider: ConsentProvider,
      private datastore: ConsentStorage = new PostgreSQLStorage()
    ) {
    }
  
    async createConsent(userId: string, purpose: string, details: ConsentDetails): Promise<Consent> {
      const consent = await this.provider.createConsent(userId, purpose, details);
      await this.datastore.saveConsent(consent);
      return consent;
    }
  
    async verifyConsent(consentId: string): Promise<boolean> {
      const isValid = await this.provider.verifyConsent(consentId);
      if (isValid) {
        const consent = await this.datastore.getConsent(consentId);
        if (consent) {
          return consent.status === ConsentStatus.GRANTED && 
                 (consent.validUntil === null || consent.validUntil > new Date());
        }
      }
      return false;
    }
  
    async revokeConsent(consentId: string): Promise<void> {
      await this.provider.revokeConsent(consentId);
      await this.datastore.updateConsent(consentId, { status: ConsentStatus.REVOVKED, updatedAt: new Date() });
    }
  
    async getConsent(consentId: string): Promise<Consent | null> {
      return this.datastore.getConsent(consentId);
    }
  
    async updateConsent(consentId: string, updates: Partial<Consent>): Promise<void> {
      await this.datastore.updateConsent(consentId, { ...updates, updatedAt: new Date() });
    }
  }