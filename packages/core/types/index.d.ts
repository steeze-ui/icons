type SuffixToThemeMap = {
    [key: string]: string;
};
type DirToThemeMap = {
    [key: string]: string;
};
interface ThemeBuilderProperties {
    sources: ({
        collectFromSuffix: SuffixToThemeMap;
        collectFromDir?: never;
        fallbackTheme?: string;
    } | {
        collectFromDir: DirToThemeMap;
        collectFromSuffix?: never;
        fallbackTheme?: never;
    } | {
        [K in any]: never;
    }) & {
        inputRaw?: string;
        outputThemes?: string;
    };
    lib: {
        output?: string;
        exportsFileName?: string;
        typesInputFile?: string;
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
    private typesOutputFile;
    constructor(props: ThemeBuilderProperties);
    build(): void;
    private copyTypesFile;
    private getIconsFromTheme;
    private writeExportsFile;
    private collectFromDir;
    private collectFromSuffix;
    private traverse;
    private normalizeSourceName;
    private normalizeLibName;
}
export {};
