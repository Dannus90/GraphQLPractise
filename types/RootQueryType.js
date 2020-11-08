import { GraphQLObjectType, GraphQLList } from "graphql";
import { BookType } from "./BookType.js";
import { authors, books } from "../data/fakeData.js"

export const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        books: {
            type: GraphQLList(BookType),
            description: "List of books",
            resolve: () => books
        }
    })
})