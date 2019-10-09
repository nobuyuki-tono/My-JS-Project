const addBtn = document.getElementById("btn-add");
const input = document.getElementById("input");

function addItemtoLocalstrage() {
  if (input.value == "") {
    alert("Add a task");
  }

  var addedTask = input.value;
  // console.log(addedTask);
  localStorage.setItem("task", addedTask);
}

function loadLocalstrage() {
  var storedTask = localStorage.getItem("task");
  //var storedTask2 = JSON.parse(storedTask);
  var item = document.createElement("li");
  item.className = "item-list";
  item.innerHTML = storedTask;
  document.getElementById("list").appendChild(item); // add li to ul

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = "Delete Item";
  item.appendChild(deleteButton);
}

function addTaskToHTML() {
  var addTask = input;

  var item = document.createElement("li");
  item.className = "item-list";
  item.innerHTML = addTask;
  document.getElementById("list").appendChild(item);
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  document.getElementById("li").appendChild(deleteA);
}

// add Event
addBtn.addEventListener("click", addItemtoLocalstrage);
