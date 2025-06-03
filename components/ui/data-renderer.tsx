export const DataRenderer = ({ data }: { data: unknown }) => {
    if (typeof data !== 'object' || data === null) {
        return <>{String(data)}</>;
    }

    if (Array.isArray(data)) {
        return (
            <ul style={{ paddingLeft: '20px', margin: '0px' }}>
                {data.map((item, index) => (
                    <li key={index}>
                        <DataRenderer data={item} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul style={{ paddingLeft: '20px', margin: '0px' }}>
            {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}:</strong> <DataRenderer data={value} />
                </li>
            ))}
        </ul>
    );
};