/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRIOCAlertData } from "../graphql/queries";
import { updateRIOCAlertData } from "../graphql/mutations";
const client = generateClient();
export default function RIOCAlertDataUpdateForm(props) {
  const {
    id: idProp,
    rIOCAlertData: rIOCAlertDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    PublishTime: "",
    subject: "",
    message_body: "",
  };
  const [PublishTime, setPublishTime] = React.useState(
    initialValues.PublishTime
  );
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [message_body, setMessage_body] = React.useState(
    initialValues.message_body
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rIOCAlertDataRecord
      ? { ...initialValues, ...rIOCAlertDataRecord }
      : initialValues;
    setPublishTime(cleanValues.PublishTime);
    setSubject(cleanValues.subject);
    setMessage_body(cleanValues.message_body);
    setErrors({});
  };
  const [rIOCAlertDataRecord, setRIOCAlertDataRecord] = React.useState(
    rIOCAlertDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRIOCAlertData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRIOCAlertData
        : rIOCAlertDataModelProp;
      setRIOCAlertDataRecord(record);
    };
    queryData();
  }, [idProp, rIOCAlertDataModelProp]);
  React.useEffect(resetStateValues, [rIOCAlertDataRecord]);
  const validations = {
    PublishTime: [],
    subject: [{ type: "Required" }],
    message_body: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          PublishTime: PublishTime ?? null,
          subject,
          message_body,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateRIOCAlertData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: rIOCAlertDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RIOCAlertDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Publish time"
        isRequired={false}
        isReadOnly={false}
        value={PublishTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PublishTime: value,
              subject,
              message_body,
            };
            const result = onChange(modelFields);
            value = result?.PublishTime ?? value;
          }
          if (errors.PublishTime?.hasError) {
            runValidationTasks("PublishTime", value);
          }
          setPublishTime(value);
        }}
        onBlur={() => runValidationTasks("PublishTime", PublishTime)}
        errorMessage={errors.PublishTime?.errorMessage}
        hasError={errors.PublishTime?.hasError}
        {...getOverrideProps(overrides, "PublishTime")}
      ></TextField>
      <TextField
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PublishTime,
              subject: value,
              message_body,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      ></TextField>
      <TextField
        label="Message body"
        isRequired={true}
        isReadOnly={false}
        value={message_body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PublishTime,
              subject,
              message_body: value,
            };
            const result = onChange(modelFields);
            value = result?.message_body ?? value;
          }
          if (errors.message_body?.hasError) {
            runValidationTasks("message_body", value);
          }
          setMessage_body(value);
        }}
        onBlur={() => runValidationTasks("message_body", message_body)}
        errorMessage={errors.message_body?.errorMessage}
        hasError={errors.message_body?.hasError}
        {...getOverrideProps(overrides, "message_body")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || rIOCAlertDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || rIOCAlertDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
