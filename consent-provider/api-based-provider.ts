import { Consent, ConsentDetails, ConsentProvider } from "../types";

class DigiLockProvider implements ConsentProvider {
    name = 'DigiLock';
  
    constructor(private apiKey: string) {}
  
    async createConsent(userId: string, purpose: string, details: ConsentDetails): Promise<Consent> {
      // ...
    }
  
    async verifyConsent(consentId: string): Promise<boolean> {
      // ...
      return true;
    }
  
    async revokeConsent(consentId: string): Promise<void> {
      // ...
    }
}

export default DigiLockProvider;