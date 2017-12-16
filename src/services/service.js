import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getData = () => {
  return ax.get('/data/results.json')
  .then(results => {
    return results.data
  })
}
