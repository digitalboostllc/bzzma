-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contact_messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'GENERAL',
    "urgency" TEXT NOT NULL DEFAULT 'NORMAL',
    "status" TEXT NOT NULL DEFAULT 'UNREAD',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_contact_messages" ("company", "createdAt", "email", "id", "message", "name", "phone", "status", "subject", "type") SELECT "company", "createdAt", "email", "id", "message", "name", "phone", "status", "subject", "type" FROM "contact_messages";
DROP TABLE "contact_messages";
ALTER TABLE "new_contact_messages" RENAME TO "contact_messages";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
