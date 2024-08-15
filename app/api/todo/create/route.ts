/* eslint-disable camelcase */
import { auth } from "@/auth";
import { TodoPostRequestType } from "@/types/dto/todo";
import prisma from "@/utils/supabase/prismaClient";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { task, is_complete, category, user_name }: TodoPostRequestType =
      await req.json();

    const createTodo = await prisma.todos.create({
      data: {
        task,
        is_complete,
        category,
        user_id: session?.user?.id as string,
        user_name,
      },
    });

    return Response.json(createTodo);
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
