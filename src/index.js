import "./styles.css";
import { TodoItem } from "./todo.js";
import { Project } from "./project.js";
import { ProjectPage } from "./projectView.js";

// main stuff
const defaultProject = new Project("Inbox", []);
loadTasks();

function populateExampleData() {
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

  // TODO: add defaultProject to localStorage
  // localStorage.setItem(0, defaultProject.toString());
  localStorage.setItem(localStorage.length + 1, task1);
  localStorage.setItem(localStorage.length + 1, task2);
  localStorage.setItem(localStorage.length + 1, task3);
  // const project2 = new Project("project2", [task1, task2]);
  defaultProject.listOfTasks.push(task1);
  defaultProject.listOfTasks.push(task2);
  defaultProject.listOfTasks.push(task3);

  new ProjectPage(defaultProject);
}

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

document.addEventListener("keypress", function onEvent(event) {
  if (event.key == "l") {
    console.log("l pressed");
    loadTasks();
  }
});

document.addEventListener("keypress", function onEvent(event) {
  if (event.key == "p") {
    console.log("p pressed");
    populateExampleData();
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
  const taskName = prompt("Please type ur shit");
  console.log(taskName);
  defaultProject.listOfTasks.push(
    new TodoItem(taskName, "unspecified", "today", "mid"),
  );
  console.log(defaultProject.listOfTasks);
  new ProjectPage(defaultProject);

  const string = taskName + ", unspecified, today, mid, " + defaultProject.name;
  const index = localStorage.length + 1;
  localStorage.setItem(index, string);
}

function deleteTask() {
  // TODO: update to pop specific/focused task
  console.log("deleteButton clicked");
  const index = defaultProject.listOfTasks.length;
  defaultProject.listOfTasks.pop();
  new ProjectPage(defaultProject);
  localStorage.removeItem(index);
}

function loadTasks() {
  // TODO: Instantiate objects from here
  for (let i = 1; i <= localStorage.length; i++) {
    const element = localStorage.getItem(i);
    console.log(i + element);
    const taskName = element.split(",")[0];
    console.log(taskName);
    defaultProject.listOfTasks.push(
      new TodoItem(taskName, "unspecified", "today", "mid"),
    );
    console.log(defaultProject.listOfTasks);
    // new ProjectPage(defaultProject);
  }
  new ProjectPage(defaultProject);

  const projectName = "inbox";
  // TODO: create separate function for loading all projects
  // TODO: load all tasks where projectName === inbox;
}
