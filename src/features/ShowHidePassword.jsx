import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

function ShowHidePassword() {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="flex items-center justify-between ">
      <input
        type={!isVisible ? "password" : "text"}
        className="border border-slate-400 rounded-sm p-2 grow  focus:outline-none focus:border-[#008b8b] "
        placeholder="Enter your Password"
      />
      <span
        className="border border-slate-400 rounded-sm px-4 py-3 hover:border-[#008b8b] cursor-pointer"
        onClick={toggle}
      >
        {isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
      </span>
    </div>
  );
}
export default ShowHidePassword;
