import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from "graphql"
import { authors } from "../data/fakeData.js"
import { AuthorType } from "./AuthorType.js"

export const BookType = new GraphQLObjectType({
    name: "Book",
    description: "This represents a very fine book indeed",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: { 
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId)
            }}
    })
})