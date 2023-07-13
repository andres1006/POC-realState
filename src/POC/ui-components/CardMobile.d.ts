/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardMobileOverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    "3"?: PrimitiveOverrideProps<TextProps>;
    CardMobile?: PrimitiveOverrideProps<ViewProps>;
    "Rounded rectangle"?: PrimitiveOverrideProps<ViewProps>;
    Favorited?: PrimitiveOverrideProps<ViewProps>;
    "Tarpon Bay"?: PrimitiveOverrideProps<ViewProps>;
    "Michigan, IN"?: PrimitiveOverrideProps<ViewProps>;
    "Group 863"?: PrimitiveOverrideProps<ViewProps>;
    Facilities?: PrimitiveOverrideProps<FlexProps>;
    Beds?: PrimitiveOverrideProps<FlexProps>;
    "Icon / Bed"?: PrimitiveOverrideProps<ViewProps>;
    Vector37943605?: PrimitiveOverrideProps<IconProps>;
    Bath?: PrimitiveOverrideProps<FlexProps>;
    "Icon / Bath"?: PrimitiveOverrideProps<ViewProps>;
    Vector37943609?: PrimitiveOverrideProps<IconProps>;
    Dimension?: PrimitiveOverrideProps<FlexProps>;
    "Icon / Square Meters"?: PrimitiveOverrideProps<ViewProps>;
    Vector37943613?: PrimitiveOverrideProps<IconProps>;
    Vector37943614?: PrimitiveOverrideProps<IconProps>;
    Vector37943615?: PrimitiveOverrideProps<IconProps>;
    Vector37943616?: PrimitiveOverrideProps<IconProps>;
    "5x7 m\u00B2"?: PrimitiveOverrideProps<TextProps>;
    "Line 32"?: PrimitiveOverrideProps<IconProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 395"?: PrimitiveOverrideProps<ViewProps>;
    "pexels-binyamin-mellish-106399 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CardMobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardMobileOverridesProps | undefined | null;
}>;
export default function CardMobile(props: CardMobileProps): React.ReactElement;
