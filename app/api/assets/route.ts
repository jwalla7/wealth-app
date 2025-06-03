import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { PrismaClient } from '../../../generated/prisma';

export async function GET(request: Request): Promise<NextResponse> {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized: You must be logged in to access this resource.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const assetId = searchParams.get('assetId');

    if (!assetId) {
        return NextResponse.json({ error: 'Bad Request: assetId is required.' }, { status: 400 });
    }

    const prisma = new PrismaClient();

    try {
        const asset = await prisma.asset.findUnique({
            where: {
                assetId: assetId,
            },
            include: {
                holdings: {
                    include: {
                        majorAssetClasses: {
                            include: {
                                assetClasses: true,
                            },
                        },
                    },
                },
            }
        });

        if (!asset) {
            return NextResponse.json({ error: 'Not Found: Asset not found.' }, { status: 404 });
        }

        return NextResponse.json(asset);
    } catch (error) {
        console.error('[API/ASSETS] Unhandled error:', error);
        const errorMessage = 'Internal Server Error';
        if (error instanceof Error) {
            console.error(`[API/ASSETS] Prisma Error: ${error.message}`);
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
