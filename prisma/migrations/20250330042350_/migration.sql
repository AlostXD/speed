-- CreateTable
CREATE TABLE "Oficiais" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "unidade" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Oficiais_pkey" PRIMARY KEY ("id")
);
