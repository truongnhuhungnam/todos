export const state = () => ({
    todoList: [],
})

export const getters = {
    all(state) {
        return state.todoList
    },
    progress(state) {
        return state.todoList.filter(function (item) {
            return !item.isComplete
        })
    },
    done(state) {
        return state.todoList.filter(function (item) {
            return item.isComplete
        })
    },
}

export const mutations = {
    store(state, data) {
        state.todoList = data
    },
}

export const actions = {
    getTodoList(vuexContext) {
        return this.$axios
            .$get('https://****************.mockapi.io/todos')
            .then((res) => {
                vuexContext.commit('store', res)
            })
    },
}
