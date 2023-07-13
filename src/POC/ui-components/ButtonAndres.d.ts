/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewIconsProps } from "./NewIcons";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonAndresOverridesProps = {
    ButtonAndres?: PrimitiveOverrideProps<FlexProps>;
    NewIcons?: NewIconsProps;
    Button?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonAndresProps = React.PropsWithChildren<Partial<FlexProps> & {
    showIcon?: "false" | "true";
    size?: "Large" | "Medium" | "Small";
    variant?: "Primary" | "Secondary";
} & {
    overrides?: ButtonAndresOverridesProps | undefined | null;
}>;
export default function ButtonAndres(props: ButtonAndresProps): React.ReactElement;
