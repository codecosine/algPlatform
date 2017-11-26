import task from '../../api/task'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  // view
  currentIndex: 0,
  list: [],
  checkoutStatus: null,
  // cathe
  cathe: [],
}

// getters
const getters = {
  taskList: state => state.list,
  cuurentIndex: state => state.currentIndex,
  //&& state.cuurentIndex+1 <= state.list.length
  cuurentTask: state=>{
    if(state.currentIndex != -1){
      return state.list[state.currentIndex]
    } else {
      return {
        id: 0,
        algs: '默认值',
        status: 1,
        name: '默认值',
        user: 'administrator',
        message: '默认值',
        result: {},
        submitTime: '2017-11-10 16:26:35',
        startTime: '2017-11-10 16:26:35',
        finishTime: '2017-11-10 16:26:35',
      }
    }
  }
}

// actions
const actions = {

  changeIndex( { commit, state },data){
    commit(types.UPDATE_INDEX,data)
  },
  checkConfig ({ commit, state }, data){
    return task.checkConfig(data);
  },
  updateTaskList({commit,state}){
    task.getList().then(res=>{
      types.ADD_TO_LIST(res.data)
    });
  }
}

// mutations
const mutations = {
  [types.ADD_TO_LIST] (state, data) {
      state.list = data
  },

  [types.UPDATE_INDEX] (state,data) {
    state.currentIndex = data
    console.log(state.changeIndex)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}