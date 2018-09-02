export default {

	Query: {
		allPost: (parent, args, ctx) => {
			return [
				{ id: 1, name: 'Migrate apollo v1 to v2' },
				{ id: 2, name: 'Using next.js' },
				{ id: 2, name: 'Microservice' },
				{ id: 3, name: 'ia' },
			]
		}
	}
}
