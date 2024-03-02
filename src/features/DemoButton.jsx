import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
function DemoButton({ type }) {
  const [anchorColor, setAnchorColor] = useState(
    "border px-2 py-2 w-[max-content] rounded-lg bg-slate-700 "
  );
  // const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setAnchorColor("border px-2 py-2 w-[max-content] rounded-lg bg-indigo-500");
    // setIsHovering(true);
  };
  const handleMouseOut = () => {
    setAnchorColor(
      "border px-2 py-2 w-[max-content] rounded-lg bg-slate-700  "
    );
    // setIsHovering(false);
  };

  const styles = {
    primary:
      "flex items-center justify-center gap-4 bg-black text-white px-6 py-3 rounded-lg",
    secondary:
      "flex items-center justify-center gap-4 bg-yellow text-black px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white",
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={styles[type]}
    >
      <span className="text-[18px] leading-[24px] font-[500]">Book a Demo</span>

      {/* <a
        className={
          isHovering
            ? "border px-2 py-2 w-[max-content] rounded-lg bg-indigo-500"
            : "border px-2 py-2 w-[max-content] rounded-lg bg-slate-700 "
        }
      > */}

      <a className={anchorColor}>
        <FaArrowRight size="0.8rem" color="white" />
      </a>
    </button>
  );
}
export default DemoButton;
