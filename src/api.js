import axios from 'axios'


const api = () => {
    getList: axios.get('ttp://192.168.1.6:8080/api/get_list').then( res => res.data.dtoList)

}

export default api