'use server';
import { cookies } from 'next/headers';
import { runWithAmplifyServerContext } from '../utils/amplifyServerUtils';
import { generateClient } from '@aws-amplify/api/server'
import { listRIOCAlertData } from '@/graphql/queries';
import config from '@/amplifyconfiguration.json';

export type FormStateType = { 
  errors: { sol?: string[] | undefined; }; 
  message?: undefined; 
} | { 
  message: string; 
  errors?: undefined; 
}
 
export default async function getInitialRiocAlerts() {
  try{
    const client = generateClient({ config: {
      API: {
        GraphQL: {
          endpoint: config.aws_appsync_graphqlEndpoint,
          region: config.aws_appsync_region,
          defaultAuthMode: 'apiKey',
          apiKey: config.aws_appsync_apiKey
        }
      }
    }});
    
    const riocAlerts = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (ctx) => client.graphql(ctx, { query: listRIOCAlertData }),
    });
  
    return {
      riocAlerts
    }
  } catch(error) {
    return {
      message: 'error'
    }
  }
}