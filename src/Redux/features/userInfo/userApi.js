import apiSlice from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        regAsMember: builder.mutation({
            query: data => ({
                url: "/member/register/personalDetail",
                method: "POST",
                body: data,
            }),
        }),
        loginAsMember: builder.mutation({
            query: data => ({
                url: "/member/login",
                method: "POST",
                body: data,
            }),
        }),
        regAsProfessional: builder.mutation({
            query: data => ({
                url: "/member/register/personalDetail",
                method: "POST",
                body: data,
            }),
        }),
        loginAsProfessional: builder.mutation({
            query: data => ({
                url: "/member/login",
                method: "POST",
                body: data,
            }),
        }),
        setPersonalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/personalDetail",
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        setProfessionalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/professionalDetail",
                mode: "no-cors",
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        setEducationalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/educationalDetail",
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        setPhysicalDetails: builder.mutation({
            query: data => ({
                url: "/member/register/physicalDetail",
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        setOthersDetails: builder.mutation({
            query: data => ({
                url: "/member/register/othersDetail",
                method: "POST",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        updateProfessionalDetails: builder.mutation({
            query: ({ data, id }) => ({
                url: `/member/professionalDetail/${id}`,
                method: "PUT",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        updateEducationalDetails: builder.mutation({
            query: ({ data, id }) => ({
                url: `/member/professionalDetail/${id}`,
                method: "PUT",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        updatePhysicalDetails: builder.mutation({
            query: data => ({
                url: `/member/physicalDetali`,
                method: "PUT",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        updateOthersDetails: builder.mutation({
            query: data => ({
                url: `/member/othersDetail`,
                method: "PUT",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                body: data,
            }),
        }),
        getProfileDetails: builder.query({
            query: id => `/member/personalDetail/${id}`,
        }),
    }),
});

export const {
    useRegAsMemberMutation,
    useLoginAsMemberMutation,
    useLoginAsProfessionalMutation,
    useRegAsProfessionalMutation,
    useSetPersonalDetailsMutation,
    useSetProfessionalDetailsMutation,
    useSetEducationalDetailsMutation,
    useSetPhysicalDetailsMutation,
    useSetOthersDetailsMutation,
    useGetProfileDetailsQuery,
} = userApi;
