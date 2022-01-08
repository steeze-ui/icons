interface Options {
    extendSvgAttributes?: {
        [key: string]: string;
    };
    excludeSvgAttributes?: string[];
}
export declare function createLibIcons(inputIconThemes: string, outputIcons: string, options: Options): void;
export declare function getIconsFromTheme(outputExports: string, theme: string, options: Options): void;
export declare function writeSvgDict(outputIcons: string): Promise<void>;
export declare function writeExportsModule(outputIcons: string): void;
export declare function createThemesFromSuffix(inputDir: string, outputDir: string, themesMap: {
    [key: string]: string;
}): void;
export {};
