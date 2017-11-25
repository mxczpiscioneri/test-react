export default {
  development: {
    port: 4000
  },
  production: {
    port: process.env.PORT || 8080
  },
  stage: {
    port: process.env.PORT || 8080
  }
}