export default {
  development: {
    port: 4000,
    api: {
      baseURL: 'http://consorcio-api-stg.herokuapp.com'
      // baseURL: 'http://localhost:3000'
    }
  },
  production: {
    port: process.env.PORT || 8080,
    api: {
      baseURL: ''
    }
  },
  stage: {
    port: process.env.PORT || 8080,
    api: {
      baseURL: ''
    }
  }
}