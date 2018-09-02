import express from 'express'
import cors from 'cors'

import server from './graphql/schema'

const app = express()
app.use(cors())

server.applyMiddleware({ app })


export default app
