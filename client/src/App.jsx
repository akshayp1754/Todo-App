import Login from "./components/Login";
import { Route, Routes } from "react-router";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Navbar from "./layout/Navbar";
import { useEffect } from "react";
import { ValidateUser } from "./redux/action/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ValidateUser());
  }, []);
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
