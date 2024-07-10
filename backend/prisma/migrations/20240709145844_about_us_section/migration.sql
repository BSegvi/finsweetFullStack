-- CreateTable
CREATE TABLE "AboutUsSection" (
    "id" SERIAL NOT NULL,
    "super_title" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link_cta" TEXT NOT NULL,

    CONSTRAINT "AboutUsSection_pkey" PRIMARY KEY ("id")
);
