import { setUserToken } from '../slices/AuthorizationSlice';
import { setUser } from '../slices/UserSlice';
import {
  AuthenticationRequest,
  IToken,
  PatchUser,
  RegData,
  ResetPasswordEmail,
  SetPasswordNew,
  User,
} from '../storeInterfaces';
import { Url } from '../urlConstants';
import { commonApi } from './common.api';

export const AuthorizationUserAPI = commonApi.injectEndpoints({
  endpoints: (build) => ({
    regUser: build.mutation<User, RegData>({
      query: (userInfo) => ({
        url: Url.API_REG,
        method: 'POST',
        body: userInfo,
      }),
    }),
    verificationTokenPost: build.mutation<AuthenticationRequest, IToken>({
      query: ({ token }) => ({
        url: Url.API_VERIFY,
        method: 'POST',
        body: token,
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserToken(result.data.access_token));
          localStorage.setItem('token', result.data.access_token);
        } catch (e) {
          console.error('userApi verificationTokenPost error', e);
        }
      },
    }),
    authorizationUser: build.mutation<AuthenticationRequest, RegData>({
      query: (userInfo) => ({
        url: Url.API_LOGIN,
        method: 'POST',
        body: userInfo,
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserToken(result.data.access_token));
          localStorage.setItem('token', result.data.access_token);
        } catch (e) {
          console.error('userApi Authorization error', e);
        }
      },
    }),
    forgotPassword: build.mutation<string, ResetPasswordEmail>({
      query: (email) => ({
        url: Url.API_FORGOT_PASSWORD,
        method: 'POST',
        body: email,
      }),
    }),
    getUser: build.query<User, void>({
      query: () => ({ url: Url.API_USER_ME }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUser(result.data));
        } catch (e) {
          // Intentionally empty catch block - error handling is performed elsewhere
        }
      },
    }),
    patchUserMe: build.mutation<User, PatchUser>({
      query: (userInfo) => ({
        url: Url.API_USER_ME,
        method: 'PATCH',
        body: userInfo,
      }),
    }),

    setPassword: build.mutation<string, SetPasswordNew>({
      query: (userInfo) => ({
        url: Url.API_SET_PASSWORD,
        method: 'POST',
        body: userInfo,
      }),
    }),
    // deleteDoc: build.mutation({
    //   query: (id) => ({
    //     url: `${Url.API_DOCS}${id}/`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Docs'],
    // }),

    // resetPassword: build.mutation<ResetPasswordEmail, ResetPasswordEmail>({
    //   query: (userInfo) => ({
    //     url: 'users/reset_password/',
    //     method: 'POST',
    //     body: userInfo,
    //   }),
    // }),
    // resetPasswordConfirm: build.mutation<ResetPasswordEmail, VerificationPasswordTokenUid>({
    //   query: ({ uid, new_password, re_new_password, verificationToken }) => ({
    //     url: `/users/reset_password_confirm/${uid}/${verificationToken}/`,
    //     method: 'POST',
    //     body: {
    //       re_new_password,
    //       new_password,
    //     },
    //   }),
    // }),
    // getUserById: build.query<User, string>({
    //   query: (id) => ({ url: `/users/${id}/` }),
    // }),

    // patchMentorInfo: build.mutation<User, MentorInfo>({
    //   query: (userInfo) => ({
    //     url: Url.API_MENTOR_INFO,
    //     method: 'PATCH',
    //     body: userInfo,
    //   }),
    // }),
  }),
});
