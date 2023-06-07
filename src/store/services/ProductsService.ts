import { setCategories } from '../slices/CategoriesSlice';
import { setProducts } from '../slices/ProductsSlice';
import {
  GetCategoriesReq,
  GetProductPhoto,
  ProductType,
  ProductsSearchParams,
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
  }),
});
