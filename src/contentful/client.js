import * as contentful from 'contentful'

const accessToken = import.meta.env.VITE_AccessToken
const space = import.meta.env.VITE_space

// createClient throws when credentials are missing; fall back to a client that rejects
// so only the blog pages are affected (e.g. local dev without a .env file).
export const client =
    accessToken && space
        ? contentful.createClient({ accessToken, space })
        : { getEntries: () => Promise.reject(new Error('Contentful credentials are not configured')) }