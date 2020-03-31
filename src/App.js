import React from "react";
import { hot } from "react-hot-loader";
import ToDoList from "./Components/TodoList";

const App = () => (
  <>
    <ToDoList />
  </>
);

export default hot(module)(App);
