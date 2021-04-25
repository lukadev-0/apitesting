import { Button, makeStyles, Typography } from '@material-ui/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../src/Header'
const useStyles = makeStyles({
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: '100vh',
		flexDirection: 'column',
	},
	path: {
		color: '#F00',
	},
	text: {
		fontSize: '2.5vw',
	},
})

export default function Page404() {
	const location = useRouter()
	const classes = useStyles()
	return (
		<div>
			<Head>
				<title>Page not found</title>
				<meta content="This page was not found" property="og:title" />
				<meta content="https://apis.daimond113.com" property="og:url" />
				<meta
					content="https://avatars.githubusercontent.com/u/72147841?v=4"
					property="og:image"
				/>
				<meta content="#43B581" data-react-helmet="true" name="theme-color" />
			</Head>
			<Header pos="absolute" />
			<div className={classes.center}>
				<Typography className={classes.text}>
					Oops! <br />
					Page{' '}
					<span className={classes.path}>
						{location.asPath.substring(1)}
					</span>{' '}
					doesn't seem to exist!
				</Typography>
				<Typography>Error 404</Typography>
				<Button href="/" variant="contained">
					Go back
				</Button>
			</div>
		</div>
	)
}
