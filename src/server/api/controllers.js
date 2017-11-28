export const index = (req, res) => {
  res.json({
    messages: [
      'Welcome to Universidade Webmotors Middlewares'
    ]
  })
}

export const notFound = (req, res) => {
  res
    .status(404)
    .json({
      messages: ['Not Found']
    })
}