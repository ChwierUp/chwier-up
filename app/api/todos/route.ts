/* eslint-disable camelcase */

import prisma from "@/utils/supabase/prismaClient";
import {
  TodoDeleteRequestType,
  TodoPatchRequestType,
  TodoPostRequestType,
} from "./_types/RequestType";

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

export async function POST(req: Request) {
  try {
    const {
      task,
      is_complete,
      category,
      user_id,
      user_name,
    }: TodoPostRequestType = await req.json();

    const createTodo = await prisma.todos.create({
      data: {
        task,
        is_complete,
        category,
        user_id,
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

export async function PATCH(req: Request) {
  try {
    const { id, user_id, is_complete, category, task }: TodoPatchRequestType =
      await req.json();

    const data: { is_complete?: boolean; category?: string; task?: string } =
      {};
    if (is_complete !== undefined) data.is_complete = is_complete;
    if (category !== undefined) data.category = category;
    if (task !== undefined) data.task = task;

    const updatedTodo = await prisma.todos.updateMany({
      where: {
        id,
        user_id,
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

export async function DELETE(req: Request) {
  try {
    const { id }: TodoDeleteRequestType = await req.json();

    const deletedTodo = await prisma.todos.delete({
      where: {
        id: id,
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
