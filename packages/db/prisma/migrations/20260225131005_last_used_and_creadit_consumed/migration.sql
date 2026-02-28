-- AlterTable
ALTER TABLE "ApiKey" ADD COLUMN     "creditconsumed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastUsed" TIMESTAMP(3);
