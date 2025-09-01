const todoList =[{name:'make dinner',
  dueDate:'2022-12-22'
}, {
  name:'wash dishes',
  dueDate:'2022-12-22'
}];

renderTodoList();
function renderTodoList(){
  let todoListHTML='';
  for(let index=0; index<todoList.length; index++){
    const todoObject=todoList[index];
    const {name, dueDate} = todoObject;
    const html =`
      <p>
        ${name} ${dueDate}
        <button onclick="
          todoList.splice(${index},1);
          renderTodoList();
        ">Delete</button>
      </p>
    `;
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