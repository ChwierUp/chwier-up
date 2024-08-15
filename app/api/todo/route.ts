/* eslint-disable camelcase */

import prisma from "@/utils/supabase/prismaClient";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const dateString = url.searchParams.get("date");

    let todos;

    if (dateString) {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return Response.json({ error: "Invalid date" }, { status: 400 });
      }

      const kstDate = new Date(date.getTime() + 9 * 3600000).toISOString();
      const startDate = new Date(kstDate);
      const endDate = new Date(startDate);

      endDate.setDate(startDate.getDate() + 1);

      todos = await prisma.todos.findMany({
        where: {
          created_at: {
            gte: startDate,
            lt: endDate,
          },
        },
      });

      return Response.json({ todos });
    } else {
      todos = await prisma.todos.findMany();

      return Response.json({ todos });
    }
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
