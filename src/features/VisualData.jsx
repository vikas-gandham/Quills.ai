function VisualData() {
  const itemList = [
    {
      h1: "Prompt-Based Data Extraction",
      p: "Instead of navigating through complex databases or spreadsheets, users can simply use intuitive prompts like 'give me top 5 customer names with the highest number of contracts.' This simplifies the data extraction process and ensures that even those without technical expertise can fetch the necessary information.",
    },
    {
      h1: "Real-time Business Monitoring",
      p: "As businesses evolve, there's a need for real-time monitoring of contracts, sales, and customer interactions. Quills provides an avenue for instant data retrieval, ensuring that businesses can react promptly to emerging trends or issues.",
    },
    {
      h1: "Customizable Data Portals",
      p: "Once the data is fetched, Quills allows users to arrange and customize the data presentation according to their preferences. This ensures that reports, presentations, or dashboards are tailored to the specific needs of the business or department.",
    },
    {
      h1: "Client Engagement and Self-Service",
      p: "With the rise of digital platforms, businesses are constantly seeking ways to engage with their clients more effectively. Quills can be integrated into web and mobile channels, allowing clients to fetch specific data or reports on-demand.",
    },
    {
      h1: "Enhanced Data Security and Integrity",
      p: "In the age of cyber threats, ensuring the security and integrity of business data is paramount. Quills not only provides efficient data retrieval but also incorporates security measures to prevent unauthorized access or data breaches.",
    },
  ];

  return (
    <div className=" py-[100px] bg-white    z-[5]      w-full  relative ">
      <div className=" md:w-[80%]  w-[95%]  mx-auto space-y-16 z-[5] relative overfl">
        <div className=" text-center space-y-3 ">
          <div className=" space-y-[24px]  ">
            <div className="  shadow-blue-100 flex items-center w-[max-content]  py-2 px-4 gap-2 border border-[#b6bccd] rounded-full mx-auto  shadow-md">
              <h1 className="md:text-base text-[12px]">
                Interactive Visualizations
              </h1>
            </div>
            <div className="flex w-full flex-col space-y-4 justify-between items-center ">
              <h1 className="  text-[#012447] md:text-[3.4rem] font-[500] text-[2.4rem] leading-[1.2] md:leading-[1.3 ">
                Visualize Data
              </h1>
              <h6 className="  text-[#012447] md:text-[16px]  mx-auto font-[300] leading-[160%] text-[18px] md:w-[85%] ">
                Visualize your data in a variety of ways thanks to a robust set
                of visualizations. Whether it’s as a table, a chart, or a single
                value — you’re in control.
              </h6>
            </div>
            <div className=" py-[150px] w-full rounded-xl ">
              <div className=" lg:w-[75%] w-[90%] mx-auto space-y-8">
                <div className=" text-center space-y-3 ">
                  <div className=" space-y-[20px]">
                    <h1 className=" md:text-[42px] md:leading-[50px] font-[500] text-[38px] leading-[45px] ">
                      Seamlessly Integrate with Your Favorite Apps
                    </h1>
                    <p className=" text-[#757575] md:text-[18px] tracking-wider  w-full mx-auto font-[300] md:leading-[135%] text-[20px] leading-[135%] ">
                      Connect your chatbot effortlessly with a wide range of
                      applications. Enhance your workflow by integrating with
                      popular tools and services, making your chatbot even more
                      versatile and efficient.
                    </p>
                  </div>
                </div>
                <div className=" w-full flex items-center justify-center gap-2">
                  <div className=" flex items-center gap-2 border px-4 py-2 rounded-full">
                    <img src="/slack2.png" className=" w-8 h-8" />
                    <span className=" font-medium text-xl">Slack</span>
                  </div>
                  <div className=" flex items-center  gap-2 bg-black text-white  px-4 py-2 rounded-full">
                    <span className=" font-normal text-lg">
                      more to come...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="  w-full bg-[#fff] py-[120px] relative ">
              <div className=" w-full bg-white mx-auto space-y-12 z-[5] relative lg:px-0 px-6 rounded-md ">
                <div className=" lg:flex items-center justify-between w-full lg:space-y-0 space-y-4  ">
                  <div className=" lg:w-[80%] ">
                    <div className=" space-y-[20px]">
                      <h1 className=" md:text-[42px] md:leading-[50px] font-[500] text-[38px] leading-[45px] text-start ">
                        Use Cases
                      </h1>
                    </div>
                  </div>
                  <div className=" flex items-center gap-4 lg:justify-center">
                    <button className="px-6 min-w-[max-content] py-2.5 rounded-md border  text-[16px] font-medium leading-[20px]  bg-black hover:bg-slate-900 text-white border-black ">
                      By Industry
                    </button>
                    <button className="px-6 min-w-[max-content] py-2.5 rounded-md border  text-[16px] font-medium leading-[20px]  border-black ">
                      By Role
                    </button>
                  </div>
                </div>
                <div className=" flex items-center flex-wrap gap-4 w-full">
                  <button className=" rounded-md px-4 py-2  border-black text-[16px] font-medium leading-[20px]  bg-blue-500 text-white ">
                    Life Sciences
                  </button>
                </div>
                <div className=" w-full   gap-5">
                  <div className="grid lg:border-none border gap-5 border-gray-200  lg:grid-cols-2 w-full   text-black  relative ">
                    <div className="  w-full flex  justify-center  lg:order-1 lg:p-0 p-4 ">
                      <div className="  w-full text-start">
                        <div className="  w-full">
                          <h1 className=" font-display text-[34px] leading-[125%] tracking-tight  text-blue-500   font-semibold">
                            Life Sciences
                          </h1>
                        </div>
                        <div className=" mt-6 flex flex-col space-y-8 w-full lg:p-0">
                          {itemList.map((item, index) => (
                            <div
                              key={index}
                              className=" group rounded-md w-full p-3 cursor-pointer   hover:bg-blue-500   "
                            >
                              <div className=" flex items-start gap-4">
                                <div className=" space-y-2">
                                  <h1 className=" text-[18px] leading-[24px] font-semibold  group-hover:text-white">
                                    {item.h1}
                                  </h1>
                                  <p className=" text-[16px] font-normal  text-gray-600  group-hover:text-gray-100 ">
                                    {item.p}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className=" sticky top-0 self-start min-h-[600px]  flex items-center p-12 justify-center h-[max-content]  lg:order-2 bg-[#eeeeee]     overflow-hidden  ">
                      <video
                        autoPlay
                        src="https://static.quills.ai/quills_lifesciences.mp4"
                        className=" max-w-[80%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="  w-full bg-[#fafafa] rounded-xl">
                <div className=" py-[150px]  lg:w-[75%] w-[85%] mx-auto">
                  <div className=" text-center space-y-3 text-black">
                    <div className=" space-y-[20px]">
                      <h1 className=" md:text-[42px] md:leading-[50px] font-[500] text-[38px] leading-[45px] ">
                        Explore common questions about Quills.ai and find
                        answers
                      </h1>
                    </div>
                  </div>
                  <div className=" flex flex-col mt-[100px] lg:w-[70%] w-full mx-auto gap-4 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisualData;
