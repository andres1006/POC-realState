/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PropertyCreateFormInputValues = {
    streetName?: string;
    addressName?: string;
    price?: number;
    numbersBed?: number;
    numberBathroos?: number;
    dimension?: string;
    longitud?: number;
    latitude?: number;
    urlImage?: string;
};
export declare type PropertyCreateFormValidationValues = {
    streetName?: ValidationFunction<string>;
    addressName?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    numbersBed?: ValidationFunction<number>;
    numberBathroos?: ValidationFunction<number>;
    dimension?: ValidationFunction<string>;
    longitud?: ValidationFunction<number>;
    latitude?: ValidationFunction<number>;
    urlImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyCreateFormOverridesProps = {
    PropertyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    streetName?: PrimitiveOverrideProps<TextFieldProps>;
    addressName?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    numbersBed?: PrimitiveOverrideProps<TextFieldProps>;
    numberBathroos?: PrimitiveOverrideProps<TextFieldProps>;
    dimension?: PrimitiveOverrideProps<TextFieldProps>;
    longitud?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    urlImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyCreateFormProps = React.PropsWithChildren<{
    overrides?: PropertyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onSuccess?: (fields: PropertyCreateFormInputValues) => void;
    onError?: (fields: PropertyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onValidate?: PropertyCreateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyCreateForm(props: PropertyCreateFormProps): React.ReactElement;
