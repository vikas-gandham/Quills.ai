import { Link } from "react-router-dom";

function HoverText() {
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

  return (
    <div className=" p-8 border rounded-md bg-white shadow-md grid grid-cols-3 gap-10 col-span-3  absolute -translate-x-[50%] top-10 min-w-[max-content] shadow-sky-100  translate-y-8  ">
      <div className=" space-y-2">
        <h1>By Industry</h1>
        <div className=" space-y-2 flex flex-col cursor-pointer">
          {industry}
        </div>
      </div>
      <div className=" space-y-2">
        <h1>By Role</h1>
        <div className=" space-y-2 flex flex-col cursor-pointer">{role}</div>
      </div>
    </div>
  );
}
export default HoverText;
