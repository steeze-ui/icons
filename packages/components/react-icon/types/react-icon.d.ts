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
export declare const Icon: import("react").ForwardRefExoticComponent<Pick<IconProps, keyof IconProps> & import("react").RefAttributes<SVGSVGElement>>;
export {};
