export function ProjectPage(project) {
  this.project = project;

  const page = document.querySelector("#content");
  page.replaceChildren();
  const h1 = document.createElement("h1");
  h1.innerText = this.project.name;
  const p = document.createElement("p");

  let taskList = this.project.listOfTasks;
  console.log(taskList);
  console.log("elements dropping");
  let string;
  page.appendChild(h1);
  // TODO: Display contents in a table instead of as strings
  // TODO: Add ability to move todo to different project
  // TODO: Add checkbutton to mark as complete
  // TODO: Add ability to update priority (low/mid/high)
  // TODO: Add ability to change dueDate
  // TODO: Add to click on a todo, for more details
  for (let i = 0; i < taskList.length; i++) {
    const element = taskList[i];
    p.innerText += element.title;
    p.innerText += ", ";
    p.innerText += element.description;
    p.innerText += ", ";
    p.innerText += element.dueDate;
    p.innerText += ", ";
    p.innerText += element.priority;
    p.innerText += "\n";
    page.appendChild(p);
  }

  console.log("appending stuff");
  console.log(this.project.name);
  console.log(this.project.listOfTasks);
  // page.appendChild();
}
