<template>
    <div>
        <section class="todoapp">
            <section class="main">
                <input class="toggle-all" type="checkbox" v-model="allDone">
                <h2>Hello world this is vue login page</h2>
                <p>{{title}}</p>
            </section>
        </section>
        <button>Share</button>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            title: 'hoi hoi roi roi'
        }
    },
    // computed: {
    //     remaining: function () {
    //         let remaining = 0;
    //         this.todos.forEach(element => {
    //             if (!element.completed) {
    //                 remaining++;
    //             }
    //         });
    //         return remaining;
    //     },
    //     allDone: {
    //         get: function () {
    //             return this.remaining === 0
    //         },
    //         set: function (value) {
    //             this.todos.forEach(function (todo) {
    //                 todo.completed = value
    //             })
    //         }
    //     }
    // },
    // filters: {
    //     pluralize: function (n) {
    //         return n === 1 ? 'item' : 'items'
    //     }
    // },
    // methods: {
    //     addTodo: function () {
    //         var value = this.newTodo && this.newTodo.trim()
    //         if (!value) {
    //             return
    //         }
    //         this.todos.push({
    //             id: this.todos.length+1,
    //             title: value,
    //             completed: false
    //         })
    //         this.newTodo = ''
    //     },
    //     removeTodo: function (todo) {
    //         this.todos.splice(this.todos.indexOf(todo), 1)
    //     },
    //     doneEdit: function (todo) {
    //         if (!this.editedTodo) {
    //             return
    //         }
    //         this.editedTodo = null
    //         todo.title = todo.title.trim()
    //         if (!todo.title) {
    //             this.removeTodo(todo)
    //         }
    //     },
    //     cancelEdit: function (todo) {
    //         this.editedTodo = null
    //         todo.title = this.beforeEditCache
    //     },
    //     removeCompleted: function () {
    //         this.todos = this.todos.filter(function(todo) {
    //             return !todo.completed;
    //         })
    //     },
    //     shareTodos: function() {
    //         axios.post("/todo/share", this.todos)
    //             .then(function(response) {
    //                 window.location = response.data.link;
    //             });
    //     }
    // },
    // directives: {
    //     'todo-focus': function (el, binding) {
    //         if (binding.value) {
    //             el.focus()
    //         }
    //     }
    // },
    // watch: {
    //     todos: {
    //         handler: function(todos) {
    //             this.showFooter = todos.length > 0;
    //             axios.post(`/todo/update`, todos);
    //         },
    //         deep: true
    //     }
    // }
}
</script>