import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } from "graphql"
import { books } from "../../data/fakeData.js"
import { BookType } from "./BookType.js"

export const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "This represents an author of a book",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: { 
            type: GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id)
            }
        }
    })
})