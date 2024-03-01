import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Accordion({ title, answer }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" w-full flex-col flex gap-3 bg-white md:py-6 py-4 px-8 rounded-[30px] shadow-md">
      <button
        onClick={() => setToggle(!toggle)}
        className=" w-full flex items-center justify-between"
      >
        <h3 className=" md:text-[20px] text-[16px] w-[90%] leading-[20px] text-start md:leading-[30px] font-semibold">
          {title}
        </h3>
        {toggle ? (
          <span>
            <IoIosArrowUp />
          </span>
        ) : (
          <span>
            <IoIosArrowDown />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          toggle ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
        }`}
      >
        <p className="overflow-hidden text-start leading-6">{answer}</p>
      </div>
    </div>
  );
}
export default Accordion;
