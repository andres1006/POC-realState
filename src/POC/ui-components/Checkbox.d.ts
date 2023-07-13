/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckboxOverridesProps = {
    Checkbox?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CheckboxProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Checked";
    property2?: "False" | "True";
} & {
    overrides?: CheckboxOverridesProps | undefined | null;
}>;
export default function Checkbox(props: CheckboxProps): React.ReactElement;
