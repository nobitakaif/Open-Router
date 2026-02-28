import { prisma } from "@repo/db"
import { generateApiKey } from "../../constant/generateApiKey"
import { ApiKeyModel } from "./model"

export abstract class ApiKey{
    static async createApiKey(name :string, userId : string):Promise<{
        id : string,
        apikey : string
    }>{
        const apiKey = generateApiKey()
        const resposneApiKey = await prisma.apiKey.create({
            data:{
                name : name,
                apiKey : apiKey,
                userId
            }
        })
        return {
            id : resposneApiKey.id,
            apikey : apiKey
        }
    }

    static async getApiKey(userId:string) {
        const allKeys = await prisma.apiKey.findMany({
            where : {
                userId,
                deleted : false
            }
        })
        return allKeys.map(key => ({
                id : key.id,
                apikey : key.apiKey,
                name : key.name,
                lastUsed : key.lastUsed,
                creditUsed : key.creditconsumed 
        }))
    }

    static async disableKey(apiKey:string, userId: string){
        try{
            console.log("apiKey -> ", apiKey)
            const keyId = await prisma.apiKey.findFirst({
                where : {
                    apiKey,
                    userId
                }
            })
            console.log("get id -> ", keyId?.id)
            if(!keyId?.id){
                return {
                    success : false,
                    msg : "incorrect api key "
                }
            }
            const isDisabled = await prisma.apiKey.update({
                where : {
                    id : keyId?.id
                },
                data: {
                    disable : true
                }
            })
            console.log("get id -> ", isDisabled?.id)

            return {
                success : true,
            }
        }catch(e:any){
            return {
                success : false,
                msg : e.message
            }
        }
    }
    
    static async enableKey(apiKey:string, userId:string){
        try{
            console.log("apiKey -> ", apiKey)
            const keyId = await prisma.apiKey.findFirst({
                where : {
                    apiKey,
                    userId
                }
            })
            console.log("get id -> ", keyId?.id)
            if(!keyId?.id){
                return {
                    success : false,
                    msg : "incorrect api key "
                }
            }
            const isDisabled = await prisma.apiKey.update({
                where : {
                    id : keyId?.id
                },
                data: {
                    disable : false
                }
            })
            console.log("get id -> ", isDisabled?.id)

            return {
                success : true,
            }
        }catch(e:any){
            return {
                success : false,
                msg : e.message
            }
        }
    }

    static async deleteApiKey(userId:string, id: string){
        try{
            const isDeleted = await prisma.apiKey.update({
                where : {
                    id,
                    userId
                },
                data : {
                    deleted : true
                }
            })    
            return true
        }catch(e:any){
            return false
        }
        
    }
}