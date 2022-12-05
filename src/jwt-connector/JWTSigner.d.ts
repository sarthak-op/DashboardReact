import { JWT } from "./JWT";
declare class JWTSigner {
    private jwt;
    private signedJwt;
    private alg;
    private secret;
    constructor(jwt: JWT, secret: string);
    prepare(): JWTSigner;
    sign(): JWTSigner;
    getSignedJwt(): string;
}
export default JWTSigner;
