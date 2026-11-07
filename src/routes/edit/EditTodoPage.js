import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);

  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(id);

    return (
      <TodoForm
        label="Editar tu TODO"
        defaultTodoText={todo.text}
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}
      />
    );
  }
}

export { EditTodoPage };