/* eslint-disable camelcase */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/supabase/prismaClient";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.articles.delete({
      where: { article_id: Number(id) },
    });

    return NextResponse.json(
      { message: "Article deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in DELETE handler:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }
  }
}
