// DOM nodes
const todo = document.getElementById( 'todo' );
const btnAddTodo = document.getElementById( 'btn-add-todo' );
const todoList = document.getElementById( 'todo-list' );

btnAddTodo.addEventListener( 'click', function( event ) {
    const task = todo.value;
    
    let todos = localStorage.getItem( 'todos' );

    if( todos === null ) {
        todos = [];
    } else {
        todos = JSON.parse( todos );
    }

    todos.push( task );

    localStorage.setItem( 'todos', JSON.stringify( todos ) );

    displayTodos();
});

function displayTodos() {
    let todos = localStorage.getItem( 'todos' );

    if( todos === null ) {
        todos = [];
    } else {
        todos = JSON.parse( todos );
    }

    todoList.innerHTML = ''; // clear the ul

    todos.forEach(
        function( todo ) {
            todoList.innerHTML += `
                <li>${todo}</li>
            `;
        }
    );
}