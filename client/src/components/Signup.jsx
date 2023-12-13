import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/action/auth";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const navigate = navigate()

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(signupUser({ firstName, lastName, email, password }));
      // navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-gray-900 p-6 rounded-lg shadow-md"
    //   >
    //     <input
    //       type="text"
    //       name="firstName"
    //       onChange={(e) => {
    //         setFirstName(e.target.value);
    //       }}
    //       className="bg-gray-900 mb-5 border border-white mt-5 w-full p-2 rounded"
    //       placeholder="John"
    //     />
    //     <input
    //       type="text"
    //       name="lastName"
    //       onChange={(e) => {
    //         setLastName(e.target.value);
    //       }}
    //       className="bg-gray-900 mb-5 border border-white mt-5 w-full p-2 rounded"
    //       placeholder="Doe"
    //     />
    //     <input
    //       type="text"
    //       name="email"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //       className="bg-gray-900 mb-5 border border-white mt-5 w-full p-2 rounded"
    //       placeholder="enter email"
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //       className="bg-gray-900 w-full p-2 border border-white rounded"
    //       placeholder="enter password"
    //     />
    //     <button className="bg-blue-500 text-white p-2 mt-4 rounded">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          PinterestLike
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up for an account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="John"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                style={{
                  background: "#ffbf00",
                }}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account ?{" "}
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
