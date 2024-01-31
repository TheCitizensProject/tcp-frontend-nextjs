'use client';
 
import { useEffect } from 'react'
import TransitHeader from './component/TransitHeader'
import { BiError } from "react-icons/bi";
 
export default function Error({
  error,
  _,
}: {
  error: Error & { digest?: string }
  _: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  return (
    <div className="mx-4 mt-10">
      <TransitHeader />
      <div className="flex flex-col items-center justify-center">
        <BiError className="w-[50px] h-[50px] mx-auto my-4" />
        <p className="text-center">Something went wrong. <br/>Please try again.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="w-24 font-bold mt-4 py-1 bg-white border-2 text-center border-black rounded-full">Try Again</button>
      </div>
    </div>
  )
}