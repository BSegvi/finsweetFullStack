-- CreateTable
CREATE TABLE "Testimonials" (
    "id" SERIAL NOT NULL,
    "super_title" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "homepageId" INTEGER NOT NULL,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestimonialItem" (
    "id" SERIAL NOT NULL,
    "testimonial" TEXT NOT NULL,
    "testimonial_author" TEXT NOT NULL,
    "testimonial_author_location" TEXT NOT NULL,
    "testimonialsId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "TestimonialItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Testimonials" ADD CONSTRAINT "Testimonials_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialItem" ADD CONSTRAINT "TestimonialItem_testimonialsId_fkey" FOREIGN KEY ("testimonialsId") REFERENCES "Testimonials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
