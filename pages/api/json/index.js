import APIs from '@src/APIs.json'

export default async (req, res) => {
	if (req.method !== 'GET')
		return res.status(405).json({
			error: 'This endpoint only accepts GET requests.',
		})
	res.status(200).json(APIs)
}
