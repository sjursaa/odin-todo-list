// TODO: add notes, and checklist property to object
// TODO: add ability to move todoItem from project to project (project responsibiltiy probz)
export function TodoItem(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.getObjectAsString = function() {
    return (
      this.title +
      ", " +
      this.description +
      ", " +
      this.dueDate +
      ", " +
      this.priority
    );
  };
}
