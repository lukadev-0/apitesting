export default async (req, res) => {
	res.status(200).json({
		Method: req.method ?? 'Unknown method.',
	})
}
