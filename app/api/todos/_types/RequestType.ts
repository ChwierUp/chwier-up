export interface TodoPostRequestType {
  user_id: string;
  user_name: string;
  task: string;
  is_complete: boolean;
  category: string;
}

export interface TodoPatchRequestType {
  id: number;
  user_id: string;
  task: string;
  is_complete: boolean;
  category: string;
}

export interface TodoDeleteRequestType {
  id: number;
}
