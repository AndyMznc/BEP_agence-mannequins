/*
  Warnings:

  - The values [Bleu,Vert,Marron,Noir,Gris,Vairons] on the enum `SubmitProfile_eyescolor` will be removed. If these variants are still used in the database, this will fail.
  - The values [Blond,Marron,Noir,Roux,Gris,Chauve] on the enum `SubmitProfile_haircolor` will be removed. If these variants are still used in the database, this will fail.
  - The values [Homme,Femme,Autre] on the enum `Model_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [Bleu,Vert,Marron,Noir,Gris,Vairons] on the enum `SubmitProfile_eyescolor` will be removed. If these variants are still used in the database, this will fail.
  - The values [Blond,Marron,Noir,Roux,Gris,Chauve] on the enum `SubmitProfile_haircolor` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Model` MODIFY `eyescolor` ENUM('BLEU', 'VERT', 'MARRON', 'NOIR', 'GRIS', 'VAIRONS') NOT NULL,
    MODIFY `haircolor` ENUM('BLOND', 'MARRON', 'NOIR', 'ROUX', 'GRIS', 'CHAUVE') NOT NULL,
    MODIFY `gender` ENUM('HOMME', 'FEMME', 'AUTRE') NOT NULL;

-- AlterTable
ALTER TABLE `SubmitProfile` MODIFY `eyescolor` ENUM('BLEU', 'VERT', 'MARRON', 'NOIR', 'GRIS', 'VAIRONS') NOT NULL,
    MODIFY `haircolor` ENUM('BLOND', 'MARRON', 'NOIR', 'ROUX', 'GRIS', 'CHAUVE') NOT NULL;
