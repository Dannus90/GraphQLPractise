import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql"

export const basicSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HelloWorld",
        fields: () => ({
        message: { 
            type: GraphQLString,
            resolve: () => "Hello world!"
        }
        })
    })
})