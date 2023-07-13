/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopNavOverridesProps = {
    TopNav?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<ViewProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    "Left Items"?: PrimitiveOverrideProps<FlexProps>;
    "Left Nav"?: PrimitiveOverrideProps<FlexProps>;
    Logotype?: PrimitiveOverrideProps<ViewProps>;
    "Group 100"?: PrimitiveOverrideProps<ViewProps>;
    Estatery?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Vector36614516?: PrimitiveOverrideProps<IconProps>;
    Vector36614517?: PrimitiveOverrideProps<IconProps>;
    Vector36614518?: PrimitiveOverrideProps<IconProps>;
    menu?: PrimitiveOverrideProps<ViewProps>;
    Vector36614521?: PrimitiveOverrideProps<IconProps>;
    Vector36614522?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TopNavProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopNavOverridesProps | undefined | null;
}>;
export default function TopNav(props: TopNavProps): React.ReactElement;
