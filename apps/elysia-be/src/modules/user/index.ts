import { Elysia, status} from "elysia"
import { AuthModel } from "./model"
import { Auth } from "./service"
import jwt from "@elysiajs/jwt"

export const app = new Elysia({prefix : "/auth"})
    .post("/signup", async ({body, status}) =>{
        const { email, password } = body
        const response = await Auth.signup({email, password})
        if('id' in response) {
            // console.log(response.id)
            return status(200,{
                id : response.id!
            })
        }
        return status(400,{
            msg : "Email is already exist"
        })
    }, {
        body : AuthModel.signinSchema,
        response : {
            200 : AuthModel.signupResponse,
            400 : AuthModel.authFailed
        }
    })
    .use(
        jwt({
            name : "jwt",
            secret : process.env.JWT_SECRET!
        })
    )
    .post("/signin", async ({jwt, body, status, cookie : {auth}}) =>{
        const { email, password } = body
        const response = await Auth.signin({email, password})
        if(response.status == 200 ){
            // generate token 
            // console.log(response.id)
            const token = await jwt.sign({sub : response.id})
            // console.log(token)
            auth.set({
                value : token,
                maxAge : 7 * 86400, // 7 days
                httpOnly : true
            })
            return status(200,{
                token,
            })
        }
        return status(400, {
            msg : response.msg!
        })
    },{
        body : AuthModel.signinSchema,
        response : {
            200 : AuthModel.signinResponse,
            400 : AuthModel.authFailed
        }
    })