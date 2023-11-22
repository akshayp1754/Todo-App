import React, { useState } from "react";
import { deleteTask, updateTask, updateTaskStatus } from "../redux/action/task";
import { useDispatch } from "react-redux";

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);
  const dispatch = useDispatch();

  const handleDelete = (todo_id) => {
    dispatch(deleteTask(todo_id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleToggleEdit = () => {
    if (todo.isCompleted) return;

    if (isEditing) {
      // Save the edited task
      dispatch(
        updateTask(todo._id, {
          todo: editedTodo,
        })
      );
    }

    setIsEditing((prev) => !prev);
  };

  const handleComplete = (todo_id) => {
    dispatch(updateTaskStatus(todo_id));
  };
  return (
    <>
      <div
        className={`flex flex-wrap border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        {/* <input type='checkbox' checked={todo.isCompleted} readOnly onClick={() => handleComplete(todo._id)}/>     */}
        <div className="completed ">
          {todo.isCompleted ? (
            <svg
              onClick={() => handleComplete(todo._id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-slate-500 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              onClick={() => handleComplete(todo._id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-500 hover:text-indigo-600 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
        <div
          className={`text-${
            todo.isCompleted ? "gray line-through" : "black"
          } font-semibold  dark:text-white text-black `}
        >
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
                className="w-full bg-transparent  border-none focus:outline-none"
              />
            </>
          ) : (
            todo.todo
          )}
        </div>

        <div className="flex justify-end  mt-1">
          <button
            className="inline-flex w-5 rounded-lg text-sm border-none justify-center items-center shrink-0 disabled:opacity-50"
            onClick={handleToggleEdit}
            disabled={todo.isCompleted}
          >
            {isEditing ? (
              "📁"
            ) : (
              <svg
                className=" w-4 h-4 fill-current text-gray-500 hover:text-blue-700 hover:cursor-pointer"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z"></path>
              </svg>
            )}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={() => handleDelete(todo._id)}
            className="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer remove-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Todo;
