import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function EditTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label="Editar tu TODO"
      submitText="Editar"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export { EditTodoPage };