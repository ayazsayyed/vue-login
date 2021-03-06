const INITIAL_DATA_URL = "https://raw.githubusercontent.com/techlab23/data-repository/master/boards.json"
import axios from "axios"

export default {
    async fetchData({ commit }) {
        console.log('asd')
        return axios.get(INITIAL_DATA_URL).then(res => {
            commit("SET_INITIAL_DATA", res.data)
            console.log(res.data)
        })
    },
    async saveTaskBoard({ commit }, payload) {
        commit("SAVE_TASKBOARD", payload)
    },
}