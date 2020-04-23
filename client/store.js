import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import axios from 'axios'

const initialState = {
  project: {},
  loading: true,
  projects: [],
  projectsLoading: true
}

//ACTION TYPE
const GET_PROJECT = 'GET_PROJECT'
const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'

//ACTION CREATOR
const getProject = (project) => ({
  type: GET_PROJECT,
  project
})

const getAllProjects = (projects) => ({
  type: GET_ALL_PROJECTS,
  projects
})

//THUNK CREATOR
export const fetchProject = projectName => async dispatch => {
  try{
    const {data} = await axios.get(`/api/projects/${projectName}`)
    dispatch(getProject(data))
  } catch (err){
    console.error(err)
  }
}

export const fetchAllProjects = () => async dispatch => {
  try{
    const {data} = await axios.get('/api/projects')
    dispatch(getAllProjects(data))
  } catch(err){
    console.error(err)
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PROJECT:
      return {...state, project: action.project, loading: false}
    case GET_ALL_PROJECTS:
      return {...state, projects: action.projects, projectsLoading: false}
    default:
      return state
  }
}

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware);

export default store
