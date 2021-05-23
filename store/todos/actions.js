export default {
    getTodoList(vuexContext) {
        return this.$axios
            .$get('https://60a8d18120a6410017306479.mockapi.io/todos')
            .then((res) => {
                vuexContext.commit('STORE', res)
            })
    },
    addTodo(vuexContext, content) {
        return this.$axios
            .$post('https://60a8d18120a6410017306479.mockapi.io/todos', {
                content,
                isComplete: false,
            })
            .then(function (res) {
                vuexContext.commit('ADD', res)
            })
            .catch(function (err) {
                alert(err)
            })
    },
}
