import { t } from "elysia";

export namespace ApiKeyModel {
    export const createApiKeySchema = t.Object({
        name : t.String()
    })
    export type CreateApiKeySchema = typeof createApiKeySchema.static

    export const createApiKeyResponse = t.Object({
        id : t.String(),
        apikey : t.String()
    })
    export type CreateApiKeyResposne = typeof createApiKeyResponse.static

    export const disableApiKeySchema = t.Object({
        apiKey  : t.String()
    })
    export type DisableApiKeySchema = typeof disableApiKeySchema.static

    export const disableApiKeyResponseFailed = t.Object({
        msg : t.Literal("Disabled api-key unsuccessfull")
    })
    export type DisableApiKeyResponseFailed = typeof disableApiKeyResponseFailed.static
    
    export const disableApiKeyResponse = t.Object({
        msg : t.Literal("Disabled api key successfully 🙂")
    })
    export type DisableApiKeyResposne = typeof disableApiKeyResponse.static

    export const getApiKeysResponse = t.Object({
        apiKeys : t.Array(t.Object({
            id : t.String(),
        }))

    })
    export type GetApiKeyResponse = typeof getApiKeysResponse.static

    export const deletedApiKeyResposne = t.Object({
        msg : t.Literal("Deleted ApiKey successfully ")
    })
    export type DeleteApiKeyResponse = typeof deletedApiKeyResposne.static

    export const deletedApiKeyFailedResposne = t.Object({
        msg : t.Literal("Deleted ApiKey unsuccessfull")
    })
    export type DeletedApiKeyFailedResposne = typeof deletedApiKeyFailedResposne.static
}