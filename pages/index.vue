<template>
    <div>
        <h2 class="text-center text-4xl text-green-400">TODOS</h2>
        <div class="mt-8 w-1/3 mx-auto border border-green-400">
            <input
                type="text"
                placeholder="What need to be done?"
                class="border-b border-green-400 py-2 px-2 w-full text-xl"
            />
            <div class="p-4">
                <ul class="list-todos">
                    <li
                        v-for="todo in filterTodos"
                        :key="todo.id"
                        class="flex justify-between"
                    >
                        <span
                            class="text-xl"
                            :class="{
                                done: todo.isComplete,
                                hide: isEdit === todo.id,
                            }"
                        >
                            {{ todo.content }}
                        </span>
                        <!-- <input type="text" class="border-b border-blue-400 py-2 px-2 w-full text-xl" /> -->
                        <div>
                            <button
                                class="
                                    mx-1
                                    text-green-400
                                    transition
                                    hover:opacity-40
                                "
                            >
                                Edit
                            </button>
                            <button
                                class="
                                    mx-1
                                    text-red-400
                                    transition
                                    hover:opacity-40
                                "
                            >
                                Delete
                            </button>
                        </div>
                    </li>
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
                    >
                        All (1)
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
                    >
                        Progress (2)
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
                    >
                        Done (3)
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
            isEdit: -1,
            content: '',
        }
    },
    computed: {
        filterTodos() {
            return this.$store.getters[`todos/${this.filter}`]
        },
    },
    mounted() {
        this.$store.dispatch('todos/getTodoList')
    },
}
</script>
