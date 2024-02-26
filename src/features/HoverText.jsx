import { Link } from "react-router-dom";
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

function HoverText() {
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

  const industry = industryList.map((item, index) => (
    <Link key={index} className={item.classname} to={item.pathname}>
      {item.icon} {item.name}
    </Link>
  ));

  const role = roleList.map((item, index) => (
    <Link key={index} className={item.classname} to={item.pathname}>
      {item.icon} {item.name}
    </Link>
  ));

  return (
    <div className=" p-8 border rounded-md bg-white shadow-md grid grid-cols-3 gap-20 col-span-3  absolute -translate-x-[30%] top-10 min-w-[max-content] shadow-sky-100  translate-y-6  ">
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
}
export default HoverText;
