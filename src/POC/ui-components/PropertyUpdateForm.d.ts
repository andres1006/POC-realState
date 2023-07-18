/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Property } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PropertyUpdateFormInputValues = {
    streetName?: string;
    addressName?: string;
    price?: number;
    numbersBed?: number;
    numberBathroos?: string;
    dimension?: string;
    longitud?: number;
    latitude?: number;
    urlImage?: string;
};
export declare type PropertyUpdateFormValidationValues = {
    streetName?: ValidationFunction<string>;
    addressName?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    numbersBed?: ValidationFunction<number>;
    numberBathroos?: ValidationFunction<string>;
    dimension?: ValidationFunction<string>;
    longitud?: ValidationFunction<number>;
    latitude?: ValidationFunction<number>;
    urlImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyUpdateFormOverridesProps = {
    PropertyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PropertyUpdateFormProps = React.PropsWithChildren<{
    overrides?: PropertyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    property?: Property;
    onSubmit?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onSuccess?: (fields: PropertyUpdateFormInputValues) => void;
    onError?: (fields: PropertyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onValidate?: PropertyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyUpdateForm(props: PropertyUpdateFormProps): React.ReactElement;
