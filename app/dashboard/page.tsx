"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

import data from "./data.json"

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const client = new ApolloClient({
//     uri: "https://countries.trevorblades.com/graphql",
//     cache: new InMemoryCache(),
// });


export default function Page() {
    return (
        // <ApolloProvider client={client}>
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                    <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
            </div>
        </div>
        // </ApolloProvider>
    )
}
