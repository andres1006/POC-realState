/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchPropertiesOverridesProps = {
    "213232"?: PrimitiveOverrideProps<TextProps>;
    SearchProperties?: PrimitiveOverrideProps<ViewProps>;
    Search?: PrimitiveOverrideProps<ViewProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "Search properties"?: PrimitiveOverrideProps<TextProps>;
    "Frame 866"?: PrimitiveOverrideProps<FlexProps>;
    "properties available to rent"?: PrimitiveOverrideProps<TextProps>;
    Breadcrumb?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Searcrth?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchPropertiesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchPropertiesOverridesProps | undefined | null;
}>;
export default function SearchProperties(props: SearchPropertiesProps): React.ReactElement;
