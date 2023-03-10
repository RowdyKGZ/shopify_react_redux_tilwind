import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "4de5cb1fddmshaed70ccf59f85ebp1cb8b8jsn6e65125cc847"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `charts/track?locale=en-US&pageSize=20&startFrom=0`,
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
