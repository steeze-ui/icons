interface ThemeBuilderProperties {
    sources: {
        inputRaw: string;
        outputThemes: string;
        suffixMap?: {
            [key: string]: string;
        };
        themesMap?: {
            [key: string]: string;
        };
        fallbackTheme?: string;
    };
    lib: {
        output: string;
        iconsFolderName?: string;
        exportsFileName?: string;
        extendSvgAttributes?: {
            [attribute: string]: string;
        };
        excludeSvgAttributes?: string[];
    };
}
export declare class ThemeBuilder {
    private props;
    private iconsDirPath;
    private exportsFilePath;
    private unrecognizedFiles;
    constructor(props: ThemeBuilderProperties);
    build(): void;
    private getIconsFromTheme;
    private writeSvgDict;
    private writeExportsModule;
    collectFromDir(): this | undefined;
    collectFromSuffix(): this | undefined;
    private traverse;
}
export {};
