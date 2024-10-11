import { Consent, ConsentStorage } from "../types";

class PostgreSQLStorage implements ConsentStorage {
    async saveConsent(consent: Consent): Promise<void> {
      // Save to PostgreSQL
    }
  
    async getConsent(id: string): Promise<Consent | null> {
      // Retrieve from PostgreSQL
      return null;
    }
  
    async updateConsent(id: string, updates: Partial<Consent>): Promise<void> {
      // Update in PostgreSQL
    }
  
    async deleteConsent(id: string): Promise<void> {
      // Delete from PostgreSQL
    }
}

export default PostgreSQLStorage;