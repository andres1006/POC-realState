/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, SearchFieldProps, TextProps } from "@aws-amplify/ui-react";
import { NewIconsProps } from "./NewIcons";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchPropertiesOverridesProps = {
    "213232"?: PrimitiveOverrideProps<TextProps>;
    SearchProperties?: PrimitiveOverrideProps<FlexProps>;
    Breadcrumb?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    NewIcons?: NewIconsProps;
    Searcrth?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "Search properties"?: PrimitiveOverrideProps<TextProps>;
    "Frame 866"?: PrimitiveOverrideProps<FlexProps>;
    "properties available to rent"?: PrimitiveOverrideProps<TextProps>;
    Search?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SearchPropertiesProps = React.PropsWithChildren<Partial<FlexProps> & {
    value?: String;
} & {
    overrides?: SearchPropertiesOverridesProps | undefined | null;
}>;
export default function SearchProperties(props: SearchPropertiesProps): React.ReactElement;
