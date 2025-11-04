import type { UserType } from "./User";

export interface Posts {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  user: UserType;
}
