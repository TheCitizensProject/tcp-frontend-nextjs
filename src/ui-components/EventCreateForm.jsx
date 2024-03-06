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
import { createEvent } from "../graphql/mutations";
const client = generateClient();
export default function EventCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    eventName: "",
    eventDatetimeRaw: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    eventImage: "",
    type: "",
  };
  const [eventName, setEventName] = React.useState(initialValues.eventName);
  const [eventDatetimeRaw, setEventDatetimeRaw] = React.useState(
    initialValues.eventDatetimeRaw
  );
  const [eventDate, setEventDate] = React.useState(initialValues.eventDate);
  const [eventLocation, setEventLocation] = React.useState(
    initialValues.eventLocation
  );
  const [eventDescription, setEventDescription] = React.useState(
    initialValues.eventDescription
  );
  const [eventImage, setEventImage] = React.useState(initialValues.eventImage);
  const [type, setType] = React.useState(initialValues.type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEventName(initialValues.eventName);
    setEventDatetimeRaw(initialValues.eventDatetimeRaw);
    setEventDate(initialValues.eventDate);
    setEventLocation(initialValues.eventLocation);
    setEventDescription(initialValues.eventDescription);
    setEventImage(initialValues.eventImage);
    setType(initialValues.type);
    setErrors({});
  };
  const validations = {
    eventName: [{ type: "Required" }],
    eventDatetimeRaw: [{ type: "Required" }],
    eventDate: [{ type: "Required" }],
    eventLocation: [{ type: "Required" }],
    eventDescription: [{ type: "Required" }],
    eventImage: [{ type: "Required" }],
    type: [{ type: "Required" }],
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
          eventName,
          eventDatetimeRaw,
          eventDate,
          eventLocation,
          eventDescription,
          eventImage,
          type,
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
            query: createEvent.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventCreateForm")}
      {...rest}
    >
      <TextField
        label="Event name"
        isRequired={true}
        isReadOnly={false}
        value={eventName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName: value,
              eventDatetimeRaw,
              eventDate,
              eventLocation,
              eventDescription,
              eventImage,
              type,
            };
            const result = onChange(modelFields);
            value = result?.eventName ?? value;
          }
          if (errors.eventName?.hasError) {
            runValidationTasks("eventName", value);
          }
          setEventName(value);
        }}
        onBlur={() => runValidationTasks("eventName", eventName)}
        errorMessage={errors.eventName?.errorMessage}
        hasError={errors.eventName?.hasError}
        {...getOverrideProps(overrides, "eventName")}
      ></TextField>
      <TextField
        label="Event datetime raw"
        isRequired={true}
        isReadOnly={false}
        value={eventDatetimeRaw}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName,
              eventDatetimeRaw: value,
              eventDate,
              eventLocation,
              eventDescription,
              eventImage,
              type,
            };
            const result = onChange(modelFields);
            value = result?.eventDatetimeRaw ?? value;
          }
          if (errors.eventDatetimeRaw?.hasError) {
            runValidationTasks("eventDatetimeRaw", value);
          }
          setEventDatetimeRaw(value);
        }}
        onBlur={() => runValidationTasks("eventDatetimeRaw", eventDatetimeRaw)}
        errorMessage={errors.eventDatetimeRaw?.errorMessage}
        hasError={errors.eventDatetimeRaw?.hasError}
        {...getOverrideProps(overrides, "eventDatetimeRaw")}
      ></TextField>
      <TextField
        label="Event date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={eventDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName,
              eventDatetimeRaw,
              eventDate: value,
              eventLocation,
              eventDescription,
              eventImage,
              type,
            };
            const result = onChange(modelFields);
            value = result?.eventDate ?? value;
          }
          if (errors.eventDate?.hasError) {
            runValidationTasks("eventDate", value);
          }
          setEventDate(value);
        }}
        onBlur={() => runValidationTasks("eventDate", eventDate)}
        errorMessage={errors.eventDate?.errorMessage}
        hasError={errors.eventDate?.hasError}
        {...getOverrideProps(overrides, "eventDate")}
      ></TextField>
      <TextField
        label="Event location"
        isRequired={true}
        isReadOnly={false}
        value={eventLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName,
              eventDatetimeRaw,
              eventDate,
              eventLocation: value,
              eventDescription,
              eventImage,
              type,
            };
            const result = onChange(modelFields);
            value = result?.eventLocation ?? value;
          }
          if (errors.eventLocation?.hasError) {
            runValidationTasks("eventLocation", value);
          }
          setEventLocation(value);
        }}
        onBlur={() => runValidationTasks("eventLocation", eventLocation)}
        errorMessage={errors.eventLocation?.errorMessage}
        hasError={errors.eventLocation?.hasError}
        {...getOverrideProps(overrides, "eventLocation")}
      ></TextField>
      <TextField
        label="Event description"
        isRequired={true}
        isReadOnly={false}
        value={eventDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName,
              eventDatetimeRaw,
              eventDate,
              eventLocation,
              eventDescription: value,
              eventImage,
              type,
            };
            const result = onChange(modelFields);
            value = result?.eventDescription ?? value;
          }
          if (errors.eventDescription?.hasError) {
            runValidationTasks("eventDescription", value);
          }
          setEventDescription(value);
        }}
        onBlur={() => runValidationTasks("eventDescription", eventDescription)}
        errorMessage={errors.eventDescription?.errorMessage}
        hasError={errors.eventDescription?.hasError}
        {...getOverrideProps(overrides, "eventDescription")}
      ></TextField>
      <TextField
        label="Event image"
        isRequired={true}
        isReadOnly={false}
        value={eventImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName,
              eventDatetimeRaw,
              eventDate,
              eventLocation,
              eventDescription,
              eventImage: value,
              type,
            };
            const result = onChange(modelFields);
            value = result?.eventImage ?? value;
          }
          if (errors.eventImage?.hasError) {
            runValidationTasks("eventImage", value);
          }
          setEventImage(value);
        }}
        onBlur={() => runValidationTasks("eventImage", eventImage)}
        errorMessage={errors.eventImage?.errorMessage}
        hasError={errors.eventImage?.hasError}
        {...getOverrideProps(overrides, "eventImage")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventName,
              eventDatetimeRaw,
              eventDate,
              eventLocation,
              eventDescription,
              eventImage,
              type: value,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
