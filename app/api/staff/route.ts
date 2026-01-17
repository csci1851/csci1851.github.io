import { NextResponse } from "next/server";
import staffData from "@/lib/data/staff.json";

export async function GET() {
  return NextResponse.json(staffData);
}
