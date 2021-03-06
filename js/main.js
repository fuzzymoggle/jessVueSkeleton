// Fucked up code 
//let app = new Vue({
//     el: "#vueApp",
//     data: {
//         welcomeMessage: 'My To Do List',
//         lists:[{id1: 'fhskda'}],
//         newItem: '',

//     },
//     methods: {
//         addItem: function(){
//             let id = this.lists.length + 1
//             for(let i = 0; i < this.list.length; i++){
//                 if (this.newItem !== ''){
//                     const newList = {is:is,item:this.newItem}
//                     this.list.push(newList)
//                     this.newItem = ''
//             }

//             }
//         }
//     },
//     mounted() {

//     },
// });

// Original code
// let app = new Vue({
//     el: "#vueApp",
//     data: {
//         welcomeMessage: 'Hello World!'
//     },
//     methods: {

//     },
//     mounted() {

//     },
// });

var STORAGE_KEY = 'vueApp-todo-12345'
var todoStorage = {
    fetch: function () {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        return todos;
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
}


let app = new Vue({
    el: "#vueApp",
    data: {
        welcomeMessage: 'My To Do List',
        // todos: [],
        todos: todoStorage.fetch(),
        addTodoMessage: '',
    },

    watch: {
        todos: {
            handler: function(todos) {
                todoStorage.save(todos);
            }
        }
    },

    methods: {
        addTodo(event){
            const text = event.target.value
            this.todos.push({text, done: false, id: Date.now()})
            // event.target.value = ''
            this.addTodoMessage = ''
        },

        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },

        check(todo){
            todo.done = !todo.done
        },

    },
    mounted() {

    },
});
