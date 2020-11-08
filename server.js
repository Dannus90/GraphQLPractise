import express from "express"
import { graphqlHTTP } from "express-graphql"
import { schema } from "./schemas/schema.js"

const app = express()

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log("Server running")
})