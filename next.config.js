const nextConfig = {
  distDir: "build",
  publicRuntimeConfig: {
    MOVIE_API_KEY: process.env.MOVIE_API_KEY,
    MOVIE_API_URL: process.env.MOVIE_API_URL
  },
  compress: true,
};


module.exports = nextConfig;
