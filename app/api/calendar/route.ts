import { NextResponse } from "next/server";
import calendarData from "@/lib/data/calendar.json";

export async function GET() {
  return NextResponse.json(calendarData);
}
