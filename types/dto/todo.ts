export interface TodoResponseType {
  category: string;
  created_at: string;
  date: string;
  id: number;
  is_complete: boolean | null;
  task: string;
  user_id: string;
  user_name: string;
}

export interface TodoPostRequestType {
  user_name: string;
  task: string;
  is_complete: boolean;
  category: string;
}

export interface TodoPatchRequestType {
  todo_id: number;
  task?: string;
  is_complete?: boolean;
  category?: string;
}

export interface TodoDeleteRequestType {
  todo_id: number;
}
