// prisma.config.ts
export default {
  // Tell Prisma where to find the schema (optional if default)
  schema: 'prisma/schema.prisma',
  
  // Define the database connection for migrations/CLI
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
      directUrl: process.env.DIRECT_URL,
    },
  },
}