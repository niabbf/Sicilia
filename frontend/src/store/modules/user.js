import apiUser from '../../api/user'
import { setToken, removeToken } from '@/auth'
// initial state
const state = {
  name: null,
  password: null,
  tasks: [
    {
      index: 0,
      status: 0,
      name: 'Chen JY',
      adr: 'Fudan University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'find dog',
          color: 'success'
        },
        {
          text: 'Shanghai',
          color: 'info'
        }
      ],
      subtitle: '急！家中爱犬走失',
      info: '我于今日晚上六点十分左右在广州市天河区五山路，华晟大厦对面的天桥底与我家泰迪发发走丢了，它是公狗，没有穿衣服，毛发比较长，颜色均匀，走路的时候喜欢歪着走，体型不大，大概六斤左右，脖子上挂些绳圈但没有系绳子，希望有捡到或者看到过的朋友联系我一下，有酬谢！丢了爱犬很着急，多谢大家了，qq同微信号:309094783'
    },
    {
      index: 1,
      status: 0,
      name: 'WZY',
      adr: 'Fudan University',
      start: '2018-12-01',
      end: '2018-12-20',
      tags: [
        {
          text: 'find one girlfriend',
          color: 'success'
        },
        {
          text: 'Shanghai',
          color: 'info'
        }
      ],
      subtitle: '寻找真爱',
      info: '我家女朋友在我头上种草。上次回家她正含着...算了不说了。诚意征婚，要求不高，客厅像贵妇，厨房像主妇，床上像荡妇。年薪百块，条件还算不错。微信号:wangwangdog'
    },
    {
      index: 2,
      status: 0,
      name: 'Dog',
      adr: 'Jiaotong University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'find mother',
          color: 'success'
        },
        {
          text: 'Shanghai',
          color: 'info'
        }
      ],
      subtitle: '血妈爆炸',
      info: '我作业做不完了，考试也凉了，妈妈也爆炸了，可能这就是血妈爆炸吧。编不下去了对不起了'
    },
    {
      index: 3,
      status: 0,
      name: 'Rubbish',
      adr: 'Tsinghua University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'kill teachers',
          color: 'success'
        },
        {
          text: 'Beijing',
          color: 'info'
        }
      ],
      subtitle: '暗杀行动',
      info: '因为PJ做不完，求杀手一枚，刺杀老师，事成重赏'
    }
  ],
  userTasks: [
    {
      index: 0,
      status: 0,
      name: 'Test',
      adr: 'Shit University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'success',
          color: 'success'
        },
        {
          text: 'info',
          color: 'info'
        }
      ],
      subtitle: 'test0',
      info: 'Test for not done aaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      index: 1,
      status: 1,
      name: 'Test',
      adr: 'Shit University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'success',
          color: 'success'
        },
        {
          text: 'info',
          color: 'info'
        }
      ],
      subtitle: 'test1',
      info: 'Test for not checked bbbbbbbbbbbbbbbbbbbb'
    },
    {
      index: 2,
      status: 2,
      name: 'Test',
      adr: 'Shit University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'success',
          color: 'success'
        },
        {
          text: 'info',
          color: 'info'
        }
      ],
      subtitle: 'test2',
      info: 'Test for done ccccccccccccccccccccccccc'
    },
    {
      index: 3,
      status: 0,
      name: 'Test',
      adr: 'Shit University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'success',
          color: 'success'
        },
        {
          text: 'info',
          color: 'info'
        }
      ],
      subtitle: 'test2',
      info: 'Test for not done ccccccccccccccccccccccccc'
    },
    {
      index: 4,
      status: 0,
      name: 'Test',
      adr: 'Shit University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'success',
          color: 'success'
        },
        {
          text: 'info',
          color: 'info'
        }
      ],
      subtitle: 'test2',
      info: 'Test for not done ccccccccccccccccccccccccc'
    },
    {
      index: 5,
      status: 0,
      name: 'Test',
      adr: 'Shit University',
      start: '2018-12-01',
      end: '2019-01-01',
      tags: [
        {
          text: 'success',
          color: 'success'
        },
        {
          text: 'info',
          color: 'info'
        }
      ],
      subtitle: 'test2',
      info: 'Test for not done ccccccccccccccccccccccccc'
    }
  ]
}

// getters
const getters = {
  getTasks: state => {
    return state.tasks
  },
  getUserTasks: state => {
    return state.userTasks
  }
}

// actions
const actions = {
  loginUser ({commit}, payload) {
    apiUser.login(
      cookie => {
        commit('setName', payload.name)
        commit('setPassword', payload.pwd)
        setToken(cookie)
        payload.callback('success')
      },
      (str) => {
        console.log(str)
        payload.callback(str)
      },
      payload.name,
      payload.pwd
    )
  },
  signUp ({commit}, payload) {
    apiUser.signUp(payload.name, payload.pwd, payload.callback)
  },
  logOut ({commit}, payload) {
    apiUser.logUp(payload.cookie)
    removeToken()
    payload.callback()
  }
}

// mutations
const mutations = {
  setName (state, name) {
    state.name = name
  },
  setPassword (state, pwd) {
    state.password = pwd
  },
  clearUser (state) {
    state.name = null
    state.password = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
