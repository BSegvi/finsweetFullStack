/*
  Warnings:

  - You are about to drop the column `content` on the `Homepage` table. All the data in the column will be lost.
  - Added the required column `button_cta` to the `Homepage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `super_title` to the `Homepage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Homepage" DROP COLUMN "content",
ADD COLUMN     "button_cta" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "description" TEXT,
ADD COLUMN     "super_title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "homepageId" INTEGER;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
