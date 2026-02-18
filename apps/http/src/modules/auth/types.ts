import { t } from "elysia"

export namespace AuthModel{
    export const signUpSchema = t.object({
        email : t.String(),
        password : t.String()
    })
    
    // for the type on like args
    export type signUpSchema = typeof signUpSchema.static 

    export const signUpRespose = t.object({
        id : t.String()
    })
    export const signUpReponseFailed = t.object({
        msg : t.Literal("Error while sign up ")
    })
    export type signUpReponseFailed = typeof signUpReponseFailed.static
    export type signUpRespose = typeof signUpRespose.static

    export const singinSchema = t.object({
        email : t.String(),
        password : t.String()
    })
    export type singinSchema  = typeof singinSchema.static

    export const signInResponse = t.object({
        token : t.String()
    })
    export const signInResponseFailed = t.object({
        message : t.Literal("Incorrect credentials")
    })
    export type signInResponseFailed = typeof signInResponseFailed.static
    export type signInResponse = typeof signInResponse.static
}