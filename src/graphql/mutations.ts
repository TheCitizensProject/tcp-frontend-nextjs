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

export const createFeedbackinfo = /* GraphQL */ `mutation CreateFeedbackinfo(
  $input: CreateFeedbackinfoInput!
  $condition: ModelFeedbackinfoConditionInput
) {
  createFeedbackinfo(input: $input, condition: $condition) {
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
  APITypes.CreateFeedbackinfoMutationVariables,
  APITypes.CreateFeedbackinfoMutation
>;
export const updateFeedbackinfo = /* GraphQL */ `mutation UpdateFeedbackinfo(
  $input: UpdateFeedbackinfoInput!
  $condition: ModelFeedbackinfoConditionInput
) {
  updateFeedbackinfo(input: $input, condition: $condition) {
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
  APITypes.UpdateFeedbackinfoMutationVariables,
  APITypes.UpdateFeedbackinfoMutation
>;
export const deleteFeedbackinfo = /* GraphQL */ `mutation DeleteFeedbackinfo(
  $input: DeleteFeedbackinfoInput!
  $condition: ModelFeedbackinfoConditionInput
) {
  deleteFeedbackinfo(input: $input, condition: $condition) {
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
  APITypes.DeleteFeedbackinfoMutationVariables,
  APITypes.DeleteFeedbackinfoMutation
>;
