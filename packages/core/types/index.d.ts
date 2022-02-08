interface ThemeBuilderProperties {
    sources: {
        inputRaw: string;
        outputThemes?: string;
        suffixMap?: {
            [key: string]: string;
        };
        themesMap?: {
            [key: string]: string;
        };
        fallbackTheme?: string;
    };
    lib: {
        output?: string;
        exportsFileName?: string;
        typesInputFile?: string;
        typesOutputFile?: string;
        extendSvgAttributes?: {
            [attribute: string]: string;
        };
        excludeSvgAttributes?: string[];
    };
}
export declare class ThemeBuilder {
    private props;
    private exportsFilePath;
    private unrecognizedSuffixes;
    private sourceDict;
    constructor(props: ThemeBuilderProperties);
    build(): void;
    private copyTypesFile;
    private getIconsFromTheme;
    private writeExportsFile;
    collectFromDir(): this | undefined;
    collectFromSuffix(): this | undefined;
    private traverse;
    private normalizeSourceName;
    private normalizeLibName;
}
export {};
