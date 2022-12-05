import { JWT } from './JWT';
export default class JWTVerifier {
    private jwt;
    private signedJwt;
    private alg;
    private secret;
    constructor(jwt: JWT, secret: string);
    prepare(): JWTVerifier;
    verify(): boolean;
    private verifyTimes;
    getSignedJwt(): string;
}
