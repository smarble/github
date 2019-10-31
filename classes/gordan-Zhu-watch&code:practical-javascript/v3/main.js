console.log("JavaScript Ready");

var todoList =  {
    //EMPTY ARRAY OF OBJECTS THAT WE WILL ADD, CHANGE, OR SUBTRACT FROM
    todos: [],

    // FUNCTION TO DISPLAY TODOS
    displayTodos: function (){
        console.log('My todos:', this.todos)
        },

    // FUNCTION TO ADD A TODO OBJECT
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        }); 
        this.displayTodos();
        },

    // FUNCTION TO CHANGE A TODO OBJECT
    changeTodo: function (position, newValue){
        this.todos[position]= newValue; 
        this.displayTodos();
        },

    // FUNCTION TO DELETE A TODO OBJECT
    deleteTodo: function (position){
        this.todos.splice(position, 1); 
        this.displayTodos();
        }
};

todoList.displayTodos();
todoList.addTodo("wash the dog");
todoList.changeTodo(3, "changed todo");
todoList.deleteTodo(3);

