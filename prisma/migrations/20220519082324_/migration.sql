-- CreateTable
CREATE TABLE "Products" (
    "catalogNumber" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "sqCategory" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_catalogNumber_key" ON "Products"("catalogNumber");
