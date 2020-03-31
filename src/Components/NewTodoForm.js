import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewToDoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <FormContainer>
      <NewTodoInput
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Type Your new todo here"
      />
      <NewTodoButton>Create Todo</NewTodoButton>
    </FormContainer>
  );
};

export default NewToDoForm;
