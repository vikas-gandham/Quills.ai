import DemoButton from "../features/DemoButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Role() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
              <DemoButton />
            </div>
          </div>
        </div>
      </div>
      <section
        id="features"
        className="relative bg-white pb-28 pt-20 sm:py-32 lg:pt-10"
      >
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
    </div>
  );
}
export default Role;
