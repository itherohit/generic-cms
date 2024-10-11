import { ConsentManager } from "./consent-Manager";
import { ConsentProviders } from "./consent-provider";

async function main() {
    const consentManager = new ConsentManager(ConsentProviders.DigiLockProvider('api-key'));
  
    try {
      const consent = await consentManager.createConsent('user123', 'marketing',{});
      console.log('Consent created:', consent);
  
      const retrievedConsent = await consentManager.getConsent(consent.id);
      console.log('Retrieved consent:', retrievedConsent);
  
      await consentManager.updateConsent(consent.id, { purpose: 'analytics' });
      console.log('Consent updated');
  
      await consentManager.revokeConsent(consent.id);
      console.log('Consent revoked');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();