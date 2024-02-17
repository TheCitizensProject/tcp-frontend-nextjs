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
    publishTime: "",
    subject: "",
    messageBody: "",
  };
  const [publishTime, setPublishTime] = React.useState(
    initialValues.publishTime
  );
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [messageBody, setMessageBody] = React.useState(
    initialValues.messageBody
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rIOCAlertDataRecord
      ? { ...initialValues, ...rIOCAlertDataRecord }
      : initialValues;
    setPublishTime(cleanValues.publishTime);
    setSubject(cleanValues.subject);
    setMessageBody(cleanValues.messageBody);
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
    publishTime: [],
    subject: [{ type: "Required" }],
    messageBody: [{ type: "Required" }],
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
          publishTime: publishTime ?? null,
          subject,
          messageBody,
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
        value={publishTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publishTime: value,
              subject,
              messageBody,
            };
            const result = onChange(modelFields);
            value = result?.publishTime ?? value;
          }
          if (errors.publishTime?.hasError) {
            runValidationTasks("publishTime", value);
          }
          setPublishTime(value);
        }}
        onBlur={() => runValidationTasks("publishTime", publishTime)}
        errorMessage={errors.publishTime?.errorMessage}
        hasError={errors.publishTime?.hasError}
        {...getOverrideProps(overrides, "publishTime")}
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
              publishTime,
              subject: value,
              messageBody,
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
        value={messageBody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publishTime,
              subject,
              messageBody: value,
            };
            const result = onChange(modelFields);
            value = result?.messageBody ?? value;
          }
          if (errors.messageBody?.hasError) {
            runValidationTasks("messageBody", value);
          }
          setMessageBody(value);
        }}
        onBlur={() => runValidationTasks("messageBody", messageBody)}
        errorMessage={errors.messageBody?.errorMessage}
        hasError={errors.messageBody?.hasError}
        {...getOverrideProps(overrides, "messageBody")}
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
