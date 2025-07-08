export interface Progress {
  _id: string;
  date: string;
  description: string;
  supportEvidence?: string;
  percentage: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Comment {
  _id: string;
  user: {
    _id: string;
    fullName: string;
  };
  commentText: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface WorkPlan {
  _id: string;
  user: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "pending" | "in progress" | "completed" | "archived";
  progress: Progress[];
  comments: Comment[];
  createdAt?: string;
  updatedAt?: string;
}

export interface WorkPlanCreateData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface WorkPlanUpdateData {
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  status?: "pending" | "in progress" | "completed" | "archived";
}

export interface ProgressCreateData {
  date?: string;
  description: string;
  supportEvidence?: string;
  percentage: number;
}

export interface ProgressUpdateData {
  date?: string;
  description?: string;
  supportEvidence?: string;
  percentage?: number;
}

export interface CommentCreateData {
  commentText: string;
}
