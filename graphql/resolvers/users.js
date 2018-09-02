import User from '../../models/User'

export default {

	Query: {
		allUser: (parent, args) => User.find(),
		getUser: (parent, args) => User.findById(args._id)
	},

	Mutation: {
		createUser: async (parent, args) => {
			let user = await User.create(args.input)
			console.log(user)
			return user
		}
	}
}
