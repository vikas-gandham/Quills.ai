import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function Login() {
  const initialValues = { email: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [action, setAction] = useState("signIn");
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const signIn = () => {
    setAction("signIn");
  };
  const createAccount = () => {
    setAction("createAccount");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password is required";
    } else if (values.confirmPassword.length < 4) {
      errors.confirmPassword = "Password must be more than 4 characters";
    } else if (values.confirmPassword.length > 10) {
      errors.confirmPassword = "Password cannot exceed more than 10 characters";
    } else if (values.Password !== values.confirmPassword) {
      errors.passwordNotMatching = "Password not matching";
    }
    return errors;
  };

  return (
    <div className="   relative grid grid-cols-2 ">
      <div className="   md:w-[500px] w-[350px] mx-[50%] lg:mx-[75%] flex flex-col justify-center item-center  ">
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
            <div className="flex flex-col gap-4 ">
              <button className="border rounded-sm p-2 text-white bg-blue-600 flex items-center justify-center gap-2">
                <FaLinkedin />
                Login with LinkedIn
              </button>
              <h1 className="text-center">OR</h1>
            </div>
          )}

          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : null}

          <div className=" flex flex-col gap-4 ">
            <form onSubmit={handleSubmit} className=" flex flex-col gap-6 ">
              <h1>Email</h1>
              <div className="space-y-1 flex flex-col">
                <input
                  type="text"
                  name="email"
                  value={formValues.email}
                  className={`border  rounded-sm p-2 grow  focus:outline-none focus:border-[#008b8b] ${
                    formErrors.email ? `border-red-500` : `border-slate-400`
                  } `}
                  placeholder="Enter your Email"
                  onChange={handleChange}
                />
                <p className="error">{formErrors.email}</p>
              </div>
              {action === "signIn" ? (
                <div className=" flex flex-col gap-4 ">
                  <h1>Password</h1>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between ">
                      <input
                        type={!isVisible ? "password" : "text"}
                        className={`border  rounded-sm p-2 grow  focus:outline-none focus:border-[#008b8b] ${
                          formErrors.password
                            ? `border-red-500`
                            : `border-slate-400`
                        } `}
                        name="password"
                        value={formValues.password}
                        placeholder="Enter your Password"
                        onChange={handleChange}
                      />
                      <span
                        className={`border  rounded-sm px-4 py-3 hover:border-[#008b8b] cursor-pointer ${
                          formErrors.password
                            ? `border-red-500`
                            : `border-slate-400`
                        }`}
                        onClick={toggle}
                      >
                        {isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </span>
                    </div>
                    <p className="error">{formErrors.password}</p>
                  </div>
                  <button className="border p-2 text-white bg-[#008b8b]  focus:outline-none focus:border-[#008b8b]">
                    Sign In
                  </button>
                </div>
              ) : (
                <div className=" flex flex-col gap-4 ">
                  <h1>Password</h1>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between ">
                      <input
                        type={!isVisible ? "password" : "text"}
                        className={`border  rounded-sm p-2 grow  focus:outline-none focus:border-[#008b8b] 
                      ${
                        formErrors.password
                          ? `border-red-500`
                          : `border-slate-400`
                      }
                      ${
                        formErrors.passwordNotMatching
                          ? `border-red-500`
                          : `border-slate-400`
                      }
                       `}
                        name="password"
                        value={formValues.password}
                        placeholder="Enter your Password"
                        onChange={handleChange}
                      />
                      <span
                        className={`border  rounded-sm px-4 py-3 hover:border-[#008b8b] cursor-pointer ${
                          formErrors.password
                            ? `border-red-500`
                            : `border-slate-400`
                        }
                      ${
                        formErrors.passwordNotMatching
                          ? `border-red-500`
                          : `border-slate-400`
                      }`}
                        onClick={toggle}
                      >
                        {isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </span>
                    </div>
                    <p className="error">{formErrors.password}</p>
                  </div>
                  <h1>Confirm Password</h1>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between ">
                      <input
                        type={!isVisible ? "password" : "text"}
                        className={`border  rounded-sm p-2 grow  focus:outline-none focus:border-[#008b8b] ${
                          formErrors.confirmPassword
                            ? `border-red-500`
                            : `border-slate-400`
                        }
                      ${
                        formErrors.passwordNotMatching
                          ? `border-red-500`
                          : `border-slate-400`
                      }`}
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        placeholder="Enter your Password"
                        onChange={handleChange}
                      />
                      <span
                        className={`border  rounded-sm px-4 py-3 hover:border-[#008b8b] cursor-pointer ${
                          formErrors.confirmPassword
                            ? `border-red-500`
                            : `border-slate-400`
                        }
                      ${
                        formErrors.passwordNotMatching
                          ? `border-red-500`
                          : `border-slate-400`
                      }`}
                        onClick={toggle}
                      >
                        {isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </span>
                    </div>
                    {formErrors.passwordNotMatching ? (
                      <p className="error">{formErrors.passwordNotMatching}</p>
                    ) : (
                      <p className="error">{formErrors.confirmPassword}</p>
                    )}
                  </div>

                  <button className="border p-2 text-white bg-[#008b8b]  focus:outline-none focus:border-[#008b8b]">
                    Create Account
                  </button>
                </div>
              )}
            </form>

            <h1 className="text-center pt-[10px] text-[#008b8b]">
              Reset your password
            </h1>
          </div>
        </div>
        <h1 className="text-center pt-[20px]">© All Rights Reserved</h1>
      </div>
    </div>
  );
}
export default Login;
