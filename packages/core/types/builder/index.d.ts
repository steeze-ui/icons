interface Options {
    extendSvgAttributes?: {
        [key: string]: string;
    };
    excludeSvgAttributes?: string[];
}
export declare function createLibIcons(inputThemesDir: string, outputLibDir: string, options: Options): void;
export declare function createThemesFromSuffix(inputDir: string, outputDir: string, themesMap: {
    [key: string]: string;
}): void;
export declare function createThemesFromDir(inputDir: string, outputDir: string, dirToThemesMap: {
    [key: string]: string;
}): void;
export {};
