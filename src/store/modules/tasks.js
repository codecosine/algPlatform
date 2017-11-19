import task from '../../api/task'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  // view
  currentIndex: '',
  list: [{
    id: 18825,
    algs: 'ID3',
    status: 1,
    name: 'task1983',
    user: 'administrator',
    message: '任务执行完成',
    result: {},
    submitTime: '2017-11-10 16:26:35',
    startTime: '2017-11-10 16:26:35',
    finishTime: '2017-11-10 16:26:35',
  },{
    id: 10010,
    algs: 'ID3',
    status: 1,
    name: '随便测测',
    user: 'administrator',
    message: '任务执行完成',
    result: {},
    submitTime: '2017-11-10 16:26:35',
    startTime: '2017-11-10 16:26:35',
    finishTime: '2017-11-10 16:26:35',
  },{
    id: 7752,
    algs: 'ID3',
    status: 1,
    name: '第一个任务',
    user: 'administrator',
    message: '任务执行完成',
    result: {},
    submitTime: '2017-11-10 16:26:35',
    startTime: '2017-11-10 16:26:35',
    finishTime: '2017-11-10 16:26:35',
  }],
  checkoutStatus: null,
  // cathe
  cathe: [],
}

// getters
const getters = {
  taskList: state => state.list
}

// actions
const actions = {
  addTask ({ commit, state }, data){
    return task.addTask(data);
  },
  checkConfig ({ commit, state }, data){
    return task.checkConfig(data);
  },
}

// mutations
const mutations = {
  [types.ADD_TO_LIST] (state, task) {
    //temp
    if(task){
      state.list.push(task)
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}