/*
  Warnings:

  - The values [BLUE,GREEN,BROWN,BLACK,GREY] on the enum `SubmitProfile_eyescolor` will be removed. If these variants are still used in the database, this will fail.
  - The values [BLONDE,BROWN,BLACK,RED,GREY] on the enum `SubmitProfile_haircolor` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE,OTHER] on the enum `Model_gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [BLUE,GREEN,BROWN,BLACK,GREY] on the enum `SubmitProfile_eyescolor` will be removed. If these variants are still used in the database, this will fail.
  - The values [BLONDE,BROWN,BLACK,RED,GREY] on the enum `SubmitProfile_haircolor` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Model` MODIFY `eyescolor` ENUM('Bleu', 'Vert', 'Marron', 'Noir', 'Gris', 'Vairons') NOT NULL,
    MODIFY `haircolor` ENUM('Blond', 'Marron', 'Noir', 'Roux', 'Gris', 'Chauve') NOT NULL,
    MODIFY `gender` ENUM('Homme', 'Femme', 'Autre') NOT NULL;

-- AlterTable
ALTER TABLE `SubmitProfile` MODIFY `eyescolor` ENUM('Bleu', 'Vert', 'Marron', 'Noir', 'Gris', 'Vairons') NOT NULL,
    MODIFY `haircolor` ENUM('Blond', 'Marron', 'Noir', 'Roux', 'Gris', 'Chauve') NOT NULL;
