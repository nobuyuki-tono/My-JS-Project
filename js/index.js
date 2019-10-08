const addBtn = document.getElementById("btn-add");
const input = document.getElementById("input");

function addItemtoLocalstrage() {
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
  document.getElementById("list").appendChild(item);
}

function addTaskToHTML() {
  var addTask = input;

  var item = document.createElement("li");
  item.className = "item-list";
  item.innerHTML = addTask;
  document.getElementById("list").appendChild(item);
}

// add Event
addBtn.addEventListener("click", addItemtoLocalstrage);
