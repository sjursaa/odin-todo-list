import "./styles.css";
import { TodoItem } from "./todo.js";
import { Project } from "./project.js";
import { ProjectPage } from "./projectView.js";

// main stuff
const task1 = new TodoItem(
  "mow lawn",
  "yardwork type thing",
  "tomorrow",
  "high",
);
const task2 = new TodoItem(
  "mow lawn2",
  "again but this time better",
  "next week",
  "low",
);
const task3 = new TodoItem(
  "mow lawn3",
  "again but this time better",
  "next year",
  "low",
);

const defaultProject = new Project("Inbox", [task1, task2, task3]);
const project2 = new Project("project2", [task1, task2]);

console.log("hello");
console.log(task1);
console.log(task2);
console.log(defaultProject);

console.log(defaultProject.name);
console.log(defaultProject.listOfTasks);

const currentProject = new ProjectPage(defaultProject);
console.log(currentProject);

// EventListeners keystrokes
document.addEventListener("keypress", function onEvent(event) {
  if (event.key == "t") {
    console.log("t pressed");
    addTask();
  }
});

document.addEventListener("keypress", function onEvent(event) {
  if (event.key == "d") {
    console.log("d pressed");
    deleteTask();
  }
});

// EventListeners buttons
const todoButton = document.querySelector("#todo");
todoButton.onclick = () => {
  addTask();
};

const deleteButton = document.querySelector("#delete");
deleteButton.onclick = () => {
  deleteTask();
};

// Functions
function addTask() {
  // TODO: update to make currentProject variable
  console.log("todoButton clicked");
  const taskName = prompt("Please type ur shit");
  console.log(taskName);
  defaultProject.listOfTasks.push(
    new TodoItem(taskName, "unspecified", "today", "mid"),
  );
  console.log(defaultProject.listOfTasks);
  new ProjectPage(defaultProject);
}

function deleteTask() {
  // TODO: update to pop specific/focused task
  console.log("deleteButton clicked");
  defaultProject.listOfTasks.pop();
  new ProjectPage(defaultProject);
}
