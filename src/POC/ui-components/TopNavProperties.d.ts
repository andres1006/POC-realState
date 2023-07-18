/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { NewIconsProps } from "./NewIcons";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopNavPropertiesOverridesProps = {
    TopNavProperties?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    "Notification & Profile"?: PrimitiveOverrideProps<FlexProps>;
    Notification?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons?: NewIconsProps;
    Divider?: PrimitiveOverrideProps<IconProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 962"?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Initial?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 18"?: PrimitiveOverrideProps<IconProps>;
    FR?: PrimitiveOverrideProps<TextProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopNavPropertiesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopNavPropertiesOverridesProps | undefined | null;
}>;
export default function TopNavProperties(props: TopNavPropertiesProps): React.ReactElement;
