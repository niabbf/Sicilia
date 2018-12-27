const SERVER_ADR = 'http://localhost:80'

function publishTask ({tags, subtitle, description, location, deadline, reward, fileList, callBack}) {
  let formData = new FormData()
  formData.append('tags', tags)
  formData.append('subtitle', subtitle)
  formData.append('description', description)
  formData.append('location', location)
  formData.append('deadline', deadline)
  formData.append('reward', reward)
  if (fileList) {
    fileList.forEach((File) => { formData.append('images[]', File) })
  } let opts = {
    method: 'POST',
    body: formData,
    credentials: 'include'
  }
  fetch(SERVER_ADR + '/publish_task', opts)
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        callBack(true)
      } else callBack(false, response.body)
    })
    .catch((response) => {
      console.log(response)
      callBack(false)
    })
};
export {publishTask}
