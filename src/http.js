import Axios from 'axios'

const http = Axios.create({
    baseURL:'https://data.miaov.com/'
})
function getData(type,page){
    return http.post()
}
export default getData;