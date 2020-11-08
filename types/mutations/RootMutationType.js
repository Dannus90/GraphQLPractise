import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from "graphql";
import { authors, books } from "../../data/fakeData.js";
import { BookType } from "../queries/BookType.js";
import { AuthorType } from "../queries/AuthorType.js";

export const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",
    fields: () => ({
       addBook: {
           type: BookType,
           description: "Adds book",
           args: {
               name: { type: GraphQLNonNull(GraphQLString) },
               authorId: { type: GraphQLNonNull(GraphQLInt) }
           },
           resolve: (parent, args) => {
               const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
               books.push(book)
               return book
           }
       },
       addAuthor: {
        type: AuthorType,
        description: "Adds Author",
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: (parent, args) => {
            const author = { id: authors.length, name: args.name, authorId: args.authorId }
            authors.push(author)
            return author
        }
    } 
    })
})