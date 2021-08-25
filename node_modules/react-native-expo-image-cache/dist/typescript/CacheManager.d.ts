export interface DownloadOptions {
    md5?: boolean;
    headers?: {
        [name: string]: string;
    };
}
export declare class CacheEntry {
    uri: string;
    options: DownloadOptions;
    constructor(uri: string, options: DownloadOptions);
    getPath(): Promise<string | undefined>;
}
export default class CacheManager {
    static entries: {
        [uri: string]: CacheEntry;
    };
    static get(uri: string, options: DownloadOptions): CacheEntry;
    static clearCache(): Promise<void>;
    static getCacheSize(): Promise<number>;
}
