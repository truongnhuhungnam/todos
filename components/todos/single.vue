<template>
    <li class="flex justify-between">
        <span
            class="text-xl"
            :class="{
                'line-through': isComplete,
            }"
        >
            {{ content }}
        </span>
        <!-- <input
            v-if="isEdit === todo.id"
            v-model="content"
            type="text"
            class="border border-blue-400 py-1 px-2 text-xl"
            @keydown.enter.stop="editTodo(todo)"
        /> -->
        <div>
            <button class="mx-1 text-green-400 transition hover:opacity-40">
                Edit
            </button>
            <button class="mx-1 text-red-400 transition hover:opacity-40">
                Delete
            </button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        isComplete: {
            type: Boolean,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
}
</script>
