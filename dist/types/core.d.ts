import { CoreTypes, ICore } from "@walletconnect/types";
export declare class Core extends ICore {
    readonly protocol = "wc";
    readonly version = 2;
    readonly name: ICore["name"];
    readonly relayUrl: ICore["relayUrl"];
    readonly projectId: ICore["projectId"];
    readonly customStoragePrefix: ICore["customStoragePrefix"];
    events: ICore["events"];
    logger: ICore["logger"];
    heartbeat: ICore["heartbeat"];
    relayer: ICore["relayer"];
    crypto: ICore["crypto"];
    storage: ICore["storage"];
    history: ICore["history"];
    expirer: ICore["expirer"];
    pairing: ICore["pairing"];
    verify: ICore["verify"];
    private initialized;
    static init(opts?: CoreTypes.Options): Promise<Core>;
    constructor(opts?: CoreTypes.Options);
    get context(): string;
    start(): Promise<void>;
    on: (name: any, listener: any) => any;
    once: (name: any, listener: any) => any;
    off: (name: any, listener: any) => any;
    removeListener: (name: any, listener: any) => any;
    private initialize;
}
//# sourceMappingURL=core.d.ts.map