import { ApolloClient, InMemoryCache } from '@apollo/client';


const apolloclient = new ApolloClient({
  uri: "https://clientdevapi.multivurse.com",
  cache: new InMemoryCache(),
});

export default apolloclient;
