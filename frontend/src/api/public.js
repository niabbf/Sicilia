// const SERVER_ADR = 'http://39.108.208.217'

export default {
  getPublicTasks (cbSucceed, cbFail, begin, length, location) {
    // var formData = new FormData()
    // if (location !== undefined) {
    //   formData.append('location', location)
    // }
    // formData.append('begin', begin)
    // formData.append('length', length)
    // let opts = {
    //   method: 'POST',
    //   body: formData
    // }
    // fetch(SERVER_ADR + '/tasks', opts)
    //   .then(response => response.json())
    //   .then(function (tasks) {
    //     if (tasks.length > 0) {
    //       cbSucceed(tasks)
    //     } else {
    //       cbFail('No more tasks')
    //     }
    //   })
    //   .catch((response) => {
    //     cbFail('Can\'t access server')
    //   })
    setTimeout(() => {
      if (location !== undefined) {
        if (begin <= 15) {
          cbSucceed(mockDataLocation)
        } else {
          cbFail('No more tasks')
        }
      } else {
        if (begin <= 15) {
          cbSucceed(mockDataDeadline)
        } else {
          cbFail('No more tasks')
        }
      }
    }, 2000)
  }
}

const mockDataLocation = [
  {
    index: 0,
    status: 0,
    user: 'Chen JY',
    location: 'shanghai',
    task_sponser: '123',
    deadline: '2019-01-01',
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
    user: 'WZY',
    location: 'shanghai',
    task_sponser: '375',
    deadline: '2018-12-20',
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
    user: 'Dog',
    location: 'shanghai',
    task_sponser: '200',
    deadline: '2019-01-01',
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
    user: 'Rubbish',
    location: 'shanghai',
    task_sponser: '9999',
    deadline: '2019-01-01',
    tags: [
      {
        text: 'kill teachers',
        color: 'success'
      },
      {
        text: 'Shanghai',
        color: 'info'
      }
    ],
    subtitle: '暗杀行动',
    info: '因为PJ做不完，求杀手一枚，刺杀老师，事成重赏'
  },
  {
    index: 4,
    status: 0,
    user: 'Shit',
    location: 'shanghai',
    task_sponser: '20',
    deadline: '2019-03-04',
    tags: [
      {
        text: 'Eat shit',
        color: 'success'
      },
      {
        text: 'Shanghai',
        color: 'info'
      }
    ],
    subtitle: '吃狗屎',
    info: '突然想吃狗屎，诚邀同伴，相约复旦张江食堂一楼的厕所'
  }
]

const mockDataDeadline = [
  {
    index: 0,
    status: 0,
    user: 'DDLtest',
    location: 'shanghai',
    task_sponser: '123',
    deadline: '2019-01-01',
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
    user: 'DDLtest',
    location: 'shanghai',
    task_sponser: '375',
    deadline: '2018-12-20',
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
    user: 'DDLtest',
    location: 'shanghai',
    task_sponser: '200',
    deadline: '2019-01-01',
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
    user: 'DDLtest',
    location: 'shanghai',
    task_sponser: '9999',
    deadline: '2019-01-01',
    tags: [
      {
        text: 'kill teachers',
        color: 'success'
      },
      {
        text: 'Shanghai',
        color: 'info'
      }
    ],
    subtitle: '暗杀行动',
    info: '因为PJ做不完，求杀手一枚，刺杀老师，事成重赏'
  },
  {
    index: 4,
    status: 0,
    user: 'DDLtest',
    location: 'shanghai',
    task_sponser: '20',
    deadline: '2019-03-04',
    tags: [
      {
        text: 'Eat shit',
        color: 'success'
      },
      {
        text: 'Shanghai',
        color: 'info'
      }
    ],
    subtitle: '吃狗屎',
    info: '突然想吃狗屎，诚邀同伴，相约复旦张江食堂一楼的厕所'
  }
]
