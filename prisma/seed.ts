import { PrismaClient, Prisma } from '../generated/prisma';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface AssetJson {
    assetDescription: string | null;
    assetId: string;
    assetInfo: string | null;
    assetInfoType: string | null;
    assetMask: string | null;
    assetName: string | null;
    assetOwnerName: string | null;
    balanceAsOf: string | null;
    balanceCostBasis: number | null;
    balanceCostFrom: string | null;
    balanceCurrent: number | null;
    balanceFrom: string | null;
    balancePrice: number | null;
    balancePriceFrom: string | null;
    balanceQuantityCurrent: number | null;
    beneficiaryComposition: Prisma.JsonValue | null;
    cognitoId: string | null;
    creationDate: string | null;
    currencyCode: string | null;
    deactivateBy: string | null;
    descriptionEstatePlan: string | null;
    hasInvestment: boolean | null;
    holdings: HoldingsJson | null;
    includeInNetWorth: boolean | null;
    institutionId: number | null;
    institutionName: string | null;
    integration: Prisma.JsonValue | null;
    integrationAccountId: string | null;
    isActive: boolean | null;
    isAsset: boolean | null;
    isFavorite: boolean | null;
    isLinkedVendor: boolean | null;
    lastUpdate: string | null;
    lastUpdateAttempt: string | null;
    logoName: string | null;
    modificationDate: string | null;
    nextUpdate: string | null;
    nickname: string | null;
    note: string | null;
    noteDate: string | null;
    ownership: string | null;
    primaryAssetCategory: string | null;
    status: string | null;
    statusCode: string | null;
    userInstitutionId: string | null;
    vendorAccountType: string | null;
    vendorContainer: string | null;
    vendorResponse: Prisma.JsonValue | null;
    vendorResponseType: string | null;
    wealthAssetType: string | null;
    wid: string | null;
}

interface HoldingsJson {
    majorAssetClasses: MajorAssetClassJson[];
}

interface MajorAssetClassJson {
    majorClass: string | null;
    assetClasses: AssetClassJson[];
}

interface AssetClassJson {
    minorAssetClass: string | null;
    value: number | null;
}

const userData: Prisma.DefaultUserCreateInput[] = [
    {
        name: "Demo User",
        email: "wealth@email.com",
    },
];

