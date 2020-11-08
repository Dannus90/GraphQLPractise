import express from "express"
import { graphqlHTTP } from "express-graphql"
import {basicSchema} from "./schemas/basicSchema.js"

const app = express()

app.use("/graphql", graphqlHTTP({
    schema: basicSchema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log("Server running")
})