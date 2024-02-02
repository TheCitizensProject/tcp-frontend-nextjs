/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  eventName: string,
  eventDatetimeRaw: string,
  eventDate: string,
  eventLocation: string,
  eventDescription: string,
  eventImage: string,
  type: string,
};

export type ModelEventConditionInput = {
  eventName?: ModelStringInput | null,
  eventDatetimeRaw?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  eventLocation?: ModelStringInput | null,
  eventDescription?: ModelStringInput | null,
  eventImage?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  eventName: string,
  eventDatetimeRaw: string,
  eventDate: string,
  eventLocation: string,
  eventDescription: string,
  eventImage: string,
  type: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  id: string,
  eventName?: string | null,
  eventDatetimeRaw?: string | null,
  eventDate?: string | null,
  eventLocation?: string | null,
  eventDescription?: string | null,
  eventImage?: string | null,
  type?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  eventName?: ModelStringInput | null,
  eventDatetimeRaw?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  eventLocation?: ModelStringInput | null,
  eventDescription?: ModelStringInput | null,
  eventImage?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  eventName?: ModelSubscriptionStringInput | null,
  eventDatetimeRaw?: ModelSubscriptionStringInput | null,
  eventDate?: ModelSubscriptionStringInput | null,
  eventLocation?: ModelSubscriptionStringInput | null,
  eventDescription?: ModelSubscriptionStringInput | null,
  eventImage?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventName: string,
      eventDatetimeRaw: string,
      eventDate: string,
      eventLocation: string,
      eventDescription: string,
      eventImage: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByTypeAndEventDateQueryVariables = {
  type: string,
  eventDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByTypeAndEventDateQuery = {
  eventsByTypeAndEventDate?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventName: string,
      eventDatetimeRaw: string,
      eventDate: string,
      eventLocation: string,
      eventDescription: string,
      eventImage: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    eventName: string,
    eventDatetimeRaw: string,
    eventDate: string,
    eventLocation: string,
    eventDescription: string,
    eventImage: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
