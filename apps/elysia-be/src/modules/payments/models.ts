import { t } from "elysia";


export namespace PayymentModel {
    export const onrampResponse = t.Object({
        msg : t.String(),
        credits : t.Number()
    })
    export type  OnRampReposne = typeof onrampResponse.static

    export const onrampFailedResponse = t.Object({
        msg : t.String()
    })
    export type OnRampFailedResponse = typeof onrampFailedResponse.static

}