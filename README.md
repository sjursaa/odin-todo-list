# Odin-Todo-list

the dreaded todo-list project

# Requirements

## 1. todos are going to be objects:

use factories or constructors/classes to generate them (decide)

## 2. Brainstorm properties

### minimum

- title
- description
- dueDate
- priority

### optional

- notes
- checklist

## 3. projects containing todo lists

making it possible to have separate todo lists for multiple projects/domains

## 4. Keep Application logic & DOM stuff separate

use console.log() only for testing application logic

## 5. Look of UI is optional

- Overview of all projects
- View all todos in per project (with some details)
- Expand a single todo to see all details
- Delete a todo

## 6. Look at other todo-list apps for inspiration

todoist
things
any.do
apple reminders (bonus)

## 7. Consider adding node packages with npm and webpack

date-fns is one that is suggested

## 8. Add support for web storage api

use localStorage for now

# TODO

- TODO: Rename todo -> task
- TODO: Split ProjectView into FocusedProjectView + GlobalProjectView
- TODO: Create alt. constructors for tasks/todos (taking fewer/more params)
- TODO: Create IndividualTaskView
- TODO: Add abiltiy to delete tasks
- TODO: Implement localStorage
- TODO: Create sidebar for listing all projects

# js filetree..

project.js // project object containing todos
todo.js // todo object

index.js // main site index (all projects??) (indexview??/main.js)
projectView.js // project view (individual focused project w/ todos)
todoView.js // todo view (individual focused todo)
