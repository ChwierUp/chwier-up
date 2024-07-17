/* eslint-disable camelcase */
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const articles = await prisma.articles.findMany();

    return NextResponse.json(articles, { status: 200 });
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

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 },
      );
    }

    const body = await req.json();

    const data = await prisma.articles.create({
      data: {
        user_id: userId,
        created_at: new Date(),
        updated_at: new Date(),
        title: body.ogTitle,
        url: body.url,
        content: body.ogDescription,
        category: body.category,
        img_url: body.ogImage,
        user_name: session?.user?.name as string,
        user_image: session?.user?.image as string,
      },
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }
  }
}

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
