import { Link } from "react-router-dom";
import { useState } from "react";
function Menu() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const HoverText = () => {
    return (
      <div className=" p-4 border rounded-md bg-white shadow-md grid grid-cols-3 col-span-3 absolute left-[50%] -translate-x-[50%] top-10 min-w-[max-content] shadow-sky-100  translate-y-4  ">
        Hovering right meow!
        <span role="img" aria-label="cat">
          🐱
        </span>
      </div>
    );
  };

  return (
    <div className="text-base-8">
      {isHovering && <HoverText />}
      <ul className="lg:flex items-center justify-between gap-5">
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link>
        </li>

        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Solutions
        </li>

        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
