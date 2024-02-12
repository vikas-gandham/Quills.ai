import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
function DemoButton() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const HoverButton = () => {
  //   return (
  //     <div className="border px-2 py-2 w-[max-content] rounded-lg bg-slate-600 hover:bg-[#8a2be2]">
  //       <FaArrowRight size="0.8rem" color="white" />
  //     </div>
  //   );
  // };

  return (
    <button className="flex items-center justify-center gap-4 bg-black text-white px-6 py-3 rounded-lg">
      <span className="text-[18px] leading-[24px] font-[500]">Book a Demo</span>

      <a
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
      // className={isHovering?{"border px-2 py-2 w-[max-content] rounded-lg bg-indigo-500 "}:{"border px-2 py-2 w-[max-content] rounded-lg bg-slate-700 "}}
      >
        <FaArrowRight size="0.8rem" color="white" />
      </a>
    </button>
  );
}
export default DemoButton;
