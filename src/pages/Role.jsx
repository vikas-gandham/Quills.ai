import { useRef, useState } from "react";
import DemoButton from "../features/DemoButton";
import { useEffect } from "react";
import {
  FaSuitcase,
  FaCube,
  FaDatabase,
  FaCode,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

function Role() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const handleClick = (anchorRef) => {
    window.scrollTo({
      top: anchorRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const anchorList = [
    { name: "Business Leader", ref: { ref1 }, refName: "ref1" },
    { name: "Data Leader", ref: { ref2 }, refName: "ref1" },
    { name: "Analyst", ref: { ref3 }, refName: "ref1" },
    { name: "Product Leader", ref: { ref4 }, refName: "ref1" },
    { name: "Developer", ref: { ref5 }, refName: "ref1" },
    { name: "Marketing and Sales Leader", ref: { ref6 }, refName: "ref1" },
    { name: "Venture Capitalist", ref: { ref7 }, refName: "ref1" },
    { name: "Operations", ref: { ref8 }, refName: "ref1" },
    { name: "IT Infrastructure", ref: { ref9 }, refName: "ref1" },
  ];

  const useCaseList = [
    {
      mainHeading: "Business Leader",
      mainPara:
        "Role description for Business Leaders. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <FaSuitcase />,
      icon2: <FaCube />,
      icon3: <MdAttachMoney />,
      heading1: "Market Strategy",
      heading2: "Performance Monitoring",
      heading3: "Risk Assessment",
      para1:
        "Harness the power of data analytics to craft market strategies that outperform competitors. Identify trends, predict market shifts, and allocate resources more effectively",
      para2:
        "Keep a pulse on your company's health with real-time data. Track KPIs, financial performance, and operational efficiency to ensure alignment with business objectives.",
      para3:
        "Proactively identify and mitigate risks using predictive analytics. Quills helps you foresee potential pitfalls in business processes and market movements.",
      img: "/Multiple.jpg",
      class1: "py-12 w-full flex items-center justify-center lg:order-1",
      class2:
        "flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold",
      class4: "mt-4 text-lg tracking-tight   text-gray-600",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white",
      class6:
        "text-[16px] font-normal  text-gray-600  group-hover:text-gray-100",
      ref: { ref1 },
    },
    {
      mainHeading: "Data Leader",
      mainPara:
        "Role description for Data Leaders. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <FaDatabase />,
      icon2: <FaCode />,
      icon3: <FaHandHoldingUsd />,
      heading1: "Data Governance",
      heading2: "Data Integration",
      heading3: "Data Innovation",
      para1:
        "Maintain the integrity and security of your data. Our platform ensures compliance with regulations and internal policies, providing a trustworthy foundation for all analytics.",
      para2:
        "Seamlessly combine data from disparate sources into a single, coherent framework. Our integration tools reduce complexity and enable a holistic view of your data landscape.",
      para3:
        "Stay ahead of the curve by leveraging the latest in data analytics technology. Explore new data sources and methodologies to drive innovation and strategic growth.",
      img: "/Multiple.jpg",
      class1:
        "py-12 w-full flex items-center justify-center lg:order-2 bg-black",
      class2:
        "flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white",
      class4: "mt-4 text-lg tracking-tight text-gray-300   ",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ",
      class6:
        "text-[16px] font-normal   group-hover:text-gray-100 text-gray-300",
      ref: { ref2 },
    },
    {
      mainHeading: "Analyst",
      mainPara:
        "Role description for Analysts. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <GoGraph />,
      icon2: <FaSuitcase />,
      icon3: <MdAttachMoney />,
      heading1: "Data Exploration",
      heading2: "Reporting and Visualization",
      heading3: "Forecasting and Predictive Analytics",
      para1:
        "Dive into your data with our intuitive exploration tools. Uncover hidden patterns, anomalies, and insights that can transform your business strategies.",
      para2:
        "Create compelling reports and visualizations that tell the story behind your data. Our platform enables you to communicate insights clearly and effectively to stakeholders.",
      para3:
        "Utilize historical data to forecast future trends and behaviors. Our predictive models help you anticipate market demands and customer needs.",
      img: "/Multiple.jpg",
      class1: "py-12 w-full flex items-center justify-center lg:order-1",
      class2:
        "flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold",
      class4: "mt-4 text-lg tracking-tight   text-gray-600",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white",
      class6:
        "text-[16px] font-normal  text-gray-600  group-hover:text-gray-100",
      ref: { ref3 },
    },
    {
      mainHeading: "Product Leader",
      mainPara:
        "Role description for Product Leaders. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <FaCube />,
      icon2: <FaCode />,
      icon3: <FaBarsProgress />,
      heading1: "Product Development",
      heading2: "User Behavior Analysis",
      heading3: "Market Fit Assessment",
      para1:
        "Inform your product development lifecycle with user-centric data. Understand customer preferences and usage patterns to drive innovation and feature prioritization.",
      para2:
        "Gain a deep understanding of how users interact with your products. Use these insights to enhance user experience and increase engagement.",
      para3:
        "Continuously evaluate your product's fit in the market. Adapt and evolve your strategy to meet changing customer needs and market conditions.",
      img: "/Multiple.jpg",
      class1:
        "py-12 w-full flex items-center justify-center lg:order-2 bg-black",
      class2:
        "flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white",
      class4: "mt-4 text-lg tracking-tight text-gray-300   ",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ",
      class6:
        "text-[16px] font-normal   group-hover:text-gray-100 text-gray-300",
      ref: { ref4 },
    },
    {
      mainHeading: "Developer",
      mainPara:
        "Role description for Developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <IoMdSettings />,
      icon2: <FaBarsProgress />,
      icon3: <MdAttachMoney />,
      heading1: "Data Integration Pipelines and APIs",
      heading2: "Algorithm Development",
      heading3: "Data Security",
      para1:
        "Build robust data pipelines that ensure the smooth flow of information. Our APIs facilitate the integration of analytics into your development processes.",
      para2:
        "Develop cutting-edge algorithms for complex data analysis. Our platform supports a range of machine learning and AI techniques to enhance your capabilities.",
      para3:
        "Protect your data assets with our comprehensive security features. Ensure the confidentiality, integrity, and availability of your sensitive information.",
      img: "/Multiple.jpg",
      class1: "py-12 w-full flex items-center justify-center lg:order-1",
      class2:
        "flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold",
      class4: "mt-4 text-lg tracking-tight   text-gray-600",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white",
      class6:
        "text-[16px] font-normal  text-gray-600  group-hover:text-gray-100",
      ref: { ref5 },
    },
    {
      mainHeading: "Marketing and Sales Leaders",
      mainPara:
        "Role description for Marketing and Sales Leaders. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <FaCube />,
      icon2: <FaCode />,
      icon3: <IoMdSettings />,
      heading1: "Customer Segmentation",
      heading2: "Lead Scoring",
      heading3: "Campaign Effectiveness",
      para1:
        "Segment your customer base for targeted marketing campaigns. Our analytics tools help you understand customer behaviors and preferences for more effective outreach.",
      para2:
        "Prioritize your leads with scoring models that predict conversion likelihood. Focus your efforts on the prospects most valuable to your business.",
      para3:
        "Measure and optimize the performance of your marketing campaigns. Our analytics provide insights into ROI, customer engagement, and campaign reach.",
      img: "/Multiple.jpg",
      class1:
        "py-12 w-full flex items-center justify-center lg:order-2 bg-black",
      class2:
        "flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white",
      class4: "mt-4 text-lg tracking-tight text-gray-300   ",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ",
      class6:
        "text-[16px] font-normal   group-hover:text-gray-100 text-gray-300",
      ref: { ref6 },
    },
    {
      mainHeading: "Venture Capitalists",
      mainPara:
        "Role description for Venture Capitalists. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <FaSuitcase />,
      icon2: <FaDatabase />,
      icon3: <GoGraph />,
      heading1: "Investment Analysis",
      heading2: "Market Trends",
      heading3: "Portfolio Management",
      para1:
        "Make informed investment decisions with data-driven insights. Evaluate market trends, startup performance, and financial forecasts to identify lucrative opportunities.",
      para2:
        "Stay updated on the latest industry trends. Our analytics help you spot emerging patterns and capitalize on market movements.",
      para3:
        "Monitor and manage your investment portfolio with our comprehensive analytics suite. Assess performance, manage risk, and optimize for growth.",
      img: "/Multiple.jpg",
      class1: "py-12 w-full flex items-center justify-center lg:order-1",
      class2:
        "flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold",
      class4: "mt-4 text-lg tracking-tight   text-gray-600",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white",
      class6:
        "text-[16px] font-normal  text-gray-600  group-hover:text-gray-100",
      ref: { ref7 },
    },
    {
      mainHeading: "Operations",
      mainPara:
        "Role description for Operations. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <FaSuitcase />,
      icon2: <FaDatabase />,
      icon3: <FaCode />,
      heading1: "Operational Efficiency",
      heading2: "Supply Chain Management",
      heading3: "Inventory Optimization",
      para1:
        "Optimize your operations with data-backed strategies. Identify bottlenecks, streamline processes, and reduce costs while maintaining quality and service levels.",
      para2:
        "Enhance your supply chain visibility and agility. Use analytics to predict demand, manage inventory, and respond to market changes swiftly.",
      para3:
        "Balance your inventory levels perfectly with predictive analytics. Reduce carrying costs and avoid stockouts or overstock situations.",
      img: "/Multiple.jpg",
      class1:
        "py-12 w-full flex items-center justify-center lg:order-2 bg-black",
      class2:
        "flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white",
      class4: "mt-4 text-lg tracking-tight text-gray-300   ",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ",
      class6:
        "text-[16px] font-normal   group-hover:text-gray-100 text-gray-300",
      ref: { ref8 },
    },
    {
      mainHeading: "IT Infrastructure",
      mainPara:
        "Role description for IT Infrastructure. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon1: <IoMdSettings />,
      icon2: <MdAttachMoney />,
      icon3: <FaBarsProgress />,
      heading1: "Infrastructure Monitoring",
      heading2: "Security Management",
      heading3: "Cloud Integration",
      para1:
        "Enhance your IT analytics with Quills that track system health, pinpoint performance issues, and alert you to maintenance needs for optimal infrastructure efficiency.",
      para2:
        "Safeguard your IT systems with advanced analytics-driven security solutions. Detect threats early and respond to incidents swiftly.",
      para3:
        "Maximize the benefits of cloud computing with our analytics tools. Optimize costs, enhance scalability, and improve performance across your cloud infrastructure.",
      img: "/Multiple.jpg",
      class1: "py-12 w-full flex items-center justify-center lg:order-1",
      class2:
        "flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ",
      class3:
        "font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold",
      class4: "mt-4 text-lg tracking-tight   text-gray-600",
      class5:
        "text-[18px] leading-[24px] font-semibold  group-hover:text-white",
      class6:
        "text-[16px] font-normal  text-gray-600  group-hover:text-gray-100",
      ref: { ref9 },
    },
  ];

  const [active, setActive] = useState(anchorList[0].name);

  return (
    <div>
      <div className=" w-full lg:min-h-[80vh] lg:py-0  bg-white flex items-center justify-start md:text-start text-center relative">
        <div className=" w-[90%]  mx-auto z-[5] relative">
          <div className=" lg:w-[60%] pt-[200px]">
            <div className=" space-y-[20px]">
              <h1 className="undefined md:text-[50px] md:leading-[60px] font-[700] text-[30px] leading-[45px] ">
                Solutions by Role
              </h1>
              <p className=" undefined md:text-[20px]  w-full  font-[400] md:leading-[40px] text-[16px] leading-[24px] ">
                Explore our tailored solutions for various roles in your
                organization. Quills.ai provides role-specific insights and
                tools to enhance your workflow and decision-making.
              </p>
              <DemoButton type="primary" />
            </div>
          </div>
        </div>
      </div>
      <section className="relative bg-gradient-to-t from-[#eeeeee] to-white pb-28  ">
        <div className="relative ">
          <div className=" w-full relative overflow-hidden">
            <div className=" flex sticky top-[80px] self-start items-center w-[90%] bg-white  mx-auto p-1.5 justify-between border rounded-lg backdrop-blur-xl overflow-x-scroll ">
              {anchorList.map((anchor, i) => (
                <a
                  key={i}
                  ref={anchor.ref}
                  className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                    active === anchor.name
                      ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                      : ``
                  }`}
                  onClick={() => {
                    handleClick(anchor.ref);
                    setActive(anchor.name);
                  }}
                >
                  {anchor.name}
                </a>
              ))}
            </div>
            <div className=" w-full  mt-[180px]  ">
              <div className="md:text-center lg:w-full w-[90%] mx-auto">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Use Cases
                </h2>
                <p className="mt-6 text-lg tracking-tight text-slate-700 lg:w-[60%] mx-auto">
                  Explore our tailored use cases for various roles in your
                  organization. Quills.ai provides role-specific insights and
                  tools to enhance your workflow and decision-making.
                </p>
              </div>
              <div className=" mt-[50px] ">
                <div className="flex flex-col gap-32 lg:w-full">
                  {useCaseList.map((useCase, i) => (
                    <div
                      key={i}
                      ref={useCase.ref}
                      className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                    >
                      <div className={useCase.class1}>
                        <div className=" lg:w-[80%] w-full">
                          <div className="pl-4">
                            <h1 className={useCase.class3}>
                              {useCase.mainHeading}
                            </h1>
                            <p className={useCase.class4}>{useCase.mainPara}</p>
                          </div>
                          <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                            <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                              <div className="flex items-start gap-4">
                                <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                  {useCase.icon1}
                                </div>
                                <div className=" space-y-2">
                                  <h1 className={useCase.class5}>
                                    {useCase.heading1}
                                  </h1>
                                  <p className={useCase.class6}>
                                    {useCase.para1}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                              <div className="flex items-start gap-4">
                                <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                  {useCase.icon2}
                                </div>
                                <div className=" space-y-2">
                                  <h1 className={useCase.class5}>
                                    {useCase.heading2}
                                  </h1>
                                  <p className={useCase.class6}>
                                    {useCase.para2}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                              <div className="flex items-start gap-4">
                                <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                  {useCase.icon3}
                                </div>
                                <div className=" space-y-2">
                                  <h1 className={useCase.class5}>
                                    {useCase.heading3}
                                  </h1>
                                  <p className={useCase.class6}>
                                    {useCase.para3}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={useCase.class2}>
                        <img src={useCase.img} className=" max-w-[90%]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Role;
