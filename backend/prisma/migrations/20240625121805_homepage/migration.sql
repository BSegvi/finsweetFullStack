-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_homepageId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "homepageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
