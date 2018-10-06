const SERVER_ADR = 'http://39.108.208.217'

export default {
  login (cbSucceed, cbFail, mail, pwd) {
    var formData = new FormData()
    formData.append('name', mail)
    formData.append('password', pwd)
    fetch(SERVER_ADR, {
      body: formData,
      method: 'POST'
    })
      .then(function (response) {
        return response.text()
      })
      .then(function (status) {
        if (status === 'success') {
          const mockCookie = 'this_is_a_cookie'
          cbSucceed(mockCookie)
        } else {
          console.log(status)
          cbFail()
        }
      })
  }
}
