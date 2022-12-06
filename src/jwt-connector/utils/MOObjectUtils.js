"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoObjectUtils {
    isEmpty(obj) {
        for (var x in obj) {
            if (obj.hasOwnProperty(x))
                return false;
        }
        return true;
    }
}
exports.default = new MoObjectUtils();
//# sourceMappingURL=MOObjectUtils.js.map