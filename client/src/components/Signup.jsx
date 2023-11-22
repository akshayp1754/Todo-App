import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/action/auth";
import { Navigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = Navigate()

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(signupUser({email, name, password}))
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-gray-900 mb-5 border border-white mt-5 w-full p-2 rounded"
          placeholder="enter name"
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-gray-900 mb-5 border border-white mt-5 w-full p-2 rounded"
          placeholder="enter email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-gray-900 w-full p-2 border border-white rounded"
          placeholder="enter password"
        />
        <button className="bg-blue-500 text-white p-2 mt-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
