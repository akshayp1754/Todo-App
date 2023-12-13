import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/action/task";
import Todo from "./Todo";
import { useNavigate } from "react-router-dom";
import Private from "../hoc/Private";

function Home() {
  const token = useSelector((state) => state.authReducer.token);
  const todos = useSelector((state) => state.taskReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(getTasks());
    }
  }, [token]);

  return (
    <div>
      <div className=" min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos ? (
              todos.map((todo) => (
                <div key={todo._id} className="w-full ">
                  <Todo todo={todo} />
                </div>
              ))
            ) : (
              <> Loading...</>
            )}
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Private(Home)
export default Home
