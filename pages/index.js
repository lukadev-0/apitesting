import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import APIs from '../src/APIs.json'
import Header from '../src/Header'

const BaseItem = ({ endpoint, description, method }) => {
	return (
		<Grid item>
			<Box mr={3} component="span">
				<Typography variant="h3" component="span">
					<b>{method}</b>
				</Typography>
			</Box>
			<Typography variant="h4" component="span">
				{endpoint}
			</Typography>
		</Grid>
	)
}

export default function Index() {
	return (
		<div>
			<Header />
			<Grid container alignItems="center" justify="center" direction="column">
				<Typography variant="h2">api.daimond113.com</Typography>
				{APIs.map(({ endpoint, method }) => {
					return <BaseItem endpoint={endpoint} method={method} />
				})}
			</Grid>
		</div>
	)
}
