"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTSigner = exports.JWTBuilder = exports.JWT = void 0;
const JWT_1 = require("./JWT");
Object.defineProperty(exports, "JWT", { enumerable: true, get: function () { return JWT_1.JWT; } });
const JWTBuilder_1 = __importDefault(require("./JWTBuilder"));
exports.JWTBuilder = JWTBuilder_1.default;
const JWTSigner_1 = __importDefault(require("./JWTSigner"));
exports.JWTSigner = JWTSigner_1.default;
if (typeof window !== 'undefined') {
    window['JWTBuilder'] = JWTBuilder_1.default;
}
//# sourceMappingURL=index.js.map