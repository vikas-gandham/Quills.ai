import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  const items1 = [
    "Life Sciences",
    "BFSI",
    "Retail & E-commerce",
    "Manufacturing & Logistics",
    "Healthcare & Life Sciences",
  ];
  const items2 = [
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

  const items3 = [
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

  const industry = items1.map((item, index) => <li key={index}>{items1}</li>);

  const role = items2.map((item, index) => <li key={index}>{item.name}</li>);

  const quickLinks = items3.map((item, index) => (
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
            <Link className=" hover:text-blue-500 cursor-pointer" to="/chatbot">
              Chatbot
            </Link>
            <Link
              className=" hover:text-blue-500 cursor-pointer"
              to="/terms-conditions"
            >
              Terms and Conditions
            </Link>
            <Link
              className=" hover:text-blue-500 cursor-pointer"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className=" col-span-1 p-3 space-y-2 md:text-start text-center">
          <h4 className="text-lg font-semibold capitalize   ">Solutions</h4>
          <div className=" w-full flex flex-col gap-6 ">
            <div className=" space-y-2">
              <h1 className=" text-blue-300">By Industry</h1>
              <div className=" space-y-2 flex flex-col">
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/industry/life-sciences"
                >
                  Life Sciences
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/industry/bfsi"
                >
                  BFSI
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/industry/retail-ecommerce"
                >
                  Retail & E-commerce
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/industry/manufacturing-logistics"
                >
                  Manufacturing & Logistics
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/industry/healthcare-life-sciences"
                >
                  Healthcare & Life Sciences
                </Link>
              </div>
            </div>
            <div className=" space-y-2">
              <h1 className=" text-blue-300">By Role</h1>
              <div className=" space-y-2 flex flex-col">
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  {role}
                </Link>

                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Data Leader
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Analyst
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Product Leader
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Developer
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Markrting and Sales Leader
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Venture Capitalists
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  Operations
                </Link>
                <Link
                  className=" hover:text-blue-500 cursor-pointer"
                  to="/solutions/role"
                >
                  IT Infrastructure
                </Link>
              </div>
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
