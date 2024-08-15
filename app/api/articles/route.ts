/* eslint-disable camelcase */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/supabase/prismaClient";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const keyword = searchParams.get("keyword");

    const skip = (page - 1) * limit;

    let whereClause = {};
    if (keyword) {
      whereClause = {
        OR: [
          { title: { contains: keyword, mode: "insensitive" } },
          { content: { contains: keyword, mode: "insensitive" } },
        ],
      };
    }

    const [articles, totalCount] = await Promise.all([
      prisma.articles.findMany({
        where: whereClause,
        skip, // skip 사용
        take: limit, // take 사용
        orderBy: { created_at: "asc" },
      }),
      prisma.articles.count({ where: whereClause }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      {
        articles,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 400 },
      );
    }
  }
}
