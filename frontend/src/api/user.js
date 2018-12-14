const SERVER_ADR = 'http://39.108.208.217'

export default {
  login (cbSucceed, cbFail, mail, pwd) {
    var formData = new FormData()
    formData.append('name', mail)
    formData.append('password', pwd)
    fetch(SERVER_ADR + '/login', {
      body: formData,
      method: 'POST'
    })
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
          cbFail('Access Failed')
        }
      })
      .catch(function () {
        cbFail('Can\'t access server')
      })
  }
}
