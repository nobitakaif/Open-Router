
export { prisma } from "./client";
export * from "./generated/prisma/client";

// async function main(){
//   const res = await prisma.user.create({
//     data : {
//       email : "nobitaka@gmail.com",
//       password : "password"
//     }
//   })
//   console.log(res.id)
//   return res.id
// }

// main().then(r => {
//   console.log(r)
// }).catch(e =>{
//   console.log(e)
// })