import { Elysia} from "elysia"
import { AuthModel } from "./types"
import { Auth } from "./store"

export const app = new Elysia({prefix : "auth"}) // /auth is prefix of both signup and signin
    .post("/signup", async ({ body }) =>{
        const userId = await Auth.signUp(body);
        return {
            id : userId
        }
    },{
        body : AuthModel.signUpSchema,
        response:{
            200 : AuthModel.signUpRespose,
            400 : AuthModel.signUpReponseFailed
        }
    })
    .post("/signin",async ({body})=>{
        const token = await Auth.signIn(body)
        return {
            token
        }
    }, {
        response : {
            200 : AuthModel.signInResponse,
            400 : AuthModel.signInResponseFailed
        }
    })