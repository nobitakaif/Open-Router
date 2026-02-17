import { Elysia} from "elysia"
import { AuthModel } from "./types"
import { Auth } from "./store"

export const app = new Elysia({prefix : "auth"})
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
    .post("/signin",({body})=>{

    })