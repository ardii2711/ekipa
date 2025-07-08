export interface User {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  nip?: string;
  role: "user" | "admin" | "pimpinan";
  status: "pending" | "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface UserUpdateData {
  fullName?: string;
  email?: string;
  username?: string;
  nip?: string;
  role?: "user" | "admin" | "pimpinan";
  status?: "pending" | "active" | "inactive";
}
