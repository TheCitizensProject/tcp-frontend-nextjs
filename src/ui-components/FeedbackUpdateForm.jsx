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
import { getFeedback } from "../graphql/queries";
import { updateFeedback } from "../graphql/mutations";
const client = generateClient();
export default function FeedbackUpdateForm(props) {
  const {
    id: idProp,
    feedback: feedbackModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    emailID: "",
    overall: "",
    businessConsumers: "",
    publicSafety: "",
    transportation: "",
    cultureRecreation: "",
    trashRecycling: "",
    environment: "",
    sidewalksStreetsHighways: "",
    noise: "",
  };
  const [emailID, setEmailID] = React.useState(initialValues.emailID);
  const [overall, setOverall] = React.useState(initialValues.overall);
  const [businessConsumers, setBusinessConsumers] = React.useState(
    initialValues.businessConsumers
  );
  const [publicSafety, setPublicSafety] = React.useState(
    initialValues.publicSafety
  );
  const [transportation, setTransportation] = React.useState(
    initialValues.transportation
  );
  const [cultureRecreation, setCultureRecreation] = React.useState(
    initialValues.cultureRecreation
  );
  const [trashRecycling, setTrashRecycling] = React.useState(
    initialValues.trashRecycling
  );
  const [environment, setEnvironment] = React.useState(
    initialValues.environment
  );
  const [sidewalksStreetsHighways, setSidewalksStreetsHighways] =
    React.useState(initialValues.sidewalksStreetsHighways);
  const [noise, setNoise] = React.useState(initialValues.noise);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = feedbackRecord
      ? { ...initialValues, ...feedbackRecord }
      : initialValues;
    setEmailID(cleanValues.emailID);
    setOverall(cleanValues.overall);
    setBusinessConsumers(cleanValues.businessConsumers);
    setPublicSafety(cleanValues.publicSafety);
    setTransportation(cleanValues.transportation);
    setCultureRecreation(cleanValues.cultureRecreation);
    setTrashRecycling(cleanValues.trashRecycling);
    setEnvironment(cleanValues.environment);
    setSidewalksStreetsHighways(cleanValues.sidewalksStreetsHighways);
    setNoise(cleanValues.noise);
    setErrors({});
  };
  const [feedbackRecord, setFeedbackRecord] = React.useState(feedbackModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFeedback.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFeedback
        : feedbackModelProp;
      setFeedbackRecord(record);
    };
    queryData();
  }, [idProp, feedbackModelProp]);
  React.useEffect(resetStateValues, [feedbackRecord]);
  const validations = {
    emailID: [],
    overall: [],
    businessConsumers: [],
    publicSafety: [],
    transportation: [],
    cultureRecreation: [],
    trashRecycling: [],
    environment: [],
    sidewalksStreetsHighways: [],
    noise: [],
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
          emailID: emailID ?? null,
          overall: overall ?? null,
          businessConsumers: businessConsumers ?? null,
          publicSafety: publicSafety ?? null,
          transportation: transportation ?? null,
          cultureRecreation: cultureRecreation ?? null,
          trashRecycling: trashRecycling ?? null,
          environment: environment ?? null,
          sidewalksStreetsHighways: sidewalksStreetsHighways ?? null,
          noise: noise ?? null,
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
            query: updateFeedback.replaceAll("__typename", ""),
            variables: {
              input: {
                id: feedbackRecord.id,
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
      {...getOverrideProps(overrides, "FeedbackUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email id"
        isRequired={false}
        isReadOnly={false}
        value={emailID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emailID: value,
              overall,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.emailID ?? value;
          }
          if (errors.emailID?.hasError) {
            runValidationTasks("emailID", value);
          }
          setEmailID(value);
        }}
        onBlur={() => runValidationTasks("emailID", emailID)}
        errorMessage={errors.emailID?.errorMessage}
        hasError={errors.emailID?.hasError}
        {...getOverrideProps(overrides, "emailID")}
      ></TextField>
      <TextField
        label="Overall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overall}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall: value,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.overall ?? value;
          }
          if (errors.overall?.hasError) {
            runValidationTasks("overall", value);
          }
          setOverall(value);
        }}
        onBlur={() => runValidationTasks("overall", overall)}
        errorMessage={errors.overall?.errorMessage}
        hasError={errors.overall?.hasError}
        {...getOverrideProps(overrides, "overall")}
      ></TextField>
      <TextField
        label="Business consumers"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={businessConsumers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers: value,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.businessConsumers ?? value;
          }
          if (errors.businessConsumers?.hasError) {
            runValidationTasks("businessConsumers", value);
          }
          setBusinessConsumers(value);
        }}
        onBlur={() =>
          runValidationTasks("businessConsumers", businessConsumers)
        }
        errorMessage={errors.businessConsumers?.errorMessage}
        hasError={errors.businessConsumers?.hasError}
        {...getOverrideProps(overrides, "businessConsumers")}
      ></TextField>
      <TextField
        label="Public safety"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={publicSafety}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety: value,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.publicSafety ?? value;
          }
          if (errors.publicSafety?.hasError) {
            runValidationTasks("publicSafety", value);
          }
          setPublicSafety(value);
        }}
        onBlur={() => runValidationTasks("publicSafety", publicSafety)}
        errorMessage={errors.publicSafety?.errorMessage}
        hasError={errors.publicSafety?.hasError}
        {...getOverrideProps(overrides, "publicSafety")}
      ></TextField>
      <TextField
        label="Transportation"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={transportation}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety,
              transportation: value,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.transportation ?? value;
          }
          if (errors.transportation?.hasError) {
            runValidationTasks("transportation", value);
          }
          setTransportation(value);
        }}
        onBlur={() => runValidationTasks("transportation", transportation)}
        errorMessage={errors.transportation?.errorMessage}
        hasError={errors.transportation?.hasError}
        {...getOverrideProps(overrides, "transportation")}
      ></TextField>
      <TextField
        label="Culture recreation"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cultureRecreation}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation: value,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.cultureRecreation ?? value;
          }
          if (errors.cultureRecreation?.hasError) {
            runValidationTasks("cultureRecreation", value);
          }
          setCultureRecreation(value);
        }}
        onBlur={() =>
          runValidationTasks("cultureRecreation", cultureRecreation)
        }
        errorMessage={errors.cultureRecreation?.errorMessage}
        hasError={errors.cultureRecreation?.hasError}
        {...getOverrideProps(overrides, "cultureRecreation")}
      ></TextField>
      <TextField
        label="Trash recycling"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trashRecycling}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling: value,
              environment,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.trashRecycling ?? value;
          }
          if (errors.trashRecycling?.hasError) {
            runValidationTasks("trashRecycling", value);
          }
          setTrashRecycling(value);
        }}
        onBlur={() => runValidationTasks("trashRecycling", trashRecycling)}
        errorMessage={errors.trashRecycling?.errorMessage}
        hasError={errors.trashRecycling?.hasError}
        {...getOverrideProps(overrides, "trashRecycling")}
      ></TextField>
      <TextField
        label="Environment"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={environment}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment: value,
              sidewalksStreetsHighways,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.environment ?? value;
          }
          if (errors.environment?.hasError) {
            runValidationTasks("environment", value);
          }
          setEnvironment(value);
        }}
        onBlur={() => runValidationTasks("environment", environment)}
        errorMessage={errors.environment?.errorMessage}
        hasError={errors.environment?.hasError}
        {...getOverrideProps(overrides, "environment")}
      ></TextField>
      <TextField
        label="Sidewalks streets highways"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sidewalksStreetsHighways}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways: value,
              noise,
            };
            const result = onChange(modelFields);
            value = result?.sidewalksStreetsHighways ?? value;
          }
          if (errors.sidewalksStreetsHighways?.hasError) {
            runValidationTasks("sidewalksStreetsHighways", value);
          }
          setSidewalksStreetsHighways(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "sidewalksStreetsHighways",
            sidewalksStreetsHighways
          )
        }
        errorMessage={errors.sidewalksStreetsHighways?.errorMessage}
        hasError={errors.sidewalksStreetsHighways?.hasError}
        {...getOverrideProps(overrides, "sidewalksStreetsHighways")}
      ></TextField>
      <TextField
        label="Noise"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={noise}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              emailID,
              overall,
              businessConsumers,
              publicSafety,
              transportation,
              cultureRecreation,
              trashRecycling,
              environment,
              sidewalksStreetsHighways,
              noise: value,
            };
            const result = onChange(modelFields);
            value = result?.noise ?? value;
          }
          if (errors.noise?.hasError) {
            runValidationTasks("noise", value);
          }
          setNoise(value);
        }}
        onBlur={() => runValidationTasks("noise", noise)}
        errorMessage={errors.noise?.errorMessage}
        hasError={errors.noise?.hasError}
        {...getOverrideProps(overrides, "noise")}
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
          isDisabled={!(idProp || feedbackModelProp)}
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
              !(idProp || feedbackModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
