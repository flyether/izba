import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Url } from '../urlConstants';
import { IError } from '../storeInterfaces';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: Url.BASE_URL,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem('tokenKazatskaya');

      if (token) {
        headers.set('Authorization', `bearer ${token}`);
      }

      return headers;
    },
  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    IError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,

  tagTypes: ['User', 'Products'],
  endpoints: (_) => ({}),
});
