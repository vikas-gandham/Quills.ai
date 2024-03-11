import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  const industryList = [
    {
      name: "Life Sciences",
      pathname: "/solutions/industry/life-sciences",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "BFSI",
      pathname: "/solutions/industry/bfsi",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Retail & E-commerce",
      pathname: "/solutions/industry/retail-ecommerce",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Manufacturing & Logistics",
      pathname: "/solutions/industry/manufacturing-logistics",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Healthcare & Life Sciences",
      pathname: "/solutions/industry/healthcare-life-sciences",
      classname: " hover:text-blue-500 cursor-pointer",
    },
  ];

  const roleList = [
    {
      name: "Business Leader",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Data Leader",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: " Analyst",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Product Leader",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Developer",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Marketing and Sales Leaders",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Venture Capitalists",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Operations",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "IT Infrastructure",
      pathname: "/solutions/role",
      classname: " hover:text-blue-500 cursor-pointer",
    },
  ];

  const quickLinksList = [
    {
      name: "Features",
      pathname: "/features",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Chatbot",
      pathname: "/chatbot",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Terms and Conditions",
      pathname: "/terms-conditions",
      classname: " hover:text-blue-500 cursor-pointer",
    },
    {
      name: "Privacy Policy",
      pathname: "/privacy-policy",
      classname: " hover:text-blue-500 cursor-pointer",
    },
  ];

  const industry = industryList.map((item, index) => (
    <Link key={index} className={item.classname} to={item.pathname}>
      {item.name}
    </Link>
  ));

  const role = roleList.map((item, index) => (
    <Link key={index} className={item.classname} to={item.pathname}>
      {item.name}
    </Link>
  ));

  const quickLinks = quickLinksList.map((item, index) => (
    <Link key={index} className={item.classname} to={item.pathname}>
      {item.name}
    </Link>
  ));

  return (
    <div className="bg-[#1f1f1f] flex flex-col justify-between text-white min-h-[400px] dark:text-white pt-[100px] pb-6 ">
      <div className=" w-[90%] mx-auto md:grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-4">
        <div className=" col-span-1 flex items-start md:justify-start justify-center w-full  p-3">
          <img src="/logo3.png" alt="logo" className="max-h-10" />
        </div>
        <div className="w-full col-span-1 md:text-start text-center p-3 space-y-2 ">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <div className=" space-y-2 text-[16px] flex flex-col text-gray-200  leading-[20px] font-normal">
            {quickLinks}
          </div>
        </div>
        <div className=" col-span-1 p-3 space-y-2 md:text-start text-center">
          <h4 className="text-lg font-semibold capitalize   ">Solutions</h4>
          <div className=" w-full flex flex-col gap-6 ">
            <div className=" space-y-2">
              <h1 className=" text-blue-300">By Industry</h1>
              <div className=" space-y-2 flex flex-col">{industry}</div>
            </div>
            <div className=" space-y-2">
              <h1 className=" text-blue-300">By Role</h1>
              <div className=" space-y-2 flex flex-col">{role}</div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 p-3 space-y-2 md:text-start text-center ">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className=" space-y-1 text-[16px] text-gray-200 leading-[20px] font-normal">
            <li>2000 Bering Dr Suite #102, Houston,</li>
            <li>Texas, USA, 77057</li>
          </ul>
        </div>
        <div className=" col-span-1 p-3 space-y-2 w-full md:text-start text-center">
          <h4 className="text-lg font-semibold capitalize  ">Social Media</h4>
          <div className="flex items-center md:justify-start justify-center gap-2">
            <FaXTwitter size="2rem" />
            <FaLinkedinIn size="2rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
