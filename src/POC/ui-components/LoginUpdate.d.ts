/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, PasswordFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginUpdateOverridesProps = {
    LoginUpdate?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Welcome back"?: PrimitiveOverrideProps<TextProps>;
    "Welcome back! Please enter your details."?: PrimitiveOverrideProps<TextProps>;
    "Input Field"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Buttons?: PrimitiveOverrideProps<FlexProps>;
    Button37737666?: PrimitiveOverrideProps<ButtonProps>;
    Button37737667?: PrimitiveOverrideProps<ButtonProps>;
    "Don\u2019t have an account? Sign up for free"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginUpdateProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginUpdateOverridesProps | undefined | null;
}>;
export default function LoginUpdate(props: LoginUpdateProps): React.ReactElement;
