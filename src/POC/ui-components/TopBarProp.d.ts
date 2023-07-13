/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopBarPropOverridesProps = {
    TopBarProp?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<ViewProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    "Left Items"?: PrimitiveOverrideProps<FlexProps>;
    "Left Nav"?: PrimitiveOverrideProps<FlexProps>;
    Logotype?: PrimitiveOverrideProps<ViewProps>;
    "Group 100"?: PrimitiveOverrideProps<ViewProps>;
    Estatery?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Vector37884334?: PrimitiveOverrideProps<IconProps>;
    Vector37884335?: PrimitiveOverrideProps<IconProps>;
    Vector37884336?: PrimitiveOverrideProps<IconProps>;
    "Nav Items"?: PrimitiveOverrideProps<FlexProps>;
    "Menu Item / Default37884338"?: PrimitiveOverrideProps<FlexProps>;
    Selected?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 2553"?: PrimitiveOverrideProps<ViewProps>;
    Label37884341?: PrimitiveOverrideProps<TextProps>;
    "Menu Item / Default37884342"?: PrimitiveOverrideProps<FlexProps>;
    Label37884343?: PrimitiveOverrideProps<TextProps>;
    "Menu Item / Default37884344"?: PrimitiveOverrideProps<FlexProps>;
    Label37884345?: PrimitiveOverrideProps<TextProps>;
    "Header menu / Default37884346"?: PrimitiveOverrideProps<FlexProps>;
    Label37884347?: PrimitiveOverrideProps<TextProps>;
    Icon37884348?: PrimitiveOverrideProps<ViewProps>;
    "Header menu / Default37884349"?: PrimitiveOverrideProps<FlexProps>;
    Label37884350?: PrimitiveOverrideProps<TextProps>;
    Icon37884351?: PrimitiveOverrideProps<ViewProps>;
    "Menu Item / Default37884352"?: PrimitiveOverrideProps<FlexProps>;
    "Menu Item / Default37884353"?: PrimitiveOverrideProps<FlexProps>;
    "Menu Item / Default37884354"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type TopBarPropProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopBarPropOverridesProps | undefined | null;
}>;
export default function TopBarProp(props: TopBarPropProps): React.ReactElement;
