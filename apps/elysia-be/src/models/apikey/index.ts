import jwt from "@elysiajs/jwt";
import { prisma } from "@repo/db";
import Elysia, { status } from "elysia";
import { ApiKey } from "./service";
import { ApiKeyModel } from "./model";


export const app = new Elysia({prefix : "/api-keys"})
    .use(
        jwt({
            name : "jwt", 
            secret : process.env.JWT_SECRET!
        })
    )
    .resolve(async ({cookie : {auth}, status, jwt})=>{
        if(!auth){
            return status(401,{
                msg : "Cookie is not present"
            })
        }
        console.log(auth.value)
        const decoded = await jwt.verify(auth.value as string)
        console.log("decoded token -> ",decoded)
        if(!decoded || !decoded.sub){
            return status(401,{
                msg : "incorrect token "
            })
        }
        return {
            userId : decoded.sub
        }
    })
    .post("/create", async ({userId,body})=>{
        console.log(userId)
        const { name } = body
        const {apikey,id} = await ApiKey.createApiKey(userId, name)
        
        return status(200,{
            id,
            apikey
        })
    },{
        body : ApiKeyModel.createApiKeySchema,
        response : {
            200 : ApiKeyModel.createApiKeyResponse,
        }
    })
    .get("/", async ({userId})=>{
        const keys = await ApiKey.getApiKey(userId)
        console.log(keys)
        return "laright"
        // return status(200, {
        //     keys.map( )
        // })
    },{
        // response : {
        //     200 : ApiKeyModel.getApiKeysResponse
        // }
    })
    .post("/disable", ()=>{

    })
    .delete("/", ()=>{

    })