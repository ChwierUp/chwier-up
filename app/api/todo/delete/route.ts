/* eslint-disable camelcase */
import { TodoDeleteRequestType } from "@/types/dto/todo";
import prisma from "@/utils/supabase/prismaClient";

export async function DELETE(req: Request) {
  try {
    const { todo_id }: TodoDeleteRequestType = await req.json();

    const deletedTodo = await prisma.todos.delete({
      where: {
        id: todo_id,
      },
    });

    if (!deletedTodo) {
      return new Response(JSON.stringify({ error: "Todo not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Todo deleted successfully" }),
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
