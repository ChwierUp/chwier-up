/* eslint-disable camelcase */
import { auth } from "@/auth";
import { TodoPatchRequestType } from "@/types/dto/todo";
import prisma from "@/utils/supabase/prismaClient";

export async function PATCH(req: Request) {
  try {
    const session = await auth();
    const { todo_id, is_complete, category, task }: TodoPatchRequestType =
      await req.json();

    const data: { is_complete?: boolean; category?: string; task?: string } =
      {};
    if (is_complete !== undefined) data.is_complete = is_complete;
    if (category !== undefined) data.category = category;
    if (task !== undefined) data.task = task;

    const updatedTodo = await prisma.todos.updateMany({
      where: {
        id: todo_id,
        user_id: session?.user?.id as string,
      },
      data: data,
    });

    if (updatedTodo.count === 0) {
      return new Response(
        JSON.stringify({ error: "Todo not found or no changes made" }),
        {
          status: 404,
        },
      );
    }

    return new Response(
      JSON.stringify({ message: "Todo updated successfully" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
