const SERVER_ADR = 'http://39.108.208.217'

export default {
  login (cbSucceed, cbFail, name, pwd) {
    var formData = new FormData()
    formData.append('name', name)
    formData.append('password', pwd)
    let opts = {
      method: 'POST',
      body: formData
    }
    fetch(SERVER_ADR + '/login', opts)
      .then(response => response.text())
      .then(text => {
        if (text === 'password wrong') {
          return {status: false, msg: 'Password is wrong'}
        } else if (text === 'user do not exist') {
          return {status: false, msg: 'No such user'}
        } else {
          return {status: true, msg: text}
        }
      })
      .then(function ({status, msg}) {
        if (status === true) {
          const Cookie = msg
          cbSucceed(Cookie)
        } else {
          cbFail(msg)
        }
      })
      .catch(() => {
        cbFail('Can\'t access server')
      })
  },
  signUp (name, pwd, callBack) {
    var formData = new FormData()
    formData.append('name', name)
    formData.append('password', pwd)
    let opts = {
      method: 'POST',
      body: formData
    }
    fetch(SERVER_ADR + '/register', opts)
      .then((response) => {
        if (response.status === 200) {
          callBack('success')
        } else {
          callBack('Username exist')
        }
      })
      .catch(() => {
        callBack('Can\'t access server')
      })
  },
  logUp (cookie) {

  }
}
