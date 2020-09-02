import axios from 'axios';

export const state = () => ({
    temp: null,
    api_call: false
})

export const mutations = {
    WEATHER(state, res) {
        // default temp is in kelvin, so converting it to celcius
        state.temp = res.data.main.temp - 273.15
    },
    API_CALL(state) {
        state.api_call = true
    }
}

export const actions = {
    async nuxtServerInit({commit}) {
        commit('WEATHER',
            await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=' + process.env.API_KEY)
        )
        commit('API_CALL')
    }
}