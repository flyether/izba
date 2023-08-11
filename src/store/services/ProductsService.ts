import { setCategories } from '../slices/CategoriesSlice';
import { setOrderProducts, setOrdersfromServer } from '../slices/GeneralConditionsSlice';
import { setProducts } from '../slices/ProductsSlice';
import {
  GetCategoriesReq,
  GetProductPhoto,
  OrdersGetRequest,
  OrdersRequest,
  OrdersResponse,
  ProductType,
  ProductsSearchParams,
  SoppingCart,
  SoppingCartResponse,
} from '../storeInterfaces';
import { Url } from '../urlConstants';
import { commonApi } from './common.api';

export const ProductsAPI = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<GetCategoriesReq[], void>({
      query: () => ({ url: Url.API_CATEGORIES }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCategories(result.data));
        } catch (e) {
          // Intentionally empty catch block - error handling is performed elsewhere
        }
      },
    }),
    getProductById: build.query<ProductType, string>({
      query: (id) => ({ url: `${Url.API_PRODUCTS}/${id}` }),
    }),
    getProductPhotoById: build.query<GetProductPhoto[], string>({
      query: (id) => ({ url: `${Url.API_PRODUCTS}/${id}/upload-photo` }),
    }),

    getAllProducts: build.query<ProductType[], ProductsSearchParams>({
      query: ({ category, limit = 100, skip = 0 }) => {
        const params: Record<string, string | number> = {};
        if (category !== undefined) params.category = category;
        if (limit) params.limit = limit;
        if (skip) params.skip = skip;
        return {
          url: Url.API_PRODUCTS,
          params,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setProducts(result.data));
        } catch (e) {
          // Intentionally empty catch block - error handling is performed elsewhere
        }
      },
    }),
    shoppingCartPost: build.mutation<SoppingCartResponse[], SoppingCart[]>({
      query: (cartInfo) => ({
        url: Url.API_SHOPPING_CART,
        method: 'POST',
        body: cartInfo,
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const prods: number[] = [];
          result.data.forEach((item) => {
            prods.push(item.id);
          });
          dispatch(setOrderProducts(prods));
        } catch (e) {
          console.error('userApi Authorization error', e);
        }
      },
    }),
    orderPost: build.mutation<OrdersResponse, OrdersRequest>({
      query: (orderInfo) => ({
        url: Url.API_ORDERS,
        method: 'POST',
        body: orderInfo,
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          // dispatch(setUserToken(result.data.access_token));
        } catch (e) {
          console.error('userApi Authorization error', e);
        }
      },
    }),
    ordersGet: build.query<OrdersGetRequest[], void>({
      query: () => ({ url: Url.API_ORDERS }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setOrdersfromServer(result.data));
        } catch (e) {
          // Intentionally empty catch block - error handling is performed elsewhere
        }
      },
    }),
  }),
});
