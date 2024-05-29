
// Create an array to store the todo items
let todoItems = [];

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),

    };

    todoItems.push(todo);
    console.log(todoItems);
}

// Select the form selector
const form = document.querySelector('.js-form');
// Add a submit event listener
form.addEventListener('submit', event => {
    // Prevent page refresh on form submission
    event.preventDefault();
  // select the text input
  const input = document.querySelector('.js-todo-input');

  //Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
      addTodo(text);
      input.value = '';
      input.focus();

  }

});


