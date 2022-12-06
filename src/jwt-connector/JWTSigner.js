"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MOStringUtils_1 = __importDefault(require("./utils/MOStringUtils"));
const jsrsasign_1 = require("jsrsasign");
class JWTSigner {
    constructor(jwt, secret) {
        this.jwt = jwt;
        this.signedJwt = "";
        this.alg = "";
        this.secret = secret;
    }
    prepare() {
        if (MOStringUtils_1.default.isEmpty(this.secret)) {
            throw new Error("Secret Key to sign JWT is empty");
        }
        this.alg = this.jwt.getAlg();
        this.signedJwt = "";
        return this;
    }
    sign() {
        let payloadToSign = this.jwt.getEncodedJwt();
        let sign = "";
        this.signedJwt = jsrsasign_1.KJUR.jws.JWS.sign(this.alg, JSON.stringify(this.jwt.getHeader()), JSON.stringify(this.jwt.getPayload()), this.secret);
        return this;
    }
    getSignedJwt() {
        return this.signedJwt;
    }
}
exports.default = JWTSigner;
//# sourceMappingURL=JWTSigner.js.map