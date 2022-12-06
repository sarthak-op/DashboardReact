export declare type JWTPayloadValue = number | number[] | string | string[] | Record<string, number | number[] | string | string[]> | Record<string, number | number[] | string | string[]>[];
export declare type JWTPayload = Record<string, JWTPayloadValue>;
export declare class JWT {
    private header;
    private payload;
    private sign;
    constructor();
    isEmpty(): boolean;
    getEncodedJwt(): string;
    parseStringComponent(component: any): any;
    getAlg(): string;
    getExpiry(): Date;
    getNbf(): Date;
    getIat(): Date;
    setHeader(header: Record<string, string>): void;
    setPayload(payload: JWTPayload): void;
    setSign(sign: string): void;
    getSign(): string;
    getHeader(): Record<string, string>;
    getPayload(): JWTPayload;
}
