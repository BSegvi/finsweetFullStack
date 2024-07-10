-- CreateTable
CREATE TABLE "AboutPage" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "AboutPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutPageContent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "small_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aboutPageId" INTEGER NOT NULL,

    CONSTRAINT "AboutPageContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AboutPageContent" ADD CONSTRAINT "AboutPageContent_aboutPageId_fkey" FOREIGN KEY ("aboutPageId") REFERENCES "AboutPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
