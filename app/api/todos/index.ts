/* eslint-disable camelcase */
import http from "./_core";
import {
  TodoDeleteRequestType,
  TodoPatchRequestType,
  TodoPostRequestType,
  TodoResponseType,
} from "./_types/dto";

export const getAllTodo = async (date?: Date) => {
  if (date) {
    return await http.get<TodoResponseType>({
      url: "todos",
      params: { date },
    });
  }

  return await http.get<TodoResponseType>({
    url: "todos",
  });
};

export const createTodo = async ({
  task,
  is_complete,
  category,
  user_name,
}: TodoPostRequestType) => {
  return await http.post<void>({
    url: "todos",
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
    url: "todos",
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
    url: "todos",
    data: { todo_id },
  });
};
