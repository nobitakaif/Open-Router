import Elysia, { status } from "elysia";
import { ModelService } from "./service";
import { ModelsModel } from "./models";


const app = new Elysia({prefix : "/models"})
    .get("/get", async () =>{
        const model = await ModelService.getModels()
        return status(200,{
            models : model  
        })
    },{
        response : {
            200 : ModelsModel.getModesResposne 
        }
    })
    .get("/providers", async ()=>{
        const provider = await ModelService.getProvider();
        return {
            provider :""
        }
    },{
        response : {
            200 : ModelsModel.getProviderResposne 
        }
    })
    .get("/:id/providers", async ({params : {id}})=>{
        const provider = await ModelService.getModelProvider(id)
        return {
            provider
        }
    },{
        response : {
            200 : ModelsModel.getModelProviderResponse
        }
    })