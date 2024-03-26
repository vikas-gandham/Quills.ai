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

  const [active, setActive] = useState("Business Leader");

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
            <div className=" flex sticky top-[80px] self-start items-center w-[90%] bg-white  mx-auto p-1.5 justify-between border rounded-lg backdrop-blur-xl overflow-x-scroll lg:overflow-hidden ">
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Business Leader"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref1);
                  setActive("Business Leader");
                }}
              >
                Business Leader
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Data Leader"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref2);
                  setActive("Data Leader");
                }}
              >
                Data Leader
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Analyst"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref3);
                  setActive("Analyst");
                }}
              >
                Analyst
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Product Leader"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref4);
                  setActive("Product Leader");
                }}
              >
                Product Leader
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Developer"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref5);
                  setActive("Developer");
                }}
              >
                Developer
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Marketing and Sales Leader"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref6);
                  setActive("Marketing and Sales Leader");
                }}
              >
                Marketing and Sales Leader
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Venture Capitalist"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref7);
                  setActive("Venture Capitalist");
                }}
              >
                Venture Capitalist
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "Operations"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref8);
                  setActive("Operations");
                }}
              >
                Operations
              </a>
              <a
                className={` text-gray-600  text-[14px] rounded-lg  font-medium min-w-max px-4 py-2   hover:bg-[#f1f1f1] cursor-pointer ${
                  active === "IT Infrastructure"
                    ? `bg-blue-500 text-white hover:bg-blue-500 hover:text-white`
                    : ``
                }`}
                onClick={() => {
                  handleClick(ref9);
                  setActive("IT Infrastructure");
                }}
              >
                IT Infrastructure
              </a>
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
                  <div
                    ref={ref1}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-1">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold">
                            Business Leader
                          </h1>
                          <p className="mt-4 text-lg tracking-tight   text-gray-600">
                            Role description for Business Leaders. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaSuitcase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Market Strategy
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Harness the power of data analytics to craft
                                  market strategies that outperform competitors.
                                  Identify trends, predict market shifts, and
                                  allocate resources more effectively
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCube />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Performance Monitoring
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Keep a pulse on your company's health with
                                  real-time data. Track KPIs, financial
                                  performance, and operational efficiency to
                                  ensure alignment with business objectives.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <MdAttachMoney />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Risk Assessment
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Proactively identify and mitigate risks using
                                  predictive analytics. Quills helps you foresee
                                  potential pitfalls in business processes and
                                  market movements.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref2}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-2 bg-black">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white">
                            Data Leader
                          </h1>
                          <p className="mt-4 text-lg tracking-tight text-gray-300   ">
                            Role description for Data Leaders. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaDatabase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Data Governance
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Maintain the integrity and security of your
                                  data. Our platform ensures compliance with
                                  regulations and internal policies, providing a
                                  trustworthy foundation for all analytics.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCode />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Data Integration
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Seamlessly combine data from disparate sources
                                  into a single, coherent framework. Our
                                  integration tools reduce complexity and enable
                                  a holistic view of your data landscape.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaHandHoldingUsd />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Data Innovation
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Stay ahead of the curve by leveraging the
                                  latest in data analytics technology. Explore
                                  new data sources and methodologies to drive
                                  innovation and strategic growth.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref3}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-1">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold">
                            Analyst
                          </h1>
                          <p className="mt-4 text-lg tracking-tight   text-gray-600">
                            Role description for Analysts. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <GoGraph />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Data Exploration
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Dive into your data with our intuitive
                                  exploration tools. Uncover hidden patterns,
                                  anomalies, and insights that can transform
                                  your business strategies.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaSuitcase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Reporting and Visualization
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Create compelling reports and visualizations
                                  that tell the story behind your data. Our
                                  platform enables you to communicate insights
                                  clearly and effectively to stakeholders.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <MdAttachMoney />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Forecasting and Predictive Analytics
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Utilize historical data to forecast future
                                  trends and behaviors. Our predictive models
                                  help you anticipate market demands and
                                  customer needs.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref4}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-2 bg-black">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white">
                            Product Leader
                          </h1>
                          <p className="mt-4 text-lg tracking-tight text-gray-300   ">
                            Role description for Product Leaders. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCube />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Product Development
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Inform your product development lifecycle with
                                  user-centric data. Understand customer
                                  preferences and usage patterns to drive
                                  innovation and feature prioritization.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCode />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  User Behavior Analysis
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Gain a deep understanding of how users
                                  interact with your products. Use these
                                  insights to enhance user experience and
                                  increase engagement.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaBarsProgress />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Market Fit Assessment
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Continuously evaluate your product's fit in
                                  the market. Adapt and evolve your strategy to
                                  meet changing customer needs and market
                                  conditions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref5}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-1">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold">
                            Developer
                          </h1>
                          <p className="mt-4 text-lg tracking-tight   text-gray-600">
                            Role description for Developers. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <IoMdSettings />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Data Integration Pipelines and APIs
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Build robust data pipelines that ensure the
                                  smooth flow of information. Our APIs
                                  facilitate the integration of analytics into
                                  your development processes.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaBarsProgress />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Algorithm Development
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Develop cutting-edge algorithms for complex
                                  data analysis. Our platform supports a range
                                  of machine learning and AI techniques to
                                  enhance your capabilities.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <MdAttachMoney />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Data Security
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Protect your data assets with our
                                  comprehensive security features. Ensure the
                                  confidentiality, integrity, and availability
                                  of your sensitive information.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref6}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-2 bg-black">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white">
                            Marketing and Sales Leaders
                          </h1>
                          <p className="mt-4 text-lg tracking-tight text-gray-300   ">
                            Role description for Marketing and Sales Leaders.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCube />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Customer Segmentation
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Segment your customer base for targeted
                                  marketing campaigns. Our analytics tools help
                                  you understand customer behaviors and
                                  preferences for more effective outreach.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCode />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Lead Scoring
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Prioritize your leads with scoring models that
                                  predict conversion likelihood. Focus your
                                  efforts on the prospects most valuable to your
                                  business.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <IoMdSettings />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Campaign Effectiveness
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Measure and optimize the performance of your
                                  marketing campaigns. Our analytics provide
                                  insights into ROI, customer engagement, and
                                  campaign reach.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref7}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-1">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold">
                            Venture Capitalists
                          </h1>
                          <p className="mt-4 text-lg tracking-tight   text-gray-600">
                            Role description for Venture Capitalists. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaSuitcase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Investment Analysis
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Make informed investment decisions with
                                  data-driven insights. Evaluate market trends,
                                  startup performance, and financial forecasts
                                  to identify lucrative opportunities.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaDatabase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Market Trends
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Stay updated on the latest industry trends.
                                  Our analytics help you spot emerging patterns
                                  and capitalize on market movements.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <GoGraph />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Portfolio Management
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Monitor and manage your investment portfolio
                                  with our comprehensive analytics suite. Assess
                                  performance, manage risk, and optimize for
                                  growth.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref8}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-2 bg-black">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold text-white">
                            Operations
                          </h1>
                          <p className="mt-4 text-lg tracking-tight text-gray-300   ">
                            Role description for Operations. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaSuitcase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Operational Efficiency
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Optimize your operations with data-backed
                                  strategies. Identify bottlenecks, streamline
                                  processes, and reduce costs while maintaining
                                  quality and service levels.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaDatabase />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Supply Chain Management
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Enhance your supply chain visibility and
                                  agility. Use analytics to predict demand,
                                  manage inventory, and respond to market
                                  changes swiftly.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaCode />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white text-white ">
                                  Inventory Optimization
                                </h1>
                                <p className="text-[16px] font-normal   group-hover:text-gray-100 text-gray-300">
                                  Balance your inventory levels perfectly with
                                  predictive analytics. Reduce carrying costs
                                  and avoid stockouts or overstock situations.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-1 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>

                  <div
                    ref={ref9}
                    className="grid lg:border-none border border-gray-200  lg:grid-cols-2 w-full   text-black  "
                  >
                    <div className="py-12 w-full flex items-center justify-center lg:order-1">
                      <div className=" lg:w-[80%] w-full">
                        <div className="pl-4">
                          <h1 className="font-display text-3xl tracking-tight   sm:text-4xl md:text-5xl font-semibold">
                            IT Infrastructure
                          </h1>
                          <p className="mt-4 text-lg tracking-tight   text-gray-600">
                            Role description for IT Infrastructure. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0 p-4">
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <IoMdSettings />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Infrastructure Monitoring
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Enhance your IT analytics with Quills that
                                  track system health, pinpoint performance
                                  issues, and alert you to maintenance needs for
                                  optimal infrastructure efficiency.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <MdAttachMoney />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Security Management
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Safeguard your IT systems with advanced
                                  analytics-driven security solutions. Detect
                                  threats early and respond to incidents
                                  swiftly.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500">
                            <div className="flex items-start gap-4">
                              <div className="rounded-[4px] min-w-[45px]  min-h-[45px] flex items-center justify-center text-xl      bg-[#eeeeee] text-black group-hover:bg-white group-hover:text-black">
                                <FaBarsProgress />
                              </div>
                              <div className=" space-y-2">
                                <h1 className="text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                  Cloud Integration
                                </h1>
                                <p className="text-[16px] font-normal  text-gray-600  group-hover:text-gray-100">
                                  Maximize the benefits of cloud computing with
                                  our analytics tools. Optimize costs, enhance
                                  scalability, and improve performance across
                                  your cloud infrastructure.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center  lg:order-2 bg-[#fff]     overflow-hidden ">
                      <img src="/Multiple.jpg" className=" max-w-[90%]" />
                    </div>
                  </div>
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
