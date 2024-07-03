-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "homepageId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
