/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RIOCAlertData } from "../API.ts";
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
export declare type RIOCAlertDataUpdateFormInputValues = {
    PublishTime?: string;
    subject?: string;
    message_body?: string;
};
export declare type RIOCAlertDataUpdateFormValidationValues = {
    PublishTime?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    message_body?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RIOCAlertDataUpdateFormOverridesProps = {
    RIOCAlertDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PublishTime?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    message_body?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RIOCAlertDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: RIOCAlertDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rIOCAlertData?: RIOCAlertData;
    onSubmit?: (fields: RIOCAlertDataUpdateFormInputValues) => RIOCAlertDataUpdateFormInputValues;
    onSuccess?: (fields: RIOCAlertDataUpdateFormInputValues) => void;
    onError?: (fields: RIOCAlertDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RIOCAlertDataUpdateFormInputValues) => RIOCAlertDataUpdateFormInputValues;
    onValidate?: RIOCAlertDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RIOCAlertDataUpdateForm(props: RIOCAlertDataUpdateFormProps): React.ReactElement;
