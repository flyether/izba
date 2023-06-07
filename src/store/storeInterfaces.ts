import { SerializedError } from '@reduxjs/toolkit';

export interface IError extends SerializedError {
  data: {
    message: string;
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
  weight?: string;
  characteristic?: string;
  img?: string;
};

export type ProductsSearchParams = {
  category?: string;
  skip?: number;
  limit?: number;
};
