import axios from 'axios'
function addTask(options){
  return axios.post('/solutionRun', options)
}
function solutionRun(options){
  return axios.post('/solutionRun', options)
}
function checkConfig(options){
  return axios.post('/checkConfig', options)
}
export default {
    addTask,
    checkConfig,
    solutionRun,
}