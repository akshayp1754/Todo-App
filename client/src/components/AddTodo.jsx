import React, { useState, useEffect } from "react";
import { getTasks, postTask } from "../redux/action/task";
import { useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { ValidateUser } from "../redux/action/auth";

function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    try {
      e.preventDefault();
      if (todo === "" || todo === null) {
        alert("Enter todo ");
      } else {
        dispatch(postTask({ todo }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTodo("");
    }
  };
  return (
    <form onSubmit={handleAdd} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
