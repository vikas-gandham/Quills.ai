import { FaLinkedin } from "react-icons/fa";
import ShowHidePassword from "../features/ShowHidePassword";
import { useState } from "react";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [action, setAction] = useState("signIn");
  const signIn = () => {
    setAction("signIn");
  };
  const createAccount = () => {
    setAction("createAccount");
  };
  return (
    <div className="mx-[33%] mt-0 pb-40 pt-0 px-20 flex flex-col justify-center item-center">
      <div className="flex justify-center">
        <img
          src="/quills5.png"
          alt="logo"
          className="w-[180px] h-[180px] p-8"
        />
      </div>
      <div className="border shadow-md p-8 space-y-8">
        <div className="flex items-center justify-around ">
          <button
            className={`font-semibold hover:text-[#008b8b] ${
              action === "signIn"
                ? `underline underline-offset-4 text-decoration-color: #008b8b text-decoration-thickness: 2px`
                : ``
            }`}
            onClick={() => {
              setAction(signIn);
            }}
          >
            Sign In
          </button>
          <button
            className={`font-semibold hover:text-[#008b8b] ${
              action === "createAccount"
                ? `underline underline-offset-4 text-decoration-color: #008b8b text-decoration-thickness: 2px`
                : ``
            }`}
            onClick={() => {
              setAction(createAccount);
            }}
          >
            Create Account
          </button>
        </div>

        {action === "createAccount" ? (
          <div></div>
        ) : (
          <div className="flex flex-col gap-4">
            <button className="border rounded-sm p-2 text-white bg-blue-600 flex items-center justify-center gap-2">
              <FaLinkedin />
              Login with LinkedIn
            </button>
            <h1 className="text-center">OR</h1>
          </div>
        )}

        <div className=" flex flex-col gap-4 ">
          <h1>Email</h1>
          <input
            className="border border-slate-400 rounded-sm p-2 focus:outline-none focus:border-[#008b8b]"
            placeholder="Enter your Email"
          />
          {action === "signIn" ? (
            <div className=" flex flex-col gap-4 ">
              <h1>Password</h1>

              <ShowHidePassword />
              <button className="border p-2 text-white bg-[#008b8b]  focus:outline-none focus:border-[#008b8b]">
                Sign In
              </button>
            </div>
          ) : (
            <div className=" flex flex-col gap-4 ">
              <h1>Password</h1>
              <ShowHidePassword />
              <h1>Confirm Password</h1>
              <ShowHidePassword />
              <button className="border p-2 text-white bg-[#008b8b]  focus:outline-none focus:border-[#008b8b]">
                Create Account
              </button>
            </div>
          )}

          <h1 className="text-center pt-[10px] text-[#008b8b]">
            Reset your password
          </h1>
        </div>
      </div>
      <h1 className="text-center pt-[20px]">© All Rights Reserved</h1>
    </div>
  );
}
export default Login;
