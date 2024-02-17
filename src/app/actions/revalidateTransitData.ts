'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function revalidateTransitData() {
  /**
   * TODO: Investigate
   * 
   * Calling the `revalidateTag` causes the API call to get initial RIOC alerts
   * to fire again. Causing multiple API calls and rerenders.
   * 
   * Only happens on /transit page
   */
  revalidateTag('transit-data');
}