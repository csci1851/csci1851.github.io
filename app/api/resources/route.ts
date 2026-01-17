import { NextResponse } from "next/server";
import resourcesData from "@/lib/data/resources.json";

export async function GET() {
  return NextResponse.json(resourcesData);
}
