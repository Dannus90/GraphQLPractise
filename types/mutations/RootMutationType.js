import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from "graphql";
import { books } from "../../data/fakeData.js";
import { BookType } from "../queries/BookType.js";

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
       } 
    })
})