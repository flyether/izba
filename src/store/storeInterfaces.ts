import { SerializedError } from '@reduxjs/toolkit';

export interface IError extends SerializedError {
  data: {
    detail: string;
    stack: string;
  };
  status: number;
}

export type RegData = {
  email: string;
  password: string;
  name?: string;
};

export type User = {
  email: string;
  name?: string;
  id: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  phone?: string;
};
export type PatchUser = {
  name?: string;
  phone?: string;
};
export interface IToken {
  token: string;
}

export interface AuthenticationRequest {
  token_type: string;
  access_token: string;
}

export type ResetPasswordEmail = {
  email: string;
};

export type SetPasswordNew = {
  current_password: string;
  new_password: string;
  re_new_password: string;
};

export type GetCategoriesReq = {
  title: string;
  id: number;
};

export type GetProductPhoto = {
  photo: string;
  id: number;
  product: string;
};

export type ProductType = {
  id: number;
  title: string;
  category: number;
  description: string;
  price: number;
  cook_time?: string;
  delivery?: string;
  composition?: string;
  temperature?: string;
  weight?: number;
  amount?: number;
  units?: string;
  characteristic?: string;
  photo?: string[];
};

export type ProductsSearchParams = {
  category?: string;
  skip?: number;
  limit?: number;
};
export type SoppingCart = {
  product: number | null;
  user_id: string;
  amount: number | null;
};

export type SoppingCartResponse = {
  id: number;
  product: number;
  user_id: string;
  amount: number;
  price: number;
};

export type GuestId = {
  user_id: string;
};
export type OrdersResponse = {
  detail: string;
  order_id: number;
};

export type OrdersRequest = {
  user_id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  comment?: string;
  delivery: boolean;
  order_products: number[];
};

export type OrderProducts = {
  product: number;
  amount: number;
  price: number;
};

export type OrdersGetRequest = {
  user_id: string;
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  comment?: string;
  delivery: boolean;
  payment: boolean;
  created_on: string;
  status: string;
  order_products: OrderProducts[];
};
