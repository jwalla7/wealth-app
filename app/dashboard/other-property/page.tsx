"use client"

import { useEffect, useState } from "react"
import { fetchAssetById } from "@/app/actions/assets/assets"
import { Asset } from "@/generated/prisma"
import { DataRenderer } from "@/components/ui/data-renderer"

export default function OtherPropertyPage() {
    const [asset, setAsset] = useState<Asset | null>(null)

    const handleFetchAssetById = async () => {
        const asset = await fetchAssetById("4Xal3Zc5Ekq1JBeFeq8veQ")
        setAsset(asset)
    }


    useEffect(() => {
        handleFetchAssetById()
    }, [])

    return (
        <div>
            <h1>Other Property</h1>
            <h1>Vehicles</h1>
            {asset ? (
                <DataRenderer data={asset} />
            ) : (
                <p>...loading asset data</p>
            )}
        </div>
    )
}