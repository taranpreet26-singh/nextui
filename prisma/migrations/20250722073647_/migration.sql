/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Component` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Component_name_key" ON "Component"("name");
