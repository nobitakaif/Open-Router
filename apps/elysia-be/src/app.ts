import { Elysia } from "elysia";
import { prisma } from "@repo/db"
import { app as authApp } from "./modules/user"
import { app as apikey} from "./modules/apikey"
import { app as model} from "./modules/models"
import { app as payment } from "./modules/payments" 
import { cors } from "@elysiajs/cors"

export const app = new Elysia()
    .use(cors())
    .use(authApp)
    .use(apikey)
    .use(model)
    .use(payment)


export type App = typeof app


