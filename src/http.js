import Axios from 'axios'

const http = Axios.create({
    baseURL:'https://data.miaov.com/'
})
function getData(page,rows){
    return http.post(`lecturer/lists?page=${page}&rows=${rows}`)
}
export default getData;