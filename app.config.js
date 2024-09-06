// app.config.js
export default {
  expo: {
    name: "my-auth0-app",
    slug: "my-auth0-app",
    scheme: "my-auth0-app",
    version: "1.0.0",
    extra: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
    },
  },
};
