import { Button, makeStyles, Typography } from '@material-ui/core'
import Header from '@src/Header'
import firebase from 'firebase'
import { useUser, useAuth } from 'reactfire'
import Head from 'next/head'
import Loading from '@src/Loading'
import { useRouter } from 'next/router'
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '100%',
		height: '100vh',
	},
	buttons: {
		margin: theme.spacing(2),
	},
}))

export default function SignIn() {
	const classes = useStyles()
	const Router = useRouter()

	return (
		<div>
			<Head>
				<title>Sign in</title>
				<meta content="daimond113's API sign in page" property="og:title" />
				<meta
					content="Sign in to your account here"
					property="og:description"
				/>
				<meta
					content="https://apis.daimond113.com/auth/signin"
					property="og:url"
				/>
				<meta
					content="https://avatars.githubusercontent.com/u/72147841?v=4"
					property="og:image"
				/>
				<meta content="#43B581" data-react-helmet="true" name="theme-color" />
			</Head>
			<Header pos="absolute" />
		</div>
	)
}
