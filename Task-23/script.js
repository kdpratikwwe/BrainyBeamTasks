let todolist = [];

function addtask() {

  let tsk = {
    text: document.getElementById("task").value
  };

  todolist.push(tsk);
  console.log(todolist);
  displaytasks();
}


function displaytasks() {
  let list = document.getElementById("taskList");

  // clear old tasks
  list.innerHTML = "";

  // show each task
  todolist.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
}
