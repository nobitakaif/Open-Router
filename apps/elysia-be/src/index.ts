import { Elysia } from "elysia";
import { prisma } from "@repo/db"
import { app as authApp } from "./models/user"

const app = new Elysia().use(authApp).listen(8000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
