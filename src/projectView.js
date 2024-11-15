export function ProjectPage(project) {
  this.project = project;
  const page = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = this.project.name;
  const p = document.createElement("p");
  p.innerText = this.project.listOfTasks;
  page.appendChild(h1);
  page.appendChild(p);

  const name = this.project.name;

  // page.appendChild(name);

  console.log("appending stuff");
  console.log(this.project.name);
  console.log(this.project.listOfTasks);
  // page.appendChild();
}
