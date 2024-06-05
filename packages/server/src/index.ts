import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import resolvers from "./resolvers/index";
import { GBooksAPI } from "./data-sources/gbooks";
import "dotenv/config";

const schemaPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./schema.graphql"
);
console.log(schemaPath);
const typeDefs = readFileSync(schemaPath, "utf-8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        gbooks: new GBooksAPI({cache}),
      },
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
