/* eslint-disable camelcase */
import {
  TodoDeleteRequestType,
  TodoPatchRequestType,
  TodoPostRequestType,
  TodoResponseType,
} from "@/types/dto/todo";

import http from "./core";

export const getAllTodo = async (date?: Date) => {
  if (date) {
    return await http.get<TodoResponseType>({
      url: "todo",
      params: { date },
    });
  }

  return await http.get<TodoResponseType>({
    url: "todo",
  });
};

export const createTodo = async ({
  task,
  is_complete,
  category,
  user_name,
}: TodoPostRequestType) => {
  return await http.post<void>({
    url: "todo/create",
    data: {
      task,
      is_complete,
      category,
      user_name,
    },
  });
};

export const updateTodo = async ({
  todo_id,
  is_complete,
  category,
  task,
}: TodoPatchRequestType) => {
  return await http.patch<TodoResponseType>({
    url: "todo",
    data: {
      todo_id,
      is_complete,
      category,
      task,
    },
  });
};

export const deleteTodo = async ({ todo_id }: TodoDeleteRequestType) => {
  return await http.delete<void>({
    url: "todo",
    data: { todo_id },
  });
};
