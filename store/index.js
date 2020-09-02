import axios from 'axios';

export const state = () => ({
    svg: null,
    api_call: false
})

export const mutations = {
    SVG(state, res) {
        console.log(res)
        state.svg = res.data
    },
    API_CALL(state) {
        state.api_call = true
    }
}

export const actions = {
    async nuxtServerInit({commit}) {
        console.log('Hitting api')
        commit('SVG',
            await axios.get('https://github-counter.glitch.me/api_call.svg')
        )
        commit('API_CALL')
    }
}