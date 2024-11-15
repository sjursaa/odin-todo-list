export function ProjectPage(project) {
  this.project = project;

  const page = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = this.project.name;
  const p = document.createElement("p");

  let taskList = this.project.listOfTasks;
  console.log(taskList);
  console.log("elements dropping");
  let string;
  page.appendChild(h1);
  // TODO: Fix so that each item in array is displayed
  taskList.forEach((element) => {
    string =
      element.title + element.description + element.dueDate + element.priority;

    p.innerText = string;
    page.appendChild(p);
    console.log(element.title);
    console.log(element.description);
    console.log(element.dueDate);
    console.log(element.priority);
  });

  console.log("appending stuff");
  console.log(this.project.name);
  console.log(this.project.listOfTasks);
  // page.appendChild();
}
