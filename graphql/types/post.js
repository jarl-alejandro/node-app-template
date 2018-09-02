import { gql } from 'apollo-server-express'

export default gql`

	type Post {
		id: ID!
		name: String!
	}

	type Query {
		allPost: [Post]!
	}

`
