export default {
    STORE(state, data) {
        state.todoList = data
    },
    ADD(state, content) {
        state.todoList.unshift(content)
    },
}
