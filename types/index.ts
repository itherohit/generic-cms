enum ConsentStatus {
    GRANTED = 'granted',
    REVOVKED = 'revoked',
    PENDING = 'pending'
}

interface ConsentDetails {
    [key: string]: any;
}
  
interface Consent {
    id: string;
    userId: string;
    purpose: string;
    status: ConsentStatus;
    details: ConsentDetails;
    validFrom: Date;
    validUntil: Date | null;  // null means indefinite
    createdAt: Date;
    updatedAt: Date;
}


interface ConsentStorage {
    saveConsent(consent: Consent): Promise<void>;
    getConsent(id: string): Promise<Consent | null>;
    updateConsent(id: string, updates: Partial<Consent>): Promise<void>;
    deleteConsent(id: string): Promise<void>;
}
  
interface ConsentVerificationMethod {
    verify(userId: string, purpose: string, details: ConsentDetails): Promise<boolean>;
}

interface ConsentProvider {
    name: string;
    createConsent(userId: string, purpose: string, details: ConsentDetails): Promise<Consent>;
    verifyConsent(consentId: string): Promise<boolean>;
    revokeConsent(consentId: string): Promise<void>;
}


export {ConsentStatus,Consent,ConsentStorage,ConsentVerificationMethod,ConsentDetails,ConsentProvider}