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
export declare type FilterPropertiesOverridesProps = {
    FilterProperties?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2676"?: PrimitiveOverrideProps<ViewProps>;
    View?: PrimitiveOverrideProps<FlexProps>;
    Grid?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9337854765"?: PrimitiveOverrideProps<ViewProps>;
    Icon37854766?: PrimitiveOverrideProps<ViewProps>;
    Vector37854767?: PrimitiveOverrideProps<IconProps>;
    Vector37854768?: PrimitiveOverrideProps<IconProps>;
    Vector37854769?: PrimitiveOverrideProps<IconProps>;
    Vector37854770?: PrimitiveOverrideProps<IconProps>;
    Vector37854771?: PrimitiveOverrideProps<IconProps>;
    List?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9337854773"?: PrimitiveOverrideProps<ViewProps>;
    Icon37854774?: PrimitiveOverrideProps<ViewProps>;
    Vector37854775?: PrimitiveOverrideProps<IconProps>;
    Vector37854776?: PrimitiveOverrideProps<IconProps>;
    Vector37854777?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    Date?: PrimitiveOverrideProps<FlexProps>;
    Frame37854781?: PrimitiveOverrideProps<FlexProps>;
    "By date added"?: PrimitiveOverrideProps<TextProps>;
    Icon37854783?: PrimitiveOverrideProps<ViewProps>;
    All?: PrimitiveOverrideProps<FlexProps>;
    "Showing all"?: PrimitiveOverrideProps<TextProps>;
    Icon37854786?: PrimitiveOverrideProps<ViewProps>;
    Sort?: PrimitiveOverrideProps<FlexProps>;
    Frame37854788?: PrimitiveOverrideProps<FlexProps>;
    NewIcons?: NewIconsProps;
} & EscapeHatchProps;
export declare type FilterPropertiesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FilterPropertiesOverridesProps | undefined | null;
}>;
export default function FilterProperties(props: FilterPropertiesProps): React.ReactElement;
