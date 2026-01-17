import { NextResponse } from "next/server";
import lecturesData from "@/lib/data/lectures.json";

export async function GET() {
  return NextResponse.json(lecturesData);
}
