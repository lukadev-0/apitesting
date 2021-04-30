import { randomBytes } from 'crypto'
import { serialize, parse } from 'cookie'
import { sign } from 'jsonwebtoken'
import axios from 'axios'

const STATE_COOKIE_NAME = 'github-oauth__state'
const GITHUB_OAUTH_URL = 'https://github.com/login/oauth'

export default function handler(req, res) {
    const { code, state, back_redirect = '/' } = req.query

    if (code && state) return callback(req, res)

    const newState = randomBytes(32).toString('base64')

    res.setHeader('Set-Cookie', serialize(STATE_COOKIE_NAME, JSON.stringify({
        rnd: newState,
        back: back_redirect
    }), {
        path: '/',
        httpOnly: true
    }))

    res.redirect(
        `${GITHUB_OAUTH_URL}/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&state=${newState}`
    )
}

async function callback(req, res) {
    const { [STATE_COOKIE_NAME]: cookie } = parse(req.headers.cookie ?? '')

    const cookieData = JSON.parse(cookie)

    if (cookieData.rnd !== req.query.state) return res.redirect(
        '/autherror?code=state-not-equal'
    )

    const accessToken = (await axios.post(
        `${GITHUB_OAUTH_URL}/access_token` +
        `?client_id=${process.env.GITHUB_CLIENT_ID}&` +
        `client_secret=${process.env.GITHUB_CLIENT_SECRET}&` +
        `code=${req.query.code}&` +
        `state=${req.query.state}`, null, {
        headers: {
            'Accept': 'application/json'
        }
    })).data.access_token

    const user = (await axios.get('https://api.github.com/user', {
        headers: {
            'Authorization': `token ${accessToken}`
        }
    })).data

    const token = sign({
        sub: user.id,
        nickname: user.name,
        preferred_username: user.login,
        profile: user.html_url,
        picture: user.avatar_url
    }, process.env.TOKEN_SECRET, {
        expiresIn: '24h'
    })

    res.setHeader('Set-Cookie', serialize('auth_token', token, {
        path: '/',
        httpOnly: true
    }))

    res.redirect(cookieData.back)
}