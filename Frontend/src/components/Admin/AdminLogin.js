import React, { useRef } from "react";
import Header from "../Header";

const AdminLogin = () => {
  const username = useRef();
  const password = useRef();
  const handlesubmitform = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/v1/admins/login";

    const data = {
      username: username.current.value,
      Password: password.current.value,
    };

    const userDetails = JSON.stringify(data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userDetails,
    });
    const data2 = await response.json();
    if (response.ok === true) {
      console.log(data2);
    } else {
      console.log(data2);
    }
  };
  return (
    <div>
      <Header />
      <div className=" flex justify-center items-center  bg-violet-500 h-screen">
        <div className="flex bg-white shadow-2xl h-[400px] w-[700px] ">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
              alt="this is login page logo"
              className="h-[400px] w-[400px]"
            />
          </div>
          <form className=" flex flex-col mt-10" onSubmit={handlesubmitform}>
            <h1 className="text-2xl text-violet-600  font-bold ml-6">
              Admin Login Page
            </h1>
            <label className="mt-3 ml-5 px-1 text-lg">Email address</label>
            <input
              type="text"
              placeholder="Enter Email address"
              className="mt-2 ml-5 mr-5 border-2  px-3 text-md pt-1 border-gray-500 rounded-lg h-9"
            />
            <label className="mt-2 ml-5  px-1 text-lg">Password</label>
            <input
              type="text"
              ref={password}
              placeholder="Enter Password"
              className="mt-2 ml-5 mr-5 border-2 pt-1 border-gray-500 text-md rounded-lg h-9  px-3"
            />
            <button className=" mt-6 ml-5 text-center text-white h-[34px]  bg-violet-500 mr-5 rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
