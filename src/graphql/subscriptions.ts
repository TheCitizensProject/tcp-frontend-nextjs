/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateRIOCAlertData = /* GraphQL */ `subscription OnCreateRIOCAlertData(
  $filter: ModelSubscriptionRIOCAlertDataFilterInput
) {
  onCreateRIOCAlertData(filter: $filter) {
    id
    publishTime
    subject
    messageBody
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRIOCAlertDataSubscriptionVariables,
  APITypes.OnCreateRIOCAlertDataSubscription
>;
export const onUpdateRIOCAlertData = /* GraphQL */ `subscription OnUpdateRIOCAlertData(
  $filter: ModelSubscriptionRIOCAlertDataFilterInput
) {
  onUpdateRIOCAlertData(filter: $filter) {
    id
    publishTime
    subject
    messageBody
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRIOCAlertDataSubscriptionVariables,
  APITypes.OnUpdateRIOCAlertDataSubscription
>;
export const onDeleteRIOCAlertData = /* GraphQL */ `subscription OnDeleteRIOCAlertData(
  $filter: ModelSubscriptionRIOCAlertDataFilterInput
) {
  onDeleteRIOCAlertData(filter: $filter) {
    id
    publishTime
    subject
    messageBody
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRIOCAlertDataSubscriptionVariables,
  APITypes.OnDeleteRIOCAlertDataSubscription
>;
