import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface VideoType {
//   id: number;
//   title: string;
//   description: string;
//   author: string;
//   date: string;
//   duration: string;
//   views: string;
//   link: string;
//   thumbnail: string;
// }

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["Videos", "Video", "RelatedVideo"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 10, //seconds
      providesTags: ["Videos"],
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),
    addVideo: builder.mutation({
      query: (body) => ({
        url: "/videos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Video"],
    }),
    editVideo: builder.mutation({
      query: ({ id, body }: { id: number; body: any }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideo", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: ( id : number) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["Videos"]
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }: { id: number; title: string }) => {
        const tags = title.split(" ");
        const likes = tags.map((tag: string) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideo", id: arg.id },
      ],
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useAddVideoMutation, useEditVideoMutation, useDeleteVideoMutation,useGetRelatedVideosQuery } = apiSlice;
