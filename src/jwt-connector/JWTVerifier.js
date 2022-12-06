"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MOStringUtils_1 = __importDefault(require("./utils/MOStringUtils"));
const jsrsasign_1 = require("jsrsasign");
class JWTVerifier {
    constructor(jwt, secret) {
        this.jwt = jwt;
        this.signedJwt = "";
        this.alg = "";
        this.secret = secret;
    }
    prepare() {
        if (MOStringUtils_1.default.isEmpty(this.secret)) {
            throw new Error("Secret Key to verify JWT is empty");
        }
        this.alg = this.jwt.getAlg();
        return this;
    }
    verify() {
        let jwt = this.jwt.getEncodedJwt() + '.' + this.jwt.getSign();
        return this.verifyTimes() && jsrsasign_1.KJUR.jws.JWS.verify(jwt, this.secret, [this.alg]);
    }
    verifyTimes() {
        let currentTime = new Date();
        if (currentTime.getTime() < this.jwt.getNbf().getTime()) {
            return false;
        }
        if (currentTime.getTime() > this.jwt.getExpiry().getTime()) {
            return false;
        }
        return true;
    }
    getSignedJwt() {
        return this.signedJwt;
    }
}
exports.default = JWTVerifier;
//# sourceMappingURL=JWTVerifier.js.map