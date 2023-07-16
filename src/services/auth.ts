import BaseResponse from "@/types/response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface AuthResponse extends BaseResponse {
  data: UserAuthForm;
}

type UserAuthForm = {
  name: string;
  email: string;
  password?: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, UserAuthForm>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
