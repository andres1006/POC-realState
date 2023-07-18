/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
import { NewIconsProps } from "./NewIcons";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarPropertiesOverridesProps = {
    NavbarProperties?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2677"?: PrimitiveOverrideProps<ViewProps>;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    Dashboard?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884142"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884143?: NewIconsProps;
    Insight?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884145"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884146?: NewIconsProps;
    "My Listings"?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884148"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884149?: NewIconsProps;
    Tenants?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884151"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884152?: NewIconsProps;
    "Rent Payment"?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884154"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884155?: NewIconsProps;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884157"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884158?: NewIconsProps;
    "Help & Settings"?: PrimitiveOverrideProps<FlexProps>;
    Help?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884161"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884162?: NewIconsProps;
    Settings?: PrimitiveOverrideProps<FlexProps>;
    "Rounded rectangle37884164"?: PrimitiveOverrideProps<ViewProps>;
    NewIcons37884165?: NewIconsProps;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    "Rounded rectangle37884167"?: PrimitiveOverrideProps<ViewProps>;
    Logotype?: PrimitiveOverrideProps<ViewProps>;
    "Group 100"?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Vector37884172?: PrimitiveOverrideProps<IconProps>;
    Vector37884173?: PrimitiveOverrideProps<IconProps>;
    Vector37884174?: PrimitiveOverrideProps<IconProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavbarPropertiesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavbarPropertiesOverridesProps | undefined | null;
}>;
export default function NavbarProperties(props: NavbarPropertiesProps): React.ReactElement;
