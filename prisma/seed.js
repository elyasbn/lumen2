import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.blog.create({
    data: {
      title: "Hello World",
      slug: "hello-world",
      author: "Elyas",
      authorId: 1,
      publishedAt: new Date(),
      updatedAt: new Date(),
      status: "published",
      tags: ["intro", "welcome"], // Prisma will handle JSON arrays in SQLite
    }
  })
}

main()
  .then(() => {
    console.log("Seeding complete")
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
