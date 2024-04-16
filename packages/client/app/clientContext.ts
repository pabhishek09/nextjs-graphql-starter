import { createContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export const Client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const ClientContext =
  createContext<ApolloClient<NormalizedCacheObject>>(Client);
