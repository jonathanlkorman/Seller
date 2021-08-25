import * as React from "react";
import { Animated, ImageStyle, ImageURISource, ImageSourcePropType, StyleProp } from "react-native";
import { DownloadOptions } from "./CacheManager";
interface ImageProps {
    style?: StyleProp<ImageStyle>;
    defaultSource?: ImageURISource | number;
    preview?: ImageSourcePropType;
    options?: DownloadOptions;
    uri: string;
    transitionDuration?: number;
    tint?: "dark" | "light";
    onError: (error: {
        nativeEvent: {
            error: Error;
        };
    }) => void;
}
interface ImageState {
    uri: string | undefined;
    intensity: Animated.Value;
}
export default class Image extends React.Component<ImageProps, ImageState> {
    mounted: boolean;
    static defaultProps: {
        transitionDuration: number;
        tint: string;
        onError: () => void;
    };
    state: {
        uri: undefined;
        intensity: Animated.Value;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: ImageProps, prevState: ImageState): void;
    componentWillUnmount(): void;
    load({ uri, options, onError }: ImageProps): Promise<void>;
    render(): JSX.Element;
}
export {};
