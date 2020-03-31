import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const ToDoList = ({ todos = [] }) => (
  <ListWrapper>
    <NewTodoForm />
    {todos.map(todo => (
      <TodoListItem todo={todo} />
    ))}
  </ListWrapper>
);

export default ToDoList;
