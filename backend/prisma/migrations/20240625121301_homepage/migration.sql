/*
  Warnings:

  - Made the column `homepageId` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_homepageId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "homepageId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
