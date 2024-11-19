export function ProjectPage(project) {
  this.project = project;

  const page = document.querySelector("#content");
  page.replaceChildren();
  const h1 = document.createElement("h1");
  h1.innerText = this.project.name;
  const table = document.createElement("table");
  let row = table.insertRow(0);

  let cell1 = row.insertCell(0);
  cell1.setAttribute("width", "400px");
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerText = "task";
  cell2.innerText = "dueDate";
  cell3.innerText = "priority";

  let taskList = this.project.listOfTasks;
  console.log(taskList);
  console.log("elements dropping");
  page.appendChild(h1);
  page.appendChild(table);
  // TODO: Display contents in a table instead of as strings
  // TODO: Add ability to move todo to different project (elsewhere)
  // TODO: Add checkbutton to mark as complete
  // TODO: Add ability to update priority (low/mid/high)
  // TODO: Add ability to change dueDate
  // TODO: Add to click on a todo, for more details
  for (let i = 0; i < taskList.length; i++) {
    const element = taskList[i];

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerText = element.title;
    cell2.innerText = element.dueDate;
    cell3.innerText = element.priority;
  }

  console.log("appending stuff");
  console.log(this.project.name);
  console.log(this.project.listOfTasks);
  // page.appendChild();
}
