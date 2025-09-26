-- CreateTable
CREATE TABLE "Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT,
    "author" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "category" TEXT,
    "tags" JSONB,
    "readTime" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "seo" JSONB
);

-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "instructor" TEXT NOT NULL,
    "instructorId" INTEGER NOT NULL,
    "schedule" TEXT,
    "duration" INTEGER,
    "capacity" INTEGER,
    "enrolled" INTEGER,
    "price" REAL,
    "status" TEXT NOT NULL,
    "level" TEXT,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "specialties" JSONB,
    "experience" TEXT,
    "rating" REAL,
    "students" INTEGER,
    "status" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "certifications" JSONB,
    "joinedAt" DATETIME NOT NULL,
    "socialMedia" JSONB
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" TEXT,
    "endTime" TEXT,
    "location" TEXT,
    "address" TEXT,
    "type" TEXT,
    "capacity" INTEGER,
    "registered" INTEGER,
    "price" REAL,
    "status" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "image" TEXT,
    "instructors" JSONB,
    "tags" JSONB
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT,
    "price" REAL NOT NULL,
    "originalPrice" REAL,
    "stock" INTEGER NOT NULL,
    "sold" INTEGER,
    "rating" REAL,
    "reviewCount" INTEGER,
    "status" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "badge" TEXT,
    "image" TEXT,
    "images" JSONB,
    "description" TEXT,
    "features" JSONB,
    "sizes" JSONB,
    "colors" JSONB,
    "tags" JSONB
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