async function main() {
    console.log(`Starting seeding process...`);

    console.log(`Deleting existing Asset data...`);
    await prisma.defaultUser.create({ data: userData[0] });
    await prisma.assetClass.deleteMany({});
    await prisma.majorAssetClass.deleteMany({});
    await prisma.holdings.deleteMany({});
    await prisma.asset.deleteMany({});
    console.log(`Existing Asset data deleted.`);

    const assetsFilePath = path.join(__dirname, '../app/api/assets/assets.json');
    if (!fs.existsSync(assetsFilePath)) {
        console.error(`Error: Assets JSON file not found at ${assetsFilePath}`);
        process.exit(1);
    }

    const assetsFileContent = fs.readFileSync(assetsFilePath, 'utf-8');
    let assetsData: AssetJson[];
    try {
        assetsData = JSON.parse(assetsFileContent);
    } catch (e) {
        console.error(`Error parsing assets.json: ${e}`);
        process.exit(1);
    }

    for (const assetData of assetsData) {
        const dataForCreate: Prisma.AssetCreateInput = {
            assetId: assetData.assetId,
            assetDescription: assetData.assetDescription,
            assetInfoType: assetData.assetInfoType,
            assetMask: assetData.assetMask,
            assetName: assetData.assetName,
            assetOwnerName: assetData.assetOwnerName,
            balanceAsOf: assetData.balanceAsOf ? new Date(assetData.balanceAsOf) : null,
            balanceCostBasis: assetData.balanceCostBasis,
            balanceCostFrom: assetData.balanceCostFrom,
            balanceCurrent: assetData.balanceCurrent,
            balanceFrom: assetData.balanceFrom,
            balancePrice: assetData.balancePrice,
            balancePriceFrom: assetData.balancePriceFrom,
            balanceQuantityCurrent: assetData.balanceQuantityCurrent,
            cognitoId: assetData.cognitoId,
            creationDate: assetData.creationDate ? new Date(assetData.creationDate) : null,
            currencyCode: assetData.currencyCode,
            deactivateBy: assetData.deactivateBy ? new Date(assetData.deactivateBy) : null,
            descriptionEstatePlan: assetData.descriptionEstatePlan,
            hasInvestment: assetData.hasInvestment,
            includeInNetWorth: assetData.includeInNetWorth,
            institutionId: assetData.institutionId,
            institutionName: assetData.institutionName,
            integrationAccountId: assetData.integrationAccountId,
            isActive: assetData.isActive,
            isAsset: assetData.isAsset,
            isFavorite: assetData.isFavorite,
            isLinkedVendor: assetData.isLinkedVendor,
            lastUpdate: assetData.lastUpdate ? new Date(assetData.lastUpdate) : null,
            lastUpdateAttempt: assetData.lastUpdateAttempt ? new Date(assetData.lastUpdateAttempt) : null,
            logoName: assetData.logoName,
            modificationDate: assetData.modificationDate ? new Date(assetData.modificationDate) : null,
            nextUpdate: assetData.nextUpdate ? new Date(assetData.nextUpdate) : null,
            nickname: assetData.nickname,
            note: assetData.note,
            noteDate: assetData.noteDate ? new Date(assetData.noteDate) : null,
            ownership: assetData.ownership,
            primaryAssetCategory: assetData.primaryAssetCategory,
            status: assetData.status,
            statusCode: assetData.statusCode,
            userInstitutionId: assetData.userInstitutionId,
            vendorAccountType: assetData.vendorAccountType,
            vendorContainer: assetData.vendorContainer,
            vendorResponseType: assetData.vendorResponseType,
            wealthAssetType: assetData.wealthAssetType,
            wid: assetData.wid,
        };

        try {
            dataForCreate.assetInfo = assetData.assetInfo ? JSON.parse(assetData.assetInfo) : Prisma.JsonNull;
        } catch (e) {
            console.error(`Failed to parse assetInfo for assetId ${assetData.assetId}, field will be null. Raw data: `, assetData.assetInfo, e);
            dataForCreate.assetInfo = Prisma.JsonNull;
        }

        dataForCreate.beneficiaryComposition = assetData.beneficiaryComposition === null ? Prisma.JsonNull : assetData.beneficiaryComposition;
        dataForCreate.integration = assetData.integration === null ? Prisma.JsonNull : assetData.integration;
        dataForCreate.vendorResponse = assetData.vendorResponse === null ? Prisma.JsonNull : assetData.vendorResponse;

        if (assetData.holdings && assetData.holdings.majorAssetClasses && Array.isArray(assetData.holdings.majorAssetClasses)) {
            dataForCreate.holdings = {
                create: {
                    majorAssetClasses: {
                        create: assetData.holdings.majorAssetClasses.map(mac => ({
                            majorClass: mac.majorClass,
                            assetClasses: mac.assetClasses && Array.isArray(mac.assetClasses) ? {
                                create: mac.assetClasses.map(ac => ({
                                    minorAssetClass: ac.minorAssetClass,
                                    value: ac.value,
                                })),
                            } : undefined,
                        })),
                    },
                },
            };
        }

        try {
            const asset = await prisma.asset.create({
                data: dataForCreate,
            });
            console.log(`Successfully created asset with id: ${asset.assetId}`);
        } catch (error) {
            console.error(`Error creating asset with id ${assetData.assetId}:`);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                console.error(`  Prisma Error Code: ${error.code}`);
                console.error(`  Message: ${error.message}`);
                if (error.meta) {
                    console.error(`  Meta: ${JSON.stringify(error.meta)}`);
                }
            } else if (error instanceof Error) {
                console.error(`  General Error: ${error.message}`);
                // console.error(error.stack); // Uncomment for full stack trace
            } else {
                console.error(`  An unknown error occurred: ${error}`);
            }
        }
    }

    console.log(`Seeding process finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('An error occurred during seeding:', e);
        await prisma.$disconnect();
        process.exit(1);
    });