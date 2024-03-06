'use server';
import { listRIOCAlertData } from '@/graphql/queries';
import amplifyServerClient from '../utils/amplify-server-client';

export type FormStateType = { 
  errors: { sol?: string[] | undefined; }; 
  message?: undefined; 
} | { 
  message: string; 
  errors?: undefined; 
}
 
export default async function getInitialRiocAlerts() {
  try{
    const riocAlerts = await amplifyServerClient
      .graphql({ query: listRIOCAlertData });
  
    if(riocAlerts.errors?.length) throw new Error('No data');
    
    return {
      riocAlerts
    }
  } catch(error) {
    console.error("Error getting initial RIOC alerts", error);

    return {
      message: 'error'
    }
  }
}