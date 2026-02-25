import { Elysia } from "elysia";
import { prisma } from "@repo/db"
import { app as authApp } from "./models/user"
import { app as apikey} from "./models/apikey"

const app = new Elysia().use(authApp).listen(8000);
app.use(apikey)


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
