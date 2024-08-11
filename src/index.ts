import { PrismaClient } from '@prisma/client'
import server from './route'

export const prisma = new PrismaClient()

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})