import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import {
  FaTruck,
  FaHotel,
  FaSuitcase,
  FaDatabase,
  FaCube,
  FaDollarSign,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { FaRegHospital, FaBarsProgress } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const industryList = [
    {
      name: "Life Sciences",
      pathname: "/solutions/industry/life-sciences",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <AiOutlineCreditCard />,
    },
    {
      name: "BFSI",
      pathname: "/solutions/industry/bfsi",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <HiOutlineBuildingLibrary />,
    },
    {
      name: "Retail & E-commerce",
      pathname: "/solutions/industry/retail-ecommerce",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <RiShoppingBasketLine />,
    },
    {
      name: "Manufacturing & Logistics",
      pathname: "/solutions/industry/manufacturing-logistics",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaTruck />,
    },
    {
      name: "Healthcare & Life Sciences",
      pathname: "/solutions/industry/healthcare-life-sciences",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaRegHospital />,
    },
    {
      name: "Hospitality",
      pathname: "/solutions/industry/hospitality",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaHotel />,
    },
  ];

  const roleList = [
    {
      name: "Business Leader",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaSuitcase />,
    },
    {
      name: "Data Leader",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaDatabase />,
    },
    {
      name: " Analyst",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <GoGraph />,
    },
    {
      name: "Product Leader",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaCube />,
    },
    {
      name: "Developer",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <IoCodeSlashSharp />,
    },
    {
      name: "Marketing and Sales Leaders",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaDollarSign />,
    },
    {
      name: "Venture Capitalists",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaHandHoldingUsd />,
    },
    {
      name: "Operations",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <IoMdSettings />,
    },
    {
      name: "IT Infrastructure",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer flex items-center gap-3",
      icon: <FaBarsProgress />,
    },
  ];

  const [isHovering, setIsHovering] = useState(false);
  const [top, setTop] = useState(true);
  const [toggle, setToggle] = useState(false);

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
    setToggle(false);
  };

  const handleLoginClick = () => {
    window.open("/login", "_blank");
  };
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    setToggle(!toggle);
  };
  const handleExitClick = () => {
    setToggle(!toggle);
  };
  const ref = useRef(null);
  const handleClick = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const industry = industryList.map((item, index) => (
    <Link
      key={index}
      onClick={handleMouseOut}
      className={item.classname}
      to={item.pathname}
    >
      {item.icon} {item.name}
    </Link>
  ));

  const role = roleList.map((item, index) => (
    <Link
      key={index}
      onClick={handleMouseOut}
      className={item.classname}
      to={item.pathname}
    >
      {item.icon} {item.name}
    </Link>
  ));

  const hoverText = () => {
    return (
      <div className=" p-8 border rounded-md bg-white shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 col-span-3  absolute lg:-translate-x-[30%] top-10 min-w-[max-content] shadow-sky-100  translate-y-12  ">
        <div className=" space-y-8">
          <h1 className="font-semibold text-lg">By Industry</h1>
          <div className=" space-y-3 flex flex-col gap-1 cursor-pointer">
            {industry}
          </div>
        </div>
        <div className=" space-y-8">
          <h1 className="font-semibold text-lg">By Role</h1>
          <div className=" space-y-3 flex flex-col gap-1 cursor-pointer">
            {role}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      onMouseLeave={handleMouseOut}
      className={`w-full fixed mx-auto top-0 right-0 left-0 z-20 pt-[5px] lg:mb-[20px]  ${
        !top && `border-[#eaeaea] border-b bg-white shadow-md `
      }`}
    >
      <div
        className={`lg:flex lg:items-center lg:justify-between  w-full p-8 px-20   ${
          toggle && `bg-slate-600 lg:bg-white `
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="h-[34px]">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[34px] flex items-center justify-center gap-1"
            />
          </Link>
          <span
            onClick={() => setToggle(!toggle)}
            className="lg:opacity-0 cursor-pointer"
          >
            {toggle ? (
              <RxCross2 color="white" size="2rem" />
            ) : (
              <IoMdMenu size="2rem" />
            )}
          </span>
        </div>

        <div className="text-base-8">
          {isHovering && hoverText()}
          <ul
            className={`lg:flex lg:items-center gap-6 lg:text-black mx-auto py-3 bg-slate-600 lg:bg-white w-auto  lg:opacity-100 pl-8 text-white inline-block  ${
              toggle
                ? `opacity-100`
                : `hidden absolute transition-all lg:sticky  `
            } `}
          >
            <li className="mx-4 my-6 lg:my-0">
              <Link onClick={handleLogoClick} to="/features">
                Features
              </Link>
            </li>
            <li className="mx-4 my-6 lg:my-0">
              <Link onClick={handleClick} to="/chatbot">
                Chatbot
              </Link>
            </li>

            <li className="mx-4 my-6 lg:my-0">
              <Link
                onMouseOver={handleMouseOver}
                className="flex items-center justify-start  gap-1"
              >
                Solutions
                <IoIosArrowDown />
              </Link>
            </li>

            <li className="mx-4 my-6 lg:my-0">
              <Link onClick={handleExitClick} to="/contact">
                Contact us
              </Link>
            </li>
            <div className="flex items-center  gap-2 ">
              <Button to="/login" type="bgnone" onclick="">
                Log in
              </Button>
              <button
                className="px-5 py-2.5 inline-block text-sm bg-none outline-blue-500 font-semibold text-blue-500 transition-colors duration-300 focus:outline-none hover:text-black rounded-lg border-b-2 border border-blue-400 text-[14px] opacity-0 lg:opacity-100"
                onClick={handleLoginClick}
              >
                Sign up
              </button>
              <Button onClick={handleExitClick} to="/bookdemo" type="primary">
                Book a Demo
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
