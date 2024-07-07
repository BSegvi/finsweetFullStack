/*
  Warnings:

  - A unique constraint covering the columns `[id,first_name,last_name]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Author_id_first_name_last_name_key" ON "Author"("id", "first_name", "last_name");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_first_name_last_name_fkey" FOREIGN KEY ("authorId", "first_name", "last_name") REFERENCES "Author"("id", "first_name", "last_name") ON DELETE SET NULL ON UPDATE CASCADE;
