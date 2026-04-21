import dotenv from "dotenv";
import { defineConfig } from "@prisma/config";

dotenv.config(); // 👈 load .env manually

export default defineConfig({
    schema: "./prisma/schema.prisma",
    datasource: {
        url: process.env.DATABASE_URL,
    },
    migrations: {
        path: "./prisma/migrations",
    },
});