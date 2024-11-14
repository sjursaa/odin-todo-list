import "./styles.css";
import { TodoItem } from "./todo.js";
import { Project } from "./project.js";

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
const defaultProject = new Project("default", [task1, task2]);

console.log("hello");
console.log(task1);
console.log(task2);
console.log(defaultProject);
