/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRIOCAlertData = /* GraphQL */ `
  query GetRIOCAlertData($id: ID!) {
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
`;
export const listRIOCAlertData = /* GraphQL */ `
  query ListRIOCAlertData(
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
`;
