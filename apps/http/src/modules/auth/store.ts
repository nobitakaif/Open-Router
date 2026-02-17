import { AuthModel } from "./types";

export abstract class Auth{
    static async signUp({email, password} : AuthModel.singinSchema):Promise<String>{
        return ""
        
    }
    static async signIn({email, password} : AuthModel.singinSchema){
        
    }
}