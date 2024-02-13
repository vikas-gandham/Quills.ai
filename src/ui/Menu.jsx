import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Menu() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const items1 = [
    "Life Sciences",
    "BFSI",
    "Retail & E-commerce",
    "Manufacturing & Logistics",
    "Healthcare & Life Sciences",
  ];
  const items2 = [
    "Business Leader",
    "Data Leader",
    " Analyst",
    "Product Leader",
    "Developer",
    "Marketing and Sales Leaders",
    "Venture Capitalists",
    "Operations",
    "IT Infrastructure",
  ];

  const industry = items1.map((item, index) => <li key={index}>{items1}</li>);
  const role = items2.map((item, index) => <li key={index}>{items2}</li>);

  const hoverText = () => {
    return (
      <div className=" p-4 border rounded-md bg-white shadow-md grid grid-cols-3 gap-10 col-span-3  absolute translate-x-[50%] top-10 min-w-[max-content] shadow-sky-100  translate-y-8  ">
        <div>
          <h1>By Industry</h1>
          <ul>{industry}</ul>
        </div>
        <div>
          <h1>By Role</h1>
          <ul>{role}</ul>
        </div>
      </div>
    );
  };

  return (
    <div className="text-base-8">
      {isHovering && hoverText}
      <ul className="lg:flex items-center justify-between gap-6">
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link>
        </li>

        <li
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
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
  );
}
export default Menu;
