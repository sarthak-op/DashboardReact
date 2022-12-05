import { JWTPayload, JWTPayloadValue, JWT } from "./JWT";
declare class JWTBuilder {
    private header;
    private payload;
    private createdJwt;
    private secret;
    constructor();
    parseJwt(jwt: string): JWT;
    generateSecret(length: number): string;
    isEmpty(): boolean;
    createJwt(): string;
    getSignedJWT(): string;
    verifyJwt(): boolean;
    getJwt(): JWT;
    setJti(jwtId: string): this;
    setAlg(alg: 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512'): JWTBuilder;
    setSub(sub: string): void;
    setIssuer(issuer: string): void;
    setAudience(aud: string): void;
    setIssueTime(iat: number): void;
    setExpiry(exp: number): void;
    setNotBefore(nbf: number): void;
    setSecret(secret: string): void;
    addClaim(key: string, value: JWTPayloadValue): void;
    getHeader(): Record<string, string>;
    getPayload(): JWTPayload;
}
export default JWTBuilder;
