/*
  Warnings:

  - You are about to drop the column `first_name` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_first_name_last_name_fkey";

-- DropIndex
DROP INDEX "Author_id_first_name_last_name_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "first_name",
DROP COLUMN "last_name";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
