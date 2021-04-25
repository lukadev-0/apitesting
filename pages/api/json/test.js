export default async (req, res) => {
	res.status(200).json({
		method: req.method ?? 'Unknown method.',
	})
}
