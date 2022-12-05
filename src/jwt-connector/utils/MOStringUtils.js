"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MOStringUtils {
    isString(mVar) {
        return (typeof mVar === 'string' || mVar instanceof String);
    }
    isEmpty(mStr) {
        return mStr === '';
    }
    unescape(str) {
        return (str + '==='.slice((str.length + 3) % 4))
            .replace(/-/g, '+')
            .replace(/_/g, '/');
    }
    escape(str) {
        return str.replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    }
    base64decode(encoded) {
        return atob(this.unescape(encoded));
    }
    base64encode(text) {
        return this.escape(btoa(text));
    }
    generateRandStr(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        len = len || 20;
        var randomstring = '';
        while (len > 0) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomstring += charSet.substring(randomPoz, randomPoz + 1);
            len--;
        }
        return randomstring;
    }
}
exports.default = new MOStringUtils();
//# sourceMappingURL=MOStringUtils.js.map