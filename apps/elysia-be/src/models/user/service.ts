import { status } from "elysia"
import { AuthModel } from "./model";
import { jwt } from '@elysiajs/jwt'

import { prisma } from "@repo/db";

type Response = {
    status : 400 | 200,
    msg? : string
    token? : string
}

export abstract class Auth{
    static async signup({email, password } : AuthModel.SignupSchemaType): Promise<AuthModel.SignupResponseType | Response>{
        const response = await prisma.user.create({
            data :{
                email : email,
                password : await Bun.password.hash(password,{algorithm : "bcrypt", cost : 10})
            }
        })
        if (response.id){
            return {
                id : response.id
            }
        }else{
            return {
                status : 400,
                msg : "this email is already taken!"
            }
        }
        
    }
    static async signin({ email, password } : AuthModel.SigninSchemaType, ) : Promise<Response>{
        const resposne = await prisma.user.findFirst({
            where : {
                email
            }
        })
        if(resposne?.id){
            const verify =  await Bun.password.verify(password, resposne.password)
            if(verify) {
                return {
                    status : 200,
                    token : "token-123"
                }
            }
            else{
                return {
                    status : 400, 
                    msg : "incorrect password"
                }
            }
        }
        return {
            status : 400, 
            msg : "incorrect email"
        }

    }
}