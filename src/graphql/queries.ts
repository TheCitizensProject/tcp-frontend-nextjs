/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const getRIOCAlertData = /* GraphQL */ `query GetRIOCAlertData($id: ID!) {
  getRIOCAlertData(id: $id) {
    id
    PublishTime
    subject
    message_body
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRIOCAlertDataQueryVariables,
  APITypes.GetRIOCAlertDataQuery
>;
export const listRIOCAlertData = /* GraphQL */ `query ListRIOCAlertData(
  $filter: ModelRIOCAlertDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listRIOCAlertData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      PublishTime
      subject
      message_body
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRIOCAlertDataQueryVariables,
  APITypes.ListRIOCAlertDataQuery
>;
export const eventsByTypeAndEventDate = /* GraphQL */ `query EventsByTypeAndEventDate(
  $type: String!
  $eventDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsByTypeAndEventDate(
    type: $type
    eventDate: $eventDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventsByTypeAndEventDateQueryVariables,
  APITypes.EventsByTypeAndEventDateQuery
>;
