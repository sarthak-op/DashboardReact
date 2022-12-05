"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const MOStringUtils_1 = __importDefault(require("./utils/MOStringUtils"));
const MOObjectUtils_1 = __importDefault(require("./utils/MOObjectUtils"));
class JWT {
    constructor() {
        this.header = {};
        this.payload = {};
        this.sign = "";
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
    getEncodedJwt() {
        let encodedHeader = MOStringUtils_1.default.base64encode(JSON.stringify(this.header));
        let encodedPayload = MOStringUtils_1.default.base64encode(JSON.stringify(this.payload));
        return encodedHeader + '.' + encodedPayload;
    }
    parseStringComponent(component) {
        let decoded = MOStringUtils_1.default.base64decode(component);
        return JSON.parse(decoded);
    }
    getAlg() {
        return this.header.alg;
    }
    getExpiry() {
        let exp = this.payload.exp.toString();
        return new Date(parseInt(exp) * 1000);
    }
    getNbf() {
        let nbf = this.payload.nbf.toString();
        return new Date(parseInt(nbf) * 1000);
    }
    getIat() {
        let iat = this.payload.iat.toString();
        return new Date(parseInt(iat) * 1000);
    }
    setHeader(header) {
        this.header = header;
    }
    setPayload(payload) {
        if (MOStringUtils_1.default.isString(payload)) {
            payload = this.parseStringComponent(payload);
        }
        this.payload = payload;
    }
    setSign(sign) {
        this.sign = sign;
    }
    getSign() {
        return this.sign;
    }
    getHeader() {
        return this.header;
    }
    getPayload() {
        return this.payload;
    }
}
exports.JWT = JWT;
//# sourceMappingURL=JWT.js.map