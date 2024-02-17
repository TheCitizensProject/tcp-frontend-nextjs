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