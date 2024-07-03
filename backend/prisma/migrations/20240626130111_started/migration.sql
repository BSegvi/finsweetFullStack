-- CreateTable
CREATE TABLE "Started" (
    "id" SERIAL NOT NULL,
    "super_title" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "button_cta" TEXT NOT NULL,
    "homepageId" INTEGER,

    CONSTRAINT "Started_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Started" ADD CONSTRAINT "Started_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
