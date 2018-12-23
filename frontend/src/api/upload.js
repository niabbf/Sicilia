// import * as axios from 'axios'
const SERVER_ADR = 'http://39.108.208.217'
function upload (formData) {
  const url = `${SERVER_ADR}/upload/`
  console.log(formData)
  let opts = {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return fetch(url, opts)
    // get data
    .then(x => x.data)
    // add url field
    .then(x => x.map(img => Object.assign({},
      img, { url: `${SERVER_ADR}/images/${img.id}` })))
}

export { upload }
