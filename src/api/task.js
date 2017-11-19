import axios from 'axios'
function addTask(options){
  return axios.post('/addTask', options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function checkConfig(options){
  return axios.post('/checkConfig', options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default {
    addTask,
    checkConfig,
}