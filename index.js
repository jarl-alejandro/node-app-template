import { createServer } from 'http'

const port = process.env.PORT || 3000

const server = createServer(onRequest)

function onRequest (req, res) {
	res.end('Hello World')
}

server.listen(port, () => {
	console.log(`Server running in port ${port}`)
})
