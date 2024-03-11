export type RIOCAlert = { 
  __typename: "RIOCAlertData"; 
  id: string; 
  publishTime?: string | null | undefined; 
  subject: string; 
  messageBody: string; 
  createdAt: string; 
  updatedAt: string; 
}

export type AppContextDataType = {
  alerts: RIOCAlert[]
}

export type TransitTimeDataType = (string | number)[];

export type TransitDataType = {
  error?: unknown;
  data: {
    data: {
      ferry_times: TransitTimeDataType[],
      ferry_times_static: TransitTimeDataType[],
      both_directions: TransitTimeDataType[],
      tram_times: TransitTimeDataType[],
    },
    detail: "Not Found",
  }[] | null;
}

export type TransitProps = {
  transitData: TransitDataType
}