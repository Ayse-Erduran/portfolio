const router = require('express').Router()

router.use('/projects', require('./projects'))

module.exports = router

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
