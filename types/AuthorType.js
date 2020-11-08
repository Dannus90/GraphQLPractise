import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from "graphql"

export const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "This represents an author of a book",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
    })
})