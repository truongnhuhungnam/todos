export default {
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
