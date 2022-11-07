import configAxios from './configAxios'

function getProducts () {
  const axios = configAxios()
  return axios.get('')
}

export default getProducts
