/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RIOCAlertDataCreateFormInputValues = {
    publishTime?: string;
    subject?: string;
    messageBody?: string;
};
export declare type RIOCAlertDataCreateFormValidationValues = {
    publishTime?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    messageBody?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RIOCAlertDataCreateFormOverridesProps = {
    RIOCAlertDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    publishTime?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    messageBody?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RIOCAlertDataCreateFormProps = React.PropsWithChildren<{
    overrides?: RIOCAlertDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RIOCAlertDataCreateFormInputValues) => RIOCAlertDataCreateFormInputValues;
    onSuccess?: (fields: RIOCAlertDataCreateFormInputValues) => void;
    onError?: (fields: RIOCAlertDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RIOCAlertDataCreateFormInputValues) => RIOCAlertDataCreateFormInputValues;
    onValidate?: RIOCAlertDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function RIOCAlertDataCreateForm(props: RIOCAlertDataCreateFormProps): React.ReactElement;
