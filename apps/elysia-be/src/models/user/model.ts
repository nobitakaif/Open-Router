import { t } from "elysia";

export namespace AuthModel {
    export const signinSchema = t.Object({
        email : t.String(),
        password : t.String()
    })
    export type SigninSchemaType = typeof signinSchema.static
    export const signinResponse = t.Object({
        token : t.String()
    })
    export type SigninResponseType = typeof signinResponse.static

    export const signupSchema = t.Object({
        email : t.String(),
        password : t.String()
    })
    export type SignupSchemaType = typeof signupSchema.static

    export const signupResponse = t.Object({
        id : t.String(),
        
    })
    export type SignupResponseType = typeof signupResponse.static

    export const authFailed = t.Object({
        msg : t.String()
    })
    export type AuthFaild = typeof authFailed.static
}