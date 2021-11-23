module.exports = {
    reactStrictMode: true,
    experimental: { esmExternals: false },
    distDir: 'build',
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'test-ax65xi3gl-testw.vercel.app/api' // development api
            : 'test-ax65xi3gl-testw.vercel.app/api' // production api
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
      }
}