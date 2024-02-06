/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRIOCAlertData = /* GraphQL */ `
  mutation CreateRIOCAlertData(
    $input: CreateRIOCAlertDataInput!
    $condition: ModelRIOCAlertDataConditionInput
  ) {
    createRIOCAlertData(input: $input, condition: $condition) {
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
export const updateRIOCAlertData = /* GraphQL */ `
  mutation UpdateRIOCAlertData(
    $input: UpdateRIOCAlertDataInput!
    $condition: ModelRIOCAlertDataConditionInput
  ) {
    updateRIOCAlertData(input: $input, condition: $condition) {
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
export const deleteRIOCAlertData = /* GraphQL */ `
  mutation DeleteRIOCAlertData(
    $input: DeleteRIOCAlertDataInput!
    $condition: ModelRIOCAlertDataConditionInput
  ) {
    deleteRIOCAlertData(input: $input, condition: $condition) {
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
