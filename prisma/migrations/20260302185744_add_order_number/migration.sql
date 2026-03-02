/*
  Warnings:

  - A unique constraint covering the columns `[orderNumber]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientEmail` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientName` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - The required column `orderNumber` was added to the `Sale` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "address" TEXT,
ADD COLUMN     "clientEmail" TEXT NOT NULL,
ADD COLUMN     "clientName" TEXT NOT NULL,
ADD COLUMN     "clientPhone" TEXT,
ADD COLUMN     "orderNumber" TEXT NOT NULL,
ADD COLUMN     "paymentMethod" TEXT NOT NULL DEFAULT 'Tarjeta',
ADD COLUMN     "paymentStatus" TEXT NOT NULL DEFAULT 'Pagado',
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PREPARING',
ADD COLUMN     "tracking" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Sale_orderNumber_key" ON "Sale"("orderNumber");
