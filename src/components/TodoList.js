import React from "react";
import styled from "styled-components/native";
import TodoItem from "./TodoItem";
import { ScrollView } from "react-native-gesture-handler";

import { useSelector } from "react-redux";

export default function TodoList({ onToggle, onRemove }) {
  const todos = useSelector((store) => store.todos);

  return (
    <ScrollView>
      {todos.map((el) => (
        <TodoItem todo={el} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ScrollView>
  );
}
