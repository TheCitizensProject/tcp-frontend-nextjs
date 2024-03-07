/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    id
    eventName
    eventDatetimeRaw
    eventDate
    eventLocation
    eventDescription
    eventImage
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    id
    eventName
    eventDatetimeRaw
    eventDate
    eventLocation
    eventDescription
    eventImage
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    id
    eventName
    eventDatetimeRaw
    eventDate
    eventLocation
    eventDescription
    eventImage
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createRIOCAlertData = /* GraphQL */ `mutation CreateRIOCAlertData(
  $input: CreateRIOCAlertDataInput!
  $condition: ModelRIOCAlertDataConditionInput
) {
  createRIOCAlertData(input: $input, condition: $condition) {
    id
    publishTime
    subject
    messageBody
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRIOCAlertDataMutationVariables,
  APITypes.CreateRIOCAlertDataMutation
>;
export const updateRIOCAlertData = /* GraphQL */ `mutation UpdateRIOCAlertData(
  $input: UpdateRIOCAlertDataInput!
  $condition: ModelRIOCAlertDataConditionInput
) {
  updateRIOCAlertData(input: $input, condition: $condition) {
    id
    publishTime
    subject
    messageBody
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRIOCAlertDataMutationVariables,
  APITypes.UpdateRIOCAlertDataMutation
>;
export const deleteRIOCAlertData = /* GraphQL */ `mutation DeleteRIOCAlertData(
  $input: DeleteRIOCAlertDataInput!
  $condition: ModelRIOCAlertDataConditionInput
) {
  deleteRIOCAlertData(input: $input, condition: $condition) {
    id
    publishTime
    subject
    messageBody
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRIOCAlertDataMutationVariables,
  APITypes.DeleteRIOCAlertDataMutation
>;
export const createFeedback = /* GraphQL */ `mutation CreateFeedback(
  $input: CreateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  createFeedback(input: $input, condition: $condition) {
    id
    emailID
    overall
    businessConsumers
    publicSafety
    transportation
    cultureRecreation
    trashRecycling
    environment
    sidewalksStreetsHighways
    noise
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackMutationVariables,
  APITypes.CreateFeedbackMutation
>;
export const updateFeedback = /* GraphQL */ `mutation UpdateFeedback(
  $input: UpdateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  updateFeedback(input: $input, condition: $condition) {
    id
    emailID
    overall
    businessConsumers
    publicSafety
    transportation
    cultureRecreation
    trashRecycling
    environment
    sidewalksStreetsHighways
    noise
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackMutationVariables,
  APITypes.UpdateFeedbackMutation
>;
export const deleteFeedback = /* GraphQL */ `mutation DeleteFeedback(
  $input: DeleteFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  deleteFeedback(input: $input, condition: $condition) {
    id
    emailID
    overall
    businessConsumers
    publicSafety
    transportation
    cultureRecreation
    trashRecycling
    environment
    sidewalksStreetsHighways
    noise
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackMutationVariables,
  APITypes.DeleteFeedbackMutation
>;
