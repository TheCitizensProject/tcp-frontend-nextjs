export const dynamic = 'force-dynamic'

import { fetchTransitData } from "@/app/utils/transit";
import { NextResponse } from "next/server";

export async function GET(_: Request){
  const result = await fetchTransitData();

  if (result.error) {
    return NextResponse.json({ message: "Something went wrong." }, { status: 400 });
  }

  return NextResponse.json(result.data, { status: 200 });
};