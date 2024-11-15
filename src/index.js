import "./styles.css";
import { TodoItem } from "./todo.js";
import { Project } from "./project.js";
import { ProjectPage } from "./projectView.js";

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
const defaultProject = new Project("default", [task1, task2, task3]);
const project2 = new Project("project2", [task1, task2]);

console.log("hello");
console.log(task1);
console.log(task2);
console.log(defaultProject);

console.log(defaultProject.name);
console.log(defaultProject.listOfTasks);

const projectPage = new ProjectPage(defaultProject);
