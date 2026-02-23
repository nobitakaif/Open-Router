import { Elysia} from "elysia"
import { AuthModel } from "./model"
import { Auth } from "./service"

export const app = new Elysia({prefix : "/auth"})
    .post("/signup", async ({body, status}) =>{
        const { email, password } = body
        const response = await Auth.signup({email, password})
        if('id' in response) {
            return status(200,{
                id : response.id
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
    .post("/signin", async ({body }) =>{
        const { email, password } = body
        const response = await Auth.signin({email, password})
        if(response.status == 200 ){
            
        }
    },{
        body : AuthModel.signinSchema,
        response : {
            200 : AuthModel.signupResponse,
            400 : AuthModel.authFailed
        }
    })