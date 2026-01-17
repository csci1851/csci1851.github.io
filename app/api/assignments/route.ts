import { NextResponse } from "next/server";
import assignmentsData from "@/lib/data/assignments.json";

export async function GET() {
  return NextResponse.json(assignmentsData);
}
