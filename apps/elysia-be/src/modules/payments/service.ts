import { prisma } from "@repo/db";


const ONRAMP_AMOUNNT = 1000

export abstract class PaymentService{
    static async onramp(userId:string){
        // transaction db call 
        const res = await prisma.$transaction([
            prisma.user.update({
                where : {
                    id : userId
                },
                data : {
                    credits : {
                        increment : ONRAMP_AMOUNNT
                    }
                }
            }),
            prisma.onrampTransaction.create({
                data : {
                    userId, 
                    amount : ONRAMP_AMOUNNT,
                    status : "completed"
                }
            })
        ])
        return res[0].credits
    }
}