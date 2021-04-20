import APIs from '../../../src/APIs.json'

export default async (req, res) => {
	res.status(200).json(APIs)
}
