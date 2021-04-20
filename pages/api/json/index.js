import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
	res.status(200).json({
		OMG: 'YAS',
	})
}
