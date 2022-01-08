interface IconProps {
    src: IconSource;
    theme?: string;
    size?: string;
    [key: string]: any;
}
export interface IconSource {
    default: any;
    [key: string]: any;
}
export declare function Icon(props: IconProps): import("solid-js").JSX.Element;
export {};
