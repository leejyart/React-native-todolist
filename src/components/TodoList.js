import React from "react";
import styled from "styled-components/native";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ onToggle, onRemove }) {
  const todos = useSelector((store) => store.todos);

  return (
    <ListWrapper>
      {todos.map((el) => (
        <TodoItem todo={el} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.View`
  margin: 50px 16px;
`;
