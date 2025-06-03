"use client"

import { useEffect, useState } from "react"

import {
    fetchAssetById,
    // fetchAssetByInfoType
} from "@/app/actions/assets/assets"
import { Asset } from "@/generated/prisma"


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { DataRenderer } from "@/components/ui/data-renderer"

export default function RealEstatePage() {
    const [asset, setAsset] = useState<Asset | null>(null)
    const [realEstate, setRealEstate] = useState<Asset | null>(null)

    const handleFetchAssetById = async () => {
        const fetchedAsset = await fetchAssetById("qJfnKleFCUW6rlYsKEGiEA")
        const fetchedRealEstate = await fetchAssetById("EuGiFOXJoECzFWT6t4sBfw")
        setAsset(fetchedAsset)
        setRealEstate(fetchedRealEstate)
    }

    useEffect(() => {
        handleFetchAssetById()
    }, [])


    return (
        <div>
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="account">RealEstate 1</TabsTrigger>
                        <TabsTrigger value="password">RealEstate 2</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>RealEstate 1</CardTitle>
                                <CardDescription>
                                    Details for the first real estate asset.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                {asset ? (
                                    <DataRenderer data={asset} />
                                ) : (
                                    <p>...loading asset data</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>RealEstate 2</CardTitle>
                                <CardDescription>
                                    Details for the second real estate asset.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                {realEstate ? (
                                    <DataRenderer data={realEstate} />
                                ) : (
                                    <p>...loading real estate data</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}