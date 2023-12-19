import React from "react";
import { useForm } from "../hooks/useForm";
import { TaskList } from "./TaskList";

export const Task = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="¿agregar tarea o actividad?"
      />

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
