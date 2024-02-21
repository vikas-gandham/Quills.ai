import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { useState, useEffect } from "react";
import HoverText from "../features/HoverText";

function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleLoginClick = () => {
    window.open("/login", "_blank");
  };

  return (
    <header
      onMouseLeave={handleMouseOut}
      className={`w-full fixed mx-auto top-0 right-0 left-0 z-20 pt-[5px] ${
        !top && `border-[#eaeaea] border-b bg-white shadow-md`
      }`}
    >
      <div className="md:max-w-[80%] max-w-[95%] flex items-center justify-between dark:text-black mx-auto py-3">
        <Link to="/" className="h-[34px]">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[34px] flex items-center justify-center gap-1"
          />
        </Link>

        <div className="text-base-8">
          {isHovering && <HoverText />}
          <ul className="lg:flex items-center justify-between gap-6">
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/chatbot">Chatbot</Link>
            </li>

            <li
              onMouseOver={handleMouseOver}
              className="flex items-center justify-center gap-1"
            >
              Solutions
              <IoIosArrowDown />
            </li>

            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between gap-2">
          <Button to="/login" type="bgnone" onclick="">
            Log in
          </Button>
          <button
            className="px-5 py-2.5 inline-block text-sm bg-none outline-blue-500 font-semibold text-blue-500 transition-colors duration-300 focus:outline-none hover:text-black rounded-lg border-b-2 border border-blue-400 text-[14px]"
            onClick={handleLoginClick}
          >
            Sign up
          </button>
          <Button to="/bookdemo" type="primary">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
