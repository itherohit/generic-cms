import DigiLockProvider from "./api-based-provider";
import AdobeProvider from "./esign-based-provider";

export const ConsentProviders = {
    DigiLockProvider: (apiKey: string) => new DigiLockProvider(apiKey),
    AdobeProvider: (apiKey: string) => new AdobeProvider(apiKey),
};