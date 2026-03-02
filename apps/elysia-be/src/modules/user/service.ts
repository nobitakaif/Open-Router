import { status } from "elysia"
import { AuthModel } from "./model";
import { jwt } from '@elysiajs/jwt'

import { prisma } from "@repo/db";

type Response = {
    status : 400 | 200,
    msg? : string
    token? : string,
    id? : string
}

export abstract class Auth{
    static async signup({email, password } : AuthModel.SignupSchemaType): Promise<AuthModel.SignupResponseType | Response>{
        try{
            const response = await prisma.user.create({
                data :{
                    email : email,
                    password : await Bun.password.hash(password,{algorithm : "bcrypt", cost : 10})
                }
            })
            
                return {
                    id : response.id
                }
            
        }catch(e){
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
            const verifyPassword =  await Bun.password.verify(password, resposne.password)
            
            if(verifyPassword) {
                return {
                    status : 200,
                    id : resposne.id
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