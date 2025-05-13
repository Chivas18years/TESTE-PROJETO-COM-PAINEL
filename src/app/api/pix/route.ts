import { NextResponse } from "next/server";

export async function GET() {
  // Aqui pode buscar do banco futuramente
  return NextResponse.json({ key: "00000000-test-pix-chave" });
}
