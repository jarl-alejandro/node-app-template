import path from 'path'
// Imports: GraphQL
import { ApolloServer } from 'apollo-server-express'

// Imports: GraphQL TypeDefs & Resolvers

import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))


// config
import config from '../config'

// GraphQL: Schema
const SERVER = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: `${config.URL}/graphql`,
		settings: {
			'editor.theme': 'light'
		}
	}

})

export default SERVER
