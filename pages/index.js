import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import APIs from '../src/APIs.json'
import Header from '../src/Header'
import Head from 'next/head'

const BaseItem = ({ endpoint, method }) => {
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
			<Head>
				<title>daimond113's API</title>
				<meta content="daimond113's API" property="og:title" />
				<meta content="daimond113's APIs" property="og:description" />
				<meta content="https://www.daimond113.com/" property="og:url" />
				<meta
					content="https://avatars.githubusercontent.com/u/72147841?v=4"
					property="og:image"
				/>
				<meta content="#43B581" data-react-helmet="true" name="theme-color" />
			</Head>
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
