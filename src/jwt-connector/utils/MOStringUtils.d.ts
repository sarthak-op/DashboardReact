declare class MOStringUtils {
    isString(mVar: unknown): Boolean;
    isEmpty(mStr: string): Boolean;
    unescape(str: string): string;
    escape(str: string): string;
    base64decode(encoded: string): string;
    base64encode(text: string): string;
    generateRandStr(len?: number, charSet?: string): string;
}
declare const _default: MOStringUtils;
export default _default;
