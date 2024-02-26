import DemoButton from "../features/DemoButton";
import Testimonials from "../features/Testimonials";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function LifeSciences() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div className=" w-full lg:min-h-[80vh] lg:py-0  bg-white flex items-center justify-start md:text-start text-center relative">
        <div className=" w-[90%]  mx-auto z-[5] relative">
          <div className=" lg:w-[60%] py-[200px]">
            <div className=" space-y-[20px]">
              <h1 className="undefined md:text-[50px] md:leading-[60px] font-[700] text-[30px] leading-[45px] ">
                Generative AI in Life Sciences
              </h1>
              <p className=" undefined md:text-[20px]  w-full  font-[400] md:leading-[40px] text-[16px] leading-[24px] ">
                Generative AI is transforming life sciences, making drug
                discovery quicker, tailoring care to each patient's needs, and
                uncovering valuable insights from biomedical data. Our
                innovative solutions leverage powerful algorithms and predictive
                models to revolutionise research, product development, and
                improve health outcomes for patients.
              </p>
              <DemoButton />
            </div>
          </div>
        </div>
      </div>

      <section
        id="features"
        className="relative bg-[#fafafa] pb-28 pt-20 sm:py-32"
      >
        <div className="relative w-[90%] mx-auto">
          <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2 className="font-display text-3xl tracking-tight  sm:text-4xl md:text-5xl">
              Solutions for Life Sciences.
            </h2>
            <p className="mt-6 text-lg tracking-tight ">
              Explore how our AI-powered solutions can benefit the Life Sciences
              industry.
            </p>
          </div>
          <div className=" grid lg:grid-cols-5 mt-[50px] gap-10">
            <div className=" lg:col-span-2 sticky lg:w-full w-full flex top-[80px] self-start items-center bg-white  mx-auto p-1.5 justify-between   rounded-lg  lg:bg-transparent overflow-hidden  z-[9]">
              <div className="relative z-1 flex gap-x-4 whitespace-nowrap  lg:px-4 p-2  lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal lg:space-y-2 overflow-x-scroll lg:overflow-hidden lg:w-full lg:min-w-full   ">
                <div className="group relative rounded-full px-4 py-1 md:rounded-md lg:p-6">
                  <a className="active cursor-pointer">
                    <h3 className="font-display text-lg ui-not-focus-visible:outline-none outline-none text-gray-600 hover:text-black lg:text-black">
                      Introduction
                    </h3>
                  </a>
                </div>
                <div className="group relative rounded-full px-4 py-1 md:rounded-md lg:p-6">
                  <a className="active cursor-pointer">
                    <h3 className="font-display text-lg ui-not-focus-visible:outline-none outline-none text-gray-600 hover:text-black lg:text-black">
                      Business Requirements
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-black group-hover:text-black">
                      In the BFSI sector, the business requirements are as
                      stringent as they are clear-cut. These requirements form
                      the backbone of a BFSI organization's operational
                      capabilities, dictating the need for advanced, integrated,
                      and secure IT solutions to drive the industry forward.
                      Financial institutions must have:
                    </p>
                  </a>
                </div>
                <div className="group relative rounded-full px-4 py-1 md:rounded-md lg:p-6 border lg:border-gray-600 border-blue-500 ">
                  <a className="active cursor-pointer">
                    <h3 className="font-display text-lg ui-not-focus-visible:outline-none outline-none text-blue-600 lg:text-black">
                      Technical Challenges
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-3 lg:p-4 flex flex-col gap-8 z-[1] relative">
              <div id="Introduction" className=" text-justify">
                <div className="relative ">
                  <h1 className=" text-2xl underline mb-4">Introduction:</h1>
                  <p className="relative text-base ">
                    Efficient and precise data management is a cornerstone in
                    the Banking, Financial Services, and Insurance (BFSI)
                    industry. The integrity of financial data, customer
                    information, and transaction records is non-negotiable, as
                    even the slightest error can have far-reaching consequences.
                  </p>
                  <p className="relative text-base ">
                    Currently, the BFSI sector grapples with data systems that
                    are often compartmentalized, each tailored for specific
                    functions such as customer accounts management, transaction
                    processing, or compliance reporting. This fragmentation
                    leads to data silos, creating challenges in achieving a
                    unified view of customer information and financial records.
                  </p>
                  <p className="relative text-base ">
                    To bridge these disparate systems, many institutions rely on
                    complex integrative frameworks, often underpinned by
                    service-oriented architecture (SOA). While SOA facilitates
                    the exchange of large data volumes under non-critical
                    conditions, it can introduce complexity and latency,
                    heightening the risk of errors. With the burgeoning volume
                    of data and the escalating demand for real-time access and
                    processing, these legacy systems are being pushed to their
                    limits, impeding the BFSI sector's ability to innovate and
                    respond to market dynamics promptly.
                  </p>
                </div>
              </div>
              <div id="Business Requirements" className=" text-justify">
                <div className="relative ">
                  <h1 className=" text-2xl underline mb-4">
                    Business Requirements:
                  </h1>
                  <p className="relative text-base ">
                    In the BFSI sector, the business requirements are as
                    stringent as they are clear-cut. These requirements form the
                    backbone of a BFSI organization's operational capabilities,
                    dictating the need for advanced, integrated, and secure IT
                    solutions to drive the industry forward. Financial
                    institutions must have:
                  </p>
                  <ul className="mt-4 list-disc list-outside pl-4 space-y-5">
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Real-time Data Processing:
                        </span>
                        Systems must deliver immediate transaction and data
                        analysis capabilities to inform timely financial
                        decisions.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Unified Data Management:
                        </span>
                        A consolidated platform is essential to integrate
                        disparate data sources for comprehensive operational
                        visibility.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Regulatory Compliance:
                        </span>
                        Flexible systems that can quickly adapt to new
                        regulations are critical for maintaining legal and
                        ethical standards.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Robust Security Frameworks:
                        </span>
                        Protecting sensitive financial data against cyber
                        threats is paramount to ensure customer trust and data
                        integrity.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Agile IT Infrastructure:
                        </span>
                        The infrastructure must support rapid adaptation and
                        integration of emerging technologies to stay competitive
                        in the fintech arena.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="Technical Challenges" className=" text-justify">
                <div className="relative ">
                  <h1 className=" text-2xl underline mb-4">Challenge</h1>
                  <p className="relative">
                    The BFSI sector is fraught with challenges, including:
                  </p>
                  <ul className="mt-4 list-disc list-outside pl-4 space-y-5">
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Data Fragmentation:
                        </span>
                        Disparate systems lead to siloed data, complicating the
                        unified analysis and application of information across
                        the financial spectrum.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Cybersecurity Threats:
                        </span>
                        As digital transactions increase, so does the risk of
                        cyberattacks, demanding ever-more sophisticated security
                        measures.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Regulatory Compliance:
                        </span>
                        Keeping up with and adhering to the ever-evolving
                        landscape of industry regulations and standards.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Speed of Innovation:
                        </span>
                        Staying ahead in a highly competitive field by rapidly
                        translating data into actionable insights and innovative
                        solutions.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="underline font-semibold">
                          Integration of Diverse Data Sources:
                        </span>
                        Seamlessly combining data from various sources,
                        including clinical trials, electronic health records,
                        and research databases, to create a holistic view.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="relative bg-white pb-28 pt-20 sm:py-32">
        <div className="relative ">
          <div className=" md:text-center lg:w-full w-[90%] mx-auto">
            <h2 className="font-display text-3xl tracking-tight text-slate-900  sm:text-4xl md:text-5xl">
              Use Cases
            </h2>
            <p className="mt-6 text-lg tracking-tight text-slate-700 lg:w-[60%] mx-auto ">
              Efficient Data Gathering: In the business world, there's often a
              "hazel" or challenge when it comes to collecting vast amounts of
              data. With the introduction of Quills, this process is
              streamlined.
            </p>
          </div>
          <div className="  mt-[50px]  ">
            <div className=" flex flex-col space-y-10 lg:w-full ">
              <div className="grid lg:grid-cols-2   bg-[#333]">
                <div className=" p-12 flex items-center justify-center  lg:order-2 text-white ">
                  <div className=" lg:w-[80%]">
                    <h1 className=" font-display text-3xl tracking-tight   sm:text-3xl md:text-4xl">
                      Prompt-Based Data Extraction
                    </h1>
                    <p className=" mt-4 text-lg tracking-tight">
                      Instead of navigating through complex databases or
                      spreadsheets, users can simply use intuitive prompts like
                      'give me top 5 customer names with the highest number of
                      contracts.' This simplifies the data extraction process
                      and ensures that even those without technical expertise
                      can fetch the necessary information.
                    </p>
                  </div>
                </div>
                <div className="  lg:order-1 lg:border-y lg:border-r  p-12 bg-[#fafafa]    overflow-hidden  ">
                  <img
                    src="/key-4.png"
                    className="   shadow-lg w-[90%] mx-auto shadow-gray-300 rounded-2xl opacity-30"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2  lg:bg-[#fff] bg-[#333] lg:text-black text-white ">
                <div className=" p-12 flex items-center justify-center  lg:order-1  ">
                  <div className=" lg:w-[80%]">
                    <h1 className=" font-display text-3xl tracking-tight   sm:text-3xl md:text-4xl">
                      Real-time Business Monitoring
                    </h1>
                    <p className=" mt-4 text-lg tracking-tight">
                      As businesses evolve, there's a need for real-time
                      monitoring of contracts, sales, and customer interactions.
                      Quills provides an avenue for instant data retrieval,
                      ensuring that businesses can react promptly to emerging
                      trends or issues.
                    </p>
                  </div>
                </div>
                <div className="  lg:order-2 lg:border-y lg:border-l     overflow-hidden  ">
                  <img src="/key-1.webp" className="   min-w-full " />
                </div>
              </div>
              <div className="grid lg:grid-cols-2   bg-[#333]">
                <div className=" p-12 flex items-center justify-center  lg:order-2 text-white ">
                  <div className=" lg:w-[80%]">
                    <h1 className=" font-display text-3xl tracking-tight   sm:text-3xl md:text-4xl">
                      Customizable Data Portals
                    </h1>
                    <p className=" mt-4 text-lg tracking-tight">
                      Once the data is fetched, Quills allows users to arrange
                      and customize the data presentation according to their
                      preferences. This ensures that reports, presentations, or
                      dashboards are tailored to the specific needs of the
                      business or department.
                    </p>
                  </div>
                </div>
                <div className="  lg:order-1 lg:border-y lg:border-r      overflow-hidden  ">
                  <img src="/key-2.webp" className="   min-w-full " />
                </div>
              </div>
              <div className="grid lg:grid-cols-2  lg:bg-[#fff] bg-[#333] lg:text-black text-white ">
                <div className=" p-12 flex items-center justify-center  lg:order-1  ">
                  <div className=" lg:w-[80%]">
                    <h1 className=" font-display text-3xl tracking-tight   sm:text-3xl md:text-4xl">
                      Client Engagement and Self-Service
                    </h1>
                    <p className=" mt-4 text-lg tracking-tight">
                      With the rise of digital platforms, businesses are
                      constantly seeking ways to engage with their clients more
                      effectively. Quills can be integrated into web and mobile
                      channels, allowing clients to fetch specific data or
                      reports on-demand.
                    </p>
                  </div>
                </div>
                <div className="  lg:order-2 lg:border-y lg:border-l     overflow-hidden  ">
                  <img src="/key-3.webp" className="   min-w-full " />
                </div>
              </div>
              <div className="grid lg:grid-cols-2   bg-[#333]">
                <div className=" p-12 flex items-center justify-center  lg:order-2 text-white ">
                  <div className=" lg:w-[80%]">
                    <h1 className=" font-display text-3xl tracking-tight   sm:text-3xl md:text-4xl">
                      Enhanced Data Security and Integrity
                    </h1>
                    <p className=" mt-4 text-lg tracking-tight">
                      In the age of cyber threats, ensuring the security and
                      integrity of business data is paramount. Quills not only
                      provides efficient data retrieval but also incorporates
                      security measures to prevent unauthorized access or data
                      breaches.
                    </p>
                  </div>
                </div>
                <div className="  lg:order-1 lg:border-y lg:border-r      overflow-hidden  ">
                  <img src="/key-5.webp" className="   min-w-full " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="relative bg-white pb-28 pt-20 ">
        <div className="relative w-[90%] mx-auto ">
          <div className=" md:text-center lg:w-full w-[90%] mx-auto">
            <h2 className="font-display text-3xl tracking-tight text-slate-900  sm:text-4xl md:text-5xl">
              Solutions
            </h2>
            <p className="mt-6 text-lg tracking-tight text-slate-700 ">
              Explore how our AI-powered solutions can benefit the Life Sciences
              industry.
            </p>
          </div>
          <div className="  mt-[50px]  ">
            <div className=" grid lg:grid-cols-2 gap-8  lg:w-[90%] mx-auto ">
              <div className="border bg-gradient-to-br from-[#eaeaea] to-[#f6f6f6] rounded-3xl overflow-hidden shadow-md">
                <div className=" p-12 flex items-center justify-center">
                  <div className="lg:w-[80%]">
                    <h1 className="font-display text-3xl tracking-tight sm:text-3xl md:text-4xl">
                      Advanced Technology
                    </h1>
                    <p className="mt-4 text-lg tracking-tight">
                      Experience cutting-edge technology that drives our
                      platform. Our AI-powered solutions are at the forefront of
                      innovation, offering you the latest advancements in data
                      analysis.
                    </p>
                  </div>
                </div>
                <div>
                  <img />
                </div>
              </div>
              <div className="border bg-gradient-to-br from-[#eaeaea] to-[#f6f6f6] rounded-3xl overflow-hidden shadow-md">
                <div className=" p-12 flex items-center justify-center">
                  <div className="lg:w-[80%]">
                    <h1 className="font-display text-3xl tracking-tight sm:text-3xl md:text-4xl">
                      Seamless Integration
                    </h1>
                    <p className="mt-4 text-lg tracking-tight">
                      Effortlessly integrate our platform with your existing
                      software and tools. Our solutions are designed to work
                      smoothly with the systems you already use, reducing
                      disruptions and maximizing efficiency.
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/slack.jpg" />
                </div>
              </div>
              <div className="border bg-gradient-to-br from-[#eaeaea] to-[#f6f6f6] rounded-3xl overflow-hidden shadow-md">
                <div className=" p-12 flex items-center justify-center">
                  <div className="lg:w-[80%]">
                    <h1 className="font-display text-3xl tracking-tight sm:text-3xl md:text-4xl">
                      Customization
                    </h1>
                    <p className="mt-4 text-lg tracking-tight">
                      Tailor our platform to meet your unique project
                      requirements. We understand that one size doesn't fit all,
                      so we offer customizable solutions that adapt to your
                      specific needs.
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/mes.jpeg" />
                </div>
              </div>
              <div className="border bg-gradient-to-br from-[#eaeaea] to-[#f6f6f6] rounded-3xl overflow-hidden shadow-md">
                <div className=" p-12 flex items-center justify-center">
                  <div className="lg:w-[80%]">
                    <h1 className="font-display text-3xl tracking-tight sm:text-3xl md:text-4xl">
                      Real-time Insights
                    </h1>
                    <p className="mt-4 text-lg tracking-tight">
                      Gain real-time access to critical research data for
                      informed decision-making. Our platform empowers you with
                      instant insights, helping you stay ahead of the curve.
                    </p>
                  </div>
                </div>
                <div>
                  <video
                    autoPlay
                    src="https://static.quills.ai/quills_stats_one.mp4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="bg-slate-50 py-20 sm:py-32">
        <div className=" w-[90%] mx-auto">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Loved by businesses worldwide.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
export default LifeSciences;
