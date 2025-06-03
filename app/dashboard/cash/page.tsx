"use client"
import { useEffect, useState } from "react"

import {
    fetchAssetById,
    // fetchAssetByInfoType
} from "@/app/actions/assets/assets"
import { Asset } from "@/generated/prisma"
import { DataRenderer } from "@/components/ui/data-renderer"


export default function CashPage() {
    const [asset, setAsset] = useState<Asset | null>(null)

    const handleFetchAssetById = async () => {
        const asset = await fetchAssetById("qJfnKleFCUW6rlYsKEGiEA")
        setAsset(asset)
    }



    useEffect(() => {
        handleFetchAssetById()
    }, [])

    return (
        <div>
            <h1>Cash</h1>
            {asset ? (
                <DataRenderer data={asset} />
            ) : (
                <p>...loading</p>
            )}
        </div>
    )
}