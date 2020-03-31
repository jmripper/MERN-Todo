import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, markTodoAsCompleted } from "./actions";
import { loadTodos, removeTodoRequest } from "./thunks";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const ToDoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
