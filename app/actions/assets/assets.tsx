export async function fetchAssetById(assetId: string) {
    try {
        const response = await fetch(`/api/assets?assetId=${assetId}`);



        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Failed to fetch asset:', error);
        throw error;
    }
}

export async function fetchAssetByInfoType(assetId: string, infoType: string) {
    try {
        const response = await fetch(`/api/assets?assetId=${assetId}&infoType=${infoType}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Failed to fetch asset by infoType ${infoType}:`, error);
        throw error;
    }
}
