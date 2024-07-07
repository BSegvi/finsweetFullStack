-- CreateTable
CREATE TABLE "Join" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "button_cta" TEXT NOT NULL,
    "homepageId" INTEGER DEFAULT 1,

    CONSTRAINT "Join_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Join" ADD CONSTRAINT "Join_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
