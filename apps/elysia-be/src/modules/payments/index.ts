import jwt from "@elysiajs/jwt";
import Elysia, { status } from "elysia";
import { PayymentModel } from "./models";
import { PaymentService } from "./service";


export const app = new Elysia({prefix : "/payments"})
    .use(
        jwt({
            name : "jwt",
            secret : process.env.JWT_SECRET!
        })
    )
    .resolve(async ({cookie : {auth}, status, jwt}) =>{
        if(!auth){
            return status(401,{
                msg : "cookie is nor present!"
            })
        }
        const decoded = await jwt.verify(auth.value as string)
        if(!decoded || !decoded.sub){
            return status(401, {
                msg : "token incorrect"
            })
        }
        return {
            userId : decoded.sub
        }
    })
    .post("/onramp", async ({userId })=>{
        try {
            const credits = await PaymentService.onramp(userId)
            return status(200,{
                msg : "successful",
                credits
            })
        }catch(e){
            return status(411, {
                msg : "unsuccessfull"
            })
        }
    },{
        response :{
            200 : PayymentModel.onrampResponse,
            411 : PayymentModel.onrampFailedResponse
        } 
    })