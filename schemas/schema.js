import { GraphQLSchema } from "graphql";
import { RootQueryType } from "../types/queries/RootQueryType.js";
import { RootMutationType } from "../types/mutations/RootMutationType.js";

export const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})