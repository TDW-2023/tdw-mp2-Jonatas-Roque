import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.py4e.com/api/people/" }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: (page = 1) => `?page=${page}`,
    }),
  }),
});

export const { useGetAllCharactersQuery } = charactersApi;
