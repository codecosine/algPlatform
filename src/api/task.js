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
function getList(options){
  return axios.post('/getTaskList', options)
}
export default {
    getList,
    addTask,
    checkConfig,
    solutionRun,
}