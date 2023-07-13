/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilterbedsOverridesProps = {
    Filterbeds?: PrimitiveOverrideProps<FlexProps>;
    Frame37943181?: PrimitiveOverrideProps<FlexProps>;
    "2-4 Beds"?: PrimitiveOverrideProps<TextProps>;
    Group?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 31"?: PrimitiveOverrideProps<IconProps>;
    Frame37943185?: PrimitiveOverrideProps<ViewProps>;
    Vector37943186?: PrimitiveOverrideProps<IconProps>;
    Vector37943187?: PrimitiveOverrideProps<IconProps>;
    Frame37943188?: PrimitiveOverrideProps<ViewProps>;
    Vector37943189?: PrimitiveOverrideProps<IconProps>;
    Vector37943190?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FilterbedsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FilterbedsOverridesProps | undefined | null;
}>;
export default function Filterbeds(props: FilterbedsProps): React.ReactElement;
