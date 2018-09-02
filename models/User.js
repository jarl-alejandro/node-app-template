import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = Schema({
	user_fullName: String,
	user_username: String,
	user_password: String,
})

UserSchema.set('toJSON', {
	transform: (doc, ret, options) => {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}
})


export default mongoose.model('User', UserSchema, 'User')
