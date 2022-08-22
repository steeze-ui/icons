export { default as Icon } from './Icon.vue';
declare type AllowedTags = 'path' | 'circle' | 'rect' | 'polygon' | 'polyline' | 'line';
declare type IconThemeSource = {
    a: {
        [attribute: string]: string;
    };
} & {
    [tag in AllowedTags]?: {
        [attribute: string]: string;
    }[];
};
export declare type IconSource = {
    default: IconThemeSource;
} & {
    [theme: string]: IconThemeSource;
};
