'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function revalidateTransitData() {
  revalidateTag('transit-data');
}