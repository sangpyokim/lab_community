import axios from 'axios';


const api = axios.create({
    baseURL: "http://211.227.151.158:8080/api/"
})

export const boardApi = {
    getFreeBoardList: () => api.get("get_list"),
    getAiBoardList: () => api.get("get_list_AI"),
    getDBBoardList: () => api.get("get_list_DB"),
    getSWBoardList: () => api.get("get_list_software"),
    getNWBoardList: () => api.get("get_list_network"),
    getVBoardList: () => api.get("get_list_vision"),
    getGPBoardList: () => api.get("get_list_graphics"),
}