import { AuthModel } from "./types";
import { prisma } from "@repo/db/"

export abstract class Auth{
    static async signUp({email, password} : AuthModel.singinSchema):Promise<String>{
        try{
            const res = await prisma.user.create({
                data : {
                    email : email,
                    password : password
                }
            })
        }catch(e){
            
        }
        return ""
        
    }
    static async signIn({email, password} : AuthModel.singinSchema): Promise<string>{
        return ""
    }
}