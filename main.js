//Javascript Document
//SELECT ELEMENTS AND ASSIGN THEM TO VARS
var addItem = document.getElementById('new-task');
var addButton = document.getElementById('addTask');
var undoneTask = document.getElementById("list");
var doneTask =  document.getElementById("taskdone");
var createNewTask = function(task){
    
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label"); 

  label.innerText = task;

  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

var addTask = function(){
  var listItem = createNewTask(addItem.value);
  undoneTask.appendChild(listItem);
  addItem.value="";
  tasknotdone(listItem, finished);
 
};

var finished = function(){
  var listItem = this.parentNode;
  var deleteBtn = document.getElementById('delete'); 
 deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  doneTask.appendChild(listItem);
  taskDone(listItem, deleteItem);
};
let y=document.getElementById('myaudio');
function sound(){
    y.play();
}
var tasknotdone = function(taskItem, checkClick){
  var check = taskItem.querySelector("input[type=checkbox]");
  check.onchange = checkClick;
    check.onclick=sound;
};

for(var i=0; i < undoneTask.children.length; i++) {
  tasknotdone(undoneTask.children[i], finished);
}
var deleteItem = function(){
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

var taskDone = function(taskItem, deletePress){
  var deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deletePress;
};

for(i=0; i < doneTask.children.length; i++) {
  taskDone(doneTask.children[i], deleteItem);
}
addButton.addEventListener("click", addTask);

 