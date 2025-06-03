-- CreateTable
CREATE TABLE "Asset" (
    "assetId" TEXT NOT NULL,
    "assetDescription" TEXT,
    "assetInfo" JSONB,
    "assetInfoType" TEXT,
    "assetMask" TEXT,
    "assetName" TEXT,
    "assetOwnerName" TEXT,
    "balanceAsOf" TIMESTAMP(3),
    "balanceCostBasis" DOUBLE PRECISION,
    "balanceCostFrom" TEXT,
    "balanceCurrent" DOUBLE PRECISION,
    "balanceFrom" TEXT,
    "balancePrice" DOUBLE PRECISION,
    "balancePriceFrom" TEXT,
    "balanceQuantityCurrent" DOUBLE PRECISION,
    "beneficiaryComposition" JSONB,
    "cognitoId" TEXT,
    "creationDate" TIMESTAMP(3),
    "currencyCode" TEXT,
    "deactivateBy" TIMESTAMP(3),
    "descriptionEstatePlan" TEXT,
    "hasInvestment" BOOLEAN,
    "includeInNetWorth" BOOLEAN,
    "institutionId" INTEGER,
    "institutionName" TEXT,
    "integration" JSONB,
    "integrationAccountId" TEXT,
    "isActive" BOOLEAN,
    "isAsset" BOOLEAN,
    "isFavorite" BOOLEAN,
    "isLinkedVendor" BOOLEAN,
    "lastUpdate" TIMESTAMP(3),
    "lastUpdateAttempt" TIMESTAMP(3),
    "logoName" TEXT,
    "modificationDate" TIMESTAMP(3),
    "nextUpdate" TIMESTAMP(3),
    "nickname" TEXT,
    "note" TEXT,
    "noteDate" TIMESTAMP(3),
    "ownership" TEXT,
    "primaryAssetCategory" TEXT,
    "status" TEXT,
    "statusCode" TEXT,
    "userInstitutionId" TEXT,
    "vendorAccountType" TEXT,
    "vendorContainer" TEXT,
    "vendorResponse" JSONB,
    "vendorResponseType" TEXT,
    "wealthAssetType" TEXT,
    "wid" TEXT,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("assetId")
);

-- CreateTable
CREATE TABLE "Holdings" (
    "id" SERIAL NOT NULL,
    "assetId" TEXT NOT NULL,

    CONSTRAINT "Holdings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MajorAssetClass" (
    "id" SERIAL NOT NULL,
    "holdingsId" INTEGER NOT NULL,
    "majorClass" TEXT,

    CONSTRAINT "MajorAssetClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetClass" (
    "id" SERIAL NOT NULL,
    "majorAssetClassId" INTEGER NOT NULL,
    "minorAssetClass" TEXT,
    "value" DOUBLE PRECISION,

    CONSTRAINT "AssetClass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Asset_wid_key" ON "Asset"("wid");

-- CreateIndex
CREATE UNIQUE INDEX "Holdings_assetId_key" ON "Holdings"("assetId");

-- AddForeignKey
ALTER TABLE "Holdings" ADD CONSTRAINT "Holdings_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("assetId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MajorAssetClass" ADD CONSTRAINT "MajorAssetClass_holdingsId_fkey" FOREIGN KEY ("holdingsId") REFERENCES "Holdings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetClass" ADD CONSTRAINT "AssetClass_majorAssetClassId_fkey" FOREIGN KEY ("majorAssetClassId") REFERENCES "MajorAssetClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
