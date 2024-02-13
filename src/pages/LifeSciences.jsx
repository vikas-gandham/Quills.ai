import DemoButton from "../features/DemoButton";

function LifeSciences() {
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
    </div>
  );
}
export default LifeSciences;
