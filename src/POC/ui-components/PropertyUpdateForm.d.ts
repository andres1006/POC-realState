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
    nameStreet?: string;
    bedsQuantity?: number;
    bathroomsQuantity?: number;
    dimension?: string;
    priceXMonth?: number;
    longitud?: string;
    latitude?: string;
    image?: string;
    address?: string;
};
export declare type PropertyUpdateFormValidationValues = {
    nameStreet?: ValidationFunction<string>;
    bedsQuantity?: ValidationFunction<number>;
    bathroomsQuantity?: ValidationFunction<number>;
    dimension?: ValidationFunction<string>;
    priceXMonth?: ValidationFunction<number>;
    longitud?: ValidationFunction<string>;
    latitude?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyUpdateFormOverridesProps = {
    PropertyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nameStreet?: PrimitiveOverrideProps<TextFieldProps>;
    bedsQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    bathroomsQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    dimension?: PrimitiveOverrideProps<TextFieldProps>;
    priceXMonth?: PrimitiveOverrideProps<TextFieldProps>;
    longitud?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
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
