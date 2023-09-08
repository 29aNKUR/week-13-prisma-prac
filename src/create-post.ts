import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
    await prisma.post.create({
        data: {
            title: "asdf",
            content: "asdf",
            authorId: 1
        }
    })
}

main()