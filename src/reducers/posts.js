import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT-SF"}),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts"
        }),
    })
})

export const {useGetAllPostsQuery} = postsApi;