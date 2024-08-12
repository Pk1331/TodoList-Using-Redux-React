# React-Redux Todo List

This project is a simple Todo List application built with React and Redux. It allows users to add, edit, and delete tasks. The state management is handled using Redux.

## Live Demo
You can view the live demo of the application [here](https://pk1331.github.io/TodoList-Using-Redux-React/)



![todolist_with-react_redux](https://github.com/user-attachments/assets/b90f9bfa-0c18-4d99-ab3a-61528a06d36b)


## Table of Contents

- Features
- Project Structure
- Installation
- Usage
- Code Explanation

## Features

- Add new todos
- Edit existing todos
- Delete todos
- State management with Redux

## Project Structure

```plaintext
mypro/
├── src/
│   ├── actions_creator.js       # Redux action creators
│   ├── App.js                   # Main app component
│   ├── Form.js                  # Form component for adding todos
│   ├── index.css                # Global styles
│   ├── index.js                 # Entry point for React
│   ├── store.js                 # Redux store and reducer
│   ├── Todolist.js              # Component for displaying list of todos
│   ├── Todo.js                  # Component for a single todo item
└── README.md                    # Project documentation
```
## Installation

#### 1. Clone the repository:

```bash
git clone https://github.com/your-username/react-redux-todo-list.git
cd react-redux-todo-list
```
#### 2. Install the dependencies:
``` bash
npm install
```
## Usage
#### 1. Start the development server:
``` bash
npm start
```
#### 2. Open your browser and navigate to http://localhost:3000 to view the application.
#### 3. Use the input field to add new todos. You can edit or delete existing todos.


## Code Explanation

### `store.js`

- The Redux store is created in this file using the `createStore` function.
- The `todoReducer` manages the state, which includes adding, editing, and deleting todos.
- The state consists of an array of todos and a `todoid` counter to uniquely identify each todo.

### `actions_creator.js`

- Contains action creators that define the actions for adding, editing, and deleting todos.
- The actions are dispatched from the components to trigger changes in the state.

### `Form.js`

- The `Form` component contains the input field where users can enter a new todo.
- When the "Add" button is clicked, the todo is dispatched to the store and added to the list.

### `Todolist.js`

- The `Todolist` component fetches the list of todos from the Redux store using the `useSelector` hook.
- It maps over the list and displays each todo using the `Todo` component.

### `Todo.js`

- The `Todo` component represents a single todo item.
- It handles the display, editing, and deletion of a todo.
- When in editing mode, the component shows an input field and a "Save" button to update the title of the todo.
- The "Delete" button removes the todo from the list.
- The component uses local state to manage the editing mode and the updated title.
- Redux actions `updateTodo` and `deleteTodo` are dispatched to update or remove the todo from the global state.



