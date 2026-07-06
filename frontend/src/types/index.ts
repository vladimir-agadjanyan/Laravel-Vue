export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  body: string;
  published: boolean;
  createdAt: string;
}