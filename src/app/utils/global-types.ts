export type RIOCAlert = { 
  __typename: "RIOCAlertData"; 
  id: string; 
  PublishTime?: string | null | undefined; 
  subject: string; 
  message_body: string; 
  createdAt: string; 
  updatedAt: string; 
}

export type AppContextDataType = {
  alerts: RIOCAlert[]
}