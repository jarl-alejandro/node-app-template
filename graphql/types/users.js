import { gql } from 'apollo-server-express'

export default gql`

	input UserInput {
		user_fullName: String!
		user_username: String!
		user_password: String!
	}

	type User {
		id: ID!
		user_fullName: String!
		user_username: String!
		user_password: String!
	}

	type Query {
		allUser: [User]!
		getUser(id: ID!): User!
	}

	type Mutation {
		createUser(input: UserInput): User
	}
`
