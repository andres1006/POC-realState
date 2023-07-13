/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { CheckboxProps } from "./Checkbox";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignupOverridesProps = {
    Signup?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Welcome back"?: PrimitiveOverrideProps<TextProps>;
    "Welcome back! Please enter your details."?: PrimitiveOverrideProps<TextProps>;
    "Input Field"?: PrimitiveOverrideProps<FlexProps>;
    Input2444830?: PrimitiveOverrideProps<FlexProps>;
    Input2444768?: PrimitiveOverrideProps<FlexProps>;
    Input2444769?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Checkbox?: CheckboxProps;
    "I am a property manager"?: PrimitiveOverrideProps<TextProps>;
    Buttons3116445?: PrimitiveOverrideProps<FlexProps>;
    Buttons2444770?: PrimitiveOverrideProps<FlexProps>;
    Button2444771?: PrimitiveOverrideProps<FlexProps>;
    Button2444772?: PrimitiveOverrideProps<FlexProps>;
    "Already have an account? Login"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SignupProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignupOverridesProps | undefined | null;
}>;
export default function Signup(props: SignupProps): React.ReactElement;
