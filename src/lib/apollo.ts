import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r4dj3c0luv01z503g4aiqk/master',
    cache: new InMemoryCache()
})