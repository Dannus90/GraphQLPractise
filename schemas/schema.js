import { GraphQLSchema } from "graphql";
import { RootQueryType } from "../types/RootQueryType.js";

export const schema = new GraphQLSchema({
    query: RootQueryType
})