/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BreadcrumbOverridesProps = {
    Breadcrumb?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BreadcrumbProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BreadcrumbOverridesProps | undefined | null;
}>;
export default function Breadcrumb(props: BreadcrumbProps): React.ReactElement;
