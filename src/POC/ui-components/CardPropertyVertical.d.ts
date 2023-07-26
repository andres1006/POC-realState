/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Property } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { NewIconsProps } from "./NewIcons";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardPropertyVerticalOverridesProps = {
    CardPropertyVertical?: PrimitiveOverrideProps<ViewProps>;
    "Rounded rectangle"?: PrimitiveOverrideProps<ViewProps>;
    Facilities?: PrimitiveOverrideProps<FlexProps>;
    Beds?: PrimitiveOverrideProps<FlexProps>;
    NewIcons377311473?: NewIconsProps;
    "4 Beds"?: PrimitiveOverrideProps<TextProps>;
    Bath?: PrimitiveOverrideProps<FlexProps>;
    NewIcons377311476?: NewIconsProps;
    "2 Bathrooms"?: PrimitiveOverrideProps<TextProps>;
    Dimension?: PrimitiveOverrideProps<FlexProps>;
    NewIcons377311479?: NewIconsProps;
    "6x7.5 m\u00B2"?: PrimitiveOverrideProps<TextProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    "Name & Location"?: PrimitiveOverrideProps<FlexProps>;
    "Beverly Springfield"?: PrimitiveOverrideProps<TextProps>;
    tsafsafjkhasjhcklas?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<FlexProps>;
    "$2,700"?: PrimitiveOverrideProps<TextProps>;
    "/month"?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 395"?: PrimitiveOverrideProps<ViewProps>;
    "pexels-binyamin-mellish-106399 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CardPropertyVerticalProps = React.PropsWithChildren<Partial<ViewProps> & {
    property?: Property;
} & {
    overrides?: CardPropertyVerticalOverridesProps | undefined | null;
}>;
export default function CardPropertyVertical(props: CardPropertyVerticalProps): React.ReactElement;
