"use client"
import { useEffect, useState } from "react"

import {
    fetchAssetById,
    // fetchAssetByInfoType
} from "@/app/actions/assets/assets"
import { Asset } from "@/generated/prisma"
import { DataRenderer } from "@/components/ui/data-renderer"


export default function CryptocurrencyPage() {
    const [asset, setAsset] = useState<Asset | null>(null)

    const handleFetchAssetById = async () => {
        const asset = await fetchAssetById("5t6tl3l0HUmjR9024mqBVA")
        setAsset(asset)
    }

    useEffect(() => {
        handleFetchAssetById()
    }, [])

    return (
        <div>
            <h1>Cryptocurrency</h1>
            {asset ? (
                <DataRenderer data={asset} />
            ) : (
                <p>...loading</p>
            )}
        </div>
    )
}