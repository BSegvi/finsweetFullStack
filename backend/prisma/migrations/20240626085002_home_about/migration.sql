-- CreateTable
CREATE TABLE "HomeAbout" (
    "id" SERIAL NOT NULL,
    "super_title" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link_cta" TEXT NOT NULL,
    "homepageId" INTEGER,

    CONSTRAINT "HomeAbout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HomeAbout" ADD CONSTRAINT "HomeAbout_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
