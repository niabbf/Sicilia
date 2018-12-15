const SERVER_ADR = 'http://39.108.208.217'

export default {
  login (cbSucceed, cbFail, name, pwd) {
    let formData = new FormData()
    formData.append('name', name)
    formData.append('password', pwd)
    let opts = {
      method: "POST",
      body:formData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(SERVER_ADR + '/login', opts)
      .then(function (response) {
        if (response.status === 200) {
          return {status: true, msg: response.text()}
        } else {
          return {status: false, msg: response.text()}
        }
      })
      .then(function ({status, msg}) {
        console.log(status)
        if (status === true) {
          const Cookie = msg
          cbSucceed(Cookie)
        } else {
          cbFail('No such user')
        }
      })
      .catch(() => {
        cbFail('Can\'t access server')
      })
  }
}
