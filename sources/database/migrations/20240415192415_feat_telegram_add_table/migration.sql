-- CreateTable
CREATE TABLE "Telegram" (
    "id" TEXT NOT NULL,
    "isBot" BOOLEAN,
    "username" TEXT NOT NULL,
    "telegramId" TEXT NOT NULL,
    "isPremium" BOOLEAN,
    "languageCode" TEXT,
    "userId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telegram_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Telegram_userId_key" ON "Telegram"("userId");

-- AddForeignKey
ALTER TABLE "Telegram" ADD CONSTRAINT "Telegram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
