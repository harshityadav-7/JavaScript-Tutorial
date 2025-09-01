const todoList =['make dinner', 'wash dishes'];//empty array
renderTodoList();
function renderTodoList(){
  let todoListHTML='';
  for(let index=0; index<todoList.length; index++){
    const todo=todoList[index];
    const html =`<p>${todo}</p>`;
    todoListHTML+=html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);

  console.log(todoList);

  inputElement.value='';

  renderTodoList();
}