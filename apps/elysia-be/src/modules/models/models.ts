import { t } from "elysia";


export namespace ModelsModel{
    export const getModesResposne = t.Object({
        models : t.Array(t.Object({
            id : t.String(),
            name : t.String(),
            slug : t.String(),
            company : t.Object({
                id : t.String(),
                name : t.String(),
                website : t.String()
            })
        }))
    })
    export type GetModelResponse  = typeof getModesResposne.static

    export const getProviderResposne = t.Object({
        provider : t.Array(t.Object({
            id : t.String(),
            name : t.String(),
            website : t.String()
        }))
    })
    export type GetProviderResposne = typeof getProviderResposne.static

    export const getModelProviderResponse = t.Object({
      provider : t.Array(t.Object({
            id : t.String(),
            providerId : t.String(),
            providerName : t.String(),
            providerWebsite : t.String(),
            inputTokenCost : t.Number(),
            outputTokenCost : t.Number()
      }))  
    })
}