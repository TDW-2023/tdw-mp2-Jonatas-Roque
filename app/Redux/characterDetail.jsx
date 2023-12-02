 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const characterDetailApi = createApi({
  reducerPath: "characterDetailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.py4e.com/api/" }),
  endpoints: (builder) => ({
    getSpecificCharacter: builder.query({
      query: (id) => ({ url: `people/${id}` }),
    }),
  }),
});
 
export const { useGetSpecificCharacterQuery } = characterDetailApi;
