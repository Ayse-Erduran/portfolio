const router = require('express').Router()
const Project = require('../models/projects')

module.exports = router

router.get('/projects/:projectName', async(req, res, next) => {
  try{
    const project = await Project.findOne({
      where: {
        name: req.params.projectName
      }
    })
    if(!project) res.sendStatus(404)
    else res.json(project)
  } catch(err){
    next(err)
  }
})
