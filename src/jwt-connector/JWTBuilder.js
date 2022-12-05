"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JWT_1 = require("./JWT");
const JWTSigner_1 = __importDefault(require("./JWTSigner"));
const JWTVerifier_1 = __importDefault(require("./JWTVerifier"));
const MOObjectUtils_1 = __importDefault(require("./utils/MOObjectUtils"));
const MOStringUtils_1 = __importDefault(require("./utils/MOStringUtils"));
class JWTBuilder {
    constructor() {
        this.header = {
            typ: 'JWT',
            cty: 'JWT'
        };
        this.payload = {};
        this.createdJwt = new JWT_1.JWT();
        this.secret = "";
    }
    parseJwt(jwt) {
        let parts = jwt.split(".");
        if (parts.length != 3) {
            return new JWT_1.JWT();
        }
        let parsedJwt = new JWT_1.JWT();
        parsedJwt.setHeader(parsedJwt.parseStringComponent(parts[0]));
        parsedJwt.setPayload(parsedJwt.parseStringComponent(parts[1]));
        parsedJwt.setSign(parts[2]);
        this.createdJwt = parsedJwt;
        this.header = parsedJwt.getHeader();
        this.payload = parsedJwt.getPayload();
        return parsedJwt;
    }
    generateSecret(length) {
        this.setAlg("HS256");
        let generatedSecret = MOStringUtils_1.default.generateRandStr(length);
        this.setSecret(generatedSecret);
        return generatedSecret;
    }
    isEmpty() {
        if (MOObjectUtils_1.default.isEmpty(this.header)) {
            return true;
        }
        if (MOObjectUtils_1.default.isEmpty(this.payload)) {
            return true;
        }
        return false;
    }
    createJwt() {
        if (!this.createdJwt.isEmpty()) {
            return this.getSignedJWT();
        }
        if (this.isEmpty()) {
            throw new Error("Attributes required to create a JWT are empty.");
        }
        let jwt = new JWT_1.JWT();
        jwt.setHeader(this.header);
        jwt.setPayload(this.payload);
        this.createdJwt = jwt;
        return this.getSignedJWT();
    }
    getSignedJWT() {
        if (this.createdJwt.isEmpty()) {
            throw new Error("Attributes required to create a JWT are empty.");
        }
        let alg = this.createdJwt.getAlg();
        if (MOStringUtils_1.default.isEmpty(alg)) {
            throw new Error("Cannot determine algorithm to sign the JWT");
        }
        let jwtSigner = new JWTSigner_1.default(this.createdJwt, this.secret);
        return jwtSigner.prepare().sign().getSignedJwt();
    }
    verifyJwt() {
        if (this.createdJwt.isEmpty()) {
            throw new Error("Attributes required to verify a JWT are empty.");
        }
        if (MOStringUtils_1.default.isEmpty(this.secret)) {
            throw new Error("Cannot verify JWT without secret key.");
        }
        let jwtVerifier = new JWTVerifier_1.default(this.createdJwt, this.secret);
        return jwtVerifier.prepare().verify();
    }
    getJwt() {
        return this.createdJwt;
    }
    setJti(jwtId) {
        this.addClaim('jti', jwtId);
        return this;
    }
    setAlg(alg) {
        this.header['alg'] = alg;
        return this;
    }
    setSub(sub) {
        return this.addClaim('sub', sub);
    }
    setIssuer(issuer) {
        return this.addClaim('iss', issuer);
    }
    setAudience(aud) {
        return this.addClaim('aud', aud);
    }
    setIssueTime(iat) {
        return this.addClaim('iat', iat);
    }
    setExpiry(exp) {
        return this.addClaim('exp', exp);
    }
    setNotBefore(nbf) {
        this.addClaim('nbf', nbf);
    }
    setSecret(secret) {
        this.secret = secret;
    }
    addClaim(key, value) {
        this.payload[key] = value;
    }
    getHeader() {
        return this.header;
    }
    getPayload() {
        return this.payload;
    }
}
exports.default = JWTBuilder;
//# sourceMappingURL=JWTBuilder.js.map