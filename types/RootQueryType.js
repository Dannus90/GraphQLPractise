import { GraphQLObjectType, GraphQLList, GraphQLInt } from "graphql";
import { BookType } from "./BookType.js";
import { authors, books } from "../data/fakeData.js"
import { AuthorType } from "./AuthorType.js";

export const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        book: {
            type: BookType,
            description: "A single book",
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => books.find(book => book.id === args.id)
        },
        books: {
            type: GraphQLList(BookType),
            description: "List of books",
            resolve: () => books
        },
        author: {
            type: AuthorType,
            description: "A single author",
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => authors.find(author => author.id === args.id)
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: "List of all authors",
            resolve: () => authors
        }
    })
})