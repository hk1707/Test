module.exports = {
    reactStrictMode: true,
    distDir: "build",
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://test-lak3jxz0r-testw.vercel.app/' // development api
            : 'https://test-dqx1d1z7p-testw.vercel.app' // production api
    }
}