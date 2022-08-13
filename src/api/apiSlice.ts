import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../models/IProduct";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-moscow-mba.herokuapp.com",
  }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<IProduct[], number>({
      query: (limit: number = 5) => ({
        url: "/products",
        params: { _limit: limit },
      }),
    }),
  }),
});

export const { useFetchAllProductsQuery } = apiSlice;
