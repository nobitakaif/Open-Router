import { prisma } from "@repo/db"
import { generateApiKey } from "../../constant/generateApiKey"

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
            }
        })
        return allKeys.map(key => ({
            id : key.id,
            name : key.name,
            creditUsed : key.creditconsumed,
            lastUsed : key.lastUsed
        }))
        
    }
}