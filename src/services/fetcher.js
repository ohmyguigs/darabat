const handleJSONresponse = (res) => {
  try {
    return res.json()
  } catch (e) {
    console.error('[CLIENT] Error geting JSON from body stream response!')
  }
}

const handleTEXTresponse = (res) => {
  try {
    return res.text()
  } catch (e) {
    console.error('[CLIENT] Error geting TEXT from body stream response!')
  }
}

export const getAllAlbums = () => {
  return fetch('http://localhost:3000/get-all-albums')
  .then(handleJSONresponse)
  .catch(err => console.error('[CLIENT] error fetching:', err))
}

export const checkAPI = () => {
  return fetch('http://localhost:3000/healthcheck')
  .then(handleTEXTresponse)
  .then(res => {
    if (res === 'ok') console.debug('[CLIENT] API status seems ok')
  })
  .catch(err => console.error('[CLIENT] sounds like API is not healthy or is not running...'))
}