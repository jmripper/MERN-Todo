import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo } from "./actions";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const ToDoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <ListWrapper>
    <NewTodoForm />
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </ListWrapper>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
