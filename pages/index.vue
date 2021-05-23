<template>
    <div>
        <h2 class="text-center text-4xl text-green-400">TODOS</h2>
        <div class="mt-8 w-1/3 mx-auto border border-green-400">
            <input
                type="text"
                placeholder="What need to be done?"
                class="border-b border-green-400 py-2 px-2 w-full text-xl"
                @keyup.enter="addTodo"
            />
            <div class="p-4">
                <ul class="list-todos">
                    <TodosSingle
                        v-for="todo in filterTodos"
                        :id="todo.id"
                        :key="todo.id"
                        :content="todo.content"
                        :is-complete="todo.isComplete"
                    />
                </ul>
                <div class="flex justify-center">
                    <button
                        class="
                            mx-1
                            rounded-sm
                            border border-blue-400
                            px-2
                            transition
                            hover:opacity-40
                        "
                        @click="clickFilter('all')"
                    >
                        All {{ total }}
                    </button>
                    <button
                        class="
                            mx-1
                            rounded-sm
                            border border-yellow-400
                            px-2
                            transition
                            hover:opacity-40
                        "
                        @click="clickFilter('progress')"
                    >
                        Progress {{ countProgress }}
                    </button>
                    <button
                        class="
                            mx-1
                            rounded-sm
                            border border-pink-400
                            px-2
                            transition
                            hover:opacity-40
                        "
                        @click="clickFilter('done')"
                    >
                        Done {{ countDone }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoList: [],
            filter: 'all',
            // isEdit: -1,
            // content: '',
        }
    },
    computed: {
        filterTodos() {
            return this.$store.getters[`todos/${this.filter}`]
        },
        total() {
            return this.$store.getters['todos/all'].length
        },
        countProgress() {
            return this.$store.getters['todos/progress'].length
        },
        countDone() {
            return this.$store.getters['todos/done'].length
        },
    },
    mounted() {
        this.$store.dispatch('todos/getTodoList')
    },
    methods: {
        clickFilter($value = '') {
            this.filter = $value
        },
        addTodo(e) {
            if (e.target.value.length) {
                this.$store.dispatch('todos/addTodo', e.target.value)
                e.target.value = ''
            }
        },
    },
}
</script>
