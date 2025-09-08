-- CreateTable
CREATE TABLE "web_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientPhone" TEXT,
    "company" TEXT,
    "projectType" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "timeline" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PROPOSAL',
    "price" REAL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "laptop_inventory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "screen" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "originalPrice" REAL,
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "features" TEXT NOT NULL,
    "description" TEXT,
    "images" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "laptop_sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "laptopId" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientPhone" TEXT,
    "company" TEXT,
    "price" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "deliveryAddress" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "laptop_sales_laptopId_fkey" FOREIGN KEY ("laptopId") REFERENCES "laptop_inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "business_leads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "industry" TEXT,
    "employees" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "budget" TEXT,
    "timeline" TEXT,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "assignedTo" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
