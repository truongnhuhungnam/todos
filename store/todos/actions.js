export default {
    getTodoList(vuexContext) {
        return this.$axios
            .$get('https://60a8d18120a6410017306479.mockapi.io/todos')
            .then((res) => {
                vuexContext.commit('store', res)
            })
    },
}
