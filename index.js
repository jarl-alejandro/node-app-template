import { createServer } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'

const server = createServer(app)

mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true })
.then(() => {

	server.listen(config.PORT, () => {
		console.log(`
			🚀  GraphQL corriendo en ${config.URL}
			🎉  GraphiQL en ${config.URL}/graphql
		`)
	})
})

