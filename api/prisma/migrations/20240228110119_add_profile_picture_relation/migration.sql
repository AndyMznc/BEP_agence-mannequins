-- DropForeignKey
ALTER TABLE `SubmitProfile` DROP FOREIGN KEY `SubmitProfile_userId_fkey`;

-- AlterTable
ALTER TABLE `Model` ADD COLUMN `profilePictureId` INTEGER NULL,
    MODIFY `birthDate` DATE NOT NULL;

-- AlterTable
ALTER TABLE `SubmitProfile` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Model` ADD CONSTRAINT `Model_profilePictureId_fkey` FOREIGN KEY (`profilePictureId`) REFERENCES `Photo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmitProfile` ADD CONSTRAINT `SubmitProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
