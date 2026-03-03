import { prisma } from "@repo/db";


export abstract class ModelService{
    static async  getModels(){
        const models = await prisma.model.findMany({
            include : {
                company : true
            }
        })
        return models.map(m =>({
            id : m.id,
            name  : m.name,
            slug : m.slug,
            company :{
                id : m.company.id,
                name : m.company.name,
                website : m.company.website
            }
        }))
    }
    
    static async getProvider(){
        const provider = await prisma.provider.findMany()
        return provider.map( p => ({
            id : p.id,
            name : p.name,
            website : p.website,
        }))
    }

    static async getModelProvider(id : string){
        const mappings = await prisma.modelProviderMapping.findMany({
            where : {
                modelId : id
            },
            include : {
                provider : true
            }
        })
        return mappings.map( m => ({
            id : m.id,
            providerId : m.provider.id,
            providerName : m.provider.name,
            providerWebsite : m.provider.website,
            inputTokenCost : m.inputTokenCost,
            outputTokenCost : m.outputTokenCost
        }))
    }
}