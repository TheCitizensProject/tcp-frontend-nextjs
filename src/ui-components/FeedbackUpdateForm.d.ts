/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Feedback } from "../API.ts";
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
export declare type FeedbackUpdateFormInputValues = {
    emailID?: string;
    overall?: number;
    businessConsumers?: number;
    publicSafety?: number;
    transportation?: number;
    cultureRecreation?: number;
    trashRecycling?: number;
    environment?: number;
    sidewalksStreetsHighways?: number;
    noise?: number;
};
export declare type FeedbackUpdateFormValidationValues = {
    emailID?: ValidationFunction<string>;
    overall?: ValidationFunction<number>;
    businessConsumers?: ValidationFunction<number>;
    publicSafety?: ValidationFunction<number>;
    transportation?: ValidationFunction<number>;
    cultureRecreation?: ValidationFunction<number>;
    trashRecycling?: ValidationFunction<number>;
    environment?: ValidationFunction<number>;
    sidewalksStreetsHighways?: ValidationFunction<number>;
    noise?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedbackUpdateFormOverridesProps = {
    FeedbackUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    emailID?: PrimitiveOverrideProps<TextFieldProps>;
    overall?: PrimitiveOverrideProps<TextFieldProps>;
    businessConsumers?: PrimitiveOverrideProps<TextFieldProps>;
    publicSafety?: PrimitiveOverrideProps<TextFieldProps>;
    transportation?: PrimitiveOverrideProps<TextFieldProps>;
    cultureRecreation?: PrimitiveOverrideProps<TextFieldProps>;
    trashRecycling?: PrimitiveOverrideProps<TextFieldProps>;
    environment?: PrimitiveOverrideProps<TextFieldProps>;
    sidewalksStreetsHighways?: PrimitiveOverrideProps<TextFieldProps>;
    noise?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedbackUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeedbackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feedback?: Feedback;
    onSubmit?: (fields: FeedbackUpdateFormInputValues) => FeedbackUpdateFormInputValues;
    onSuccess?: (fields: FeedbackUpdateFormInputValues) => void;
    onError?: (fields: FeedbackUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedbackUpdateFormInputValues) => FeedbackUpdateFormInputValues;
    onValidate?: FeedbackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeedbackUpdateForm(props: FeedbackUpdateFormProps): React.ReactElement;
