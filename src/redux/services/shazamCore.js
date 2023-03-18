import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
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
      query: () => `/charts/track`,
    }),
    getSongDetail: builder.query({
      query: (songid) => `/songs/get-details?key=${songid}&locale=en-US`,
    }),
    getArtistDetails: builder.query({
      query: (artistsid) => `/artists/get-details?id=${artistsid}&l=en-US`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search?term=${searchTerm}&locale=en-US&offset=0&limit=20`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
