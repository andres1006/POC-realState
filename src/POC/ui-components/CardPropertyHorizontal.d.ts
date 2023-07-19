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
export declare type CardPropertyHorizontalOverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    "4"?: PrimitiveOverrideProps<TextProps>;
    CardPropertyHorizontal?: PrimitiveOverrideProps<ViewProps>;
    "Frame 864"?: PrimitiveOverrideProps<FlexProps>;
    Price?: PrimitiveOverrideProps<FlexProps>;
    "$45.89"?: PrimitiveOverrideProps<TextProps>;
    "/month"?: PrimitiveOverrideProps<TextProps>;
    "Title "?: PrimitiveOverrideProps<FlexProps>;
    "St. Crystal"?: PrimitiveOverrideProps<TextProps>;
    "210 US Highway, Highland Lake, FL"?: PrimitiveOverrideProps<TextProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    Facilities?: PrimitiveOverrideProps<FlexProps>;
    Beds?: PrimitiveOverrideProps<FlexProps>;
    NewIcons38723157?: NewIconsProps;
    Bath?: PrimitiveOverrideProps<FlexProps>;
    NewIcons38723160?: NewIconsProps;
    Dimension?: PrimitiveOverrideProps<FlexProps>;
    NewIcons38723163?: NewIconsProps;
    "6x8 m\u00B2"?: PrimitiveOverrideProps<TextProps>;
    "Mask Group"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 395"?: PrimitiveOverrideProps<ViewProps>;
    "pexels-binyamin-mellish-1396122 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CardPropertyHorizontalProps = React.PropsWithChildren<Partial<ViewProps> & {
    property?: Property;
} & {
    overrides?: CardPropertyHorizontalOverridesProps | undefined | null;
}>;
export default function CardPropertyHorizontal(props: CardPropertyHorizontalProps): React.ReactElement;
