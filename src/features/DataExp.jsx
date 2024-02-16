import {
  FaLanguage,
  FaCalendar,
  FaDatabase,
  FaRobot,
  FaSlack,
  FaCode,
} from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";

function DataExp() {
  const itemList = [
    {
      logo: <FaLanguage />,
      h1: "Natural Language Interaction",
      p: "Interact with your data using plain language, making data exploration intuitive.",
    },
    {
      logo: <FaCode />,
      h1: "SQL Query Generation",
      p: "Automatically generate SQL queries to simplify data analysis tasks.",
    },

    {
      logo: <RiGalleryFill />,
      h1: "Data Visualization & Exports",
      p: "Create stunning visualizations and export data in various formats for insights and sharing.",
    },
    {
      logo: <FaDatabase />,
      h1: "Databases as well as File Sources",
      p: "Connect to databases and import data from various file sources for comprehensive analysis.",
    },
    {
      logo: <FaRobot />,
      h1: "Chatbot Integration",
      p: "Interact with your data using plain language, making data exploration intuitive.",
    },
    {
      logo: <FaSlack />,
      h1: "Slack Integration",
      p: "Integrate with Slack for collaborative data discussions and sharing within your team.",
    },
  ];

  return (
    <div className=" py-[100px] bg-white    z-[5]  w-full  relative ">
      <div className=" lg:w-full  w-[95%]  mx-auto space-y-16 z-[5] relative">
        <div className=" text-center space-y-3 md:w-[80%] mx-auto">
          <div className=" space-y-[24px]  ">
            <div className="  shadow-blue-100 flex items-center w-[max-content]  py-2 px-4 gap-2 border border-[#b6bccd] rounded-full mx-auto  shadow-md">
              <div>
                <FaCalendar />
              </div>
              <div>
                <h1 className="md:text-base text-[12px]">Get Started Today</h1>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-4 justify-between items-center ">
              <h1 className="  text-[#012447] md:text-[3.4rem] font-[500] text-[2.4rem] leading-[1.2] md:leading-[1.3 ">
                Ready to Revolutionize Your Data Experience?
              </h1>
              <h6 className="  text-[#012447] md:text-[16px]  mx-auto font-[300] leading-[160%] text-[18px] md:w-[85%] ">
                Join the revolution in data management! Get started today and
                experience the convenience of conversational data interaction.
                Whether you're a data novice or an experienced analyst, our
                product adapts to your needs. Sign up for a trial and explore
                the future of data engagement.
              </h6>
            </div>
          </div>
        </div>
        <div className="  w-full grid lg:grid-cols-2 gap-12">
          <div className=" w-full flex items-center lg:justify-end justify-center  col-span-1">
            <div className=" md:w-[80%]  w-full  grid md:grid-cols-2 gap-12">
              {itemList.map((item, index) => (
                <div
                  key={index}
                  className=" space-y-2 flex md:items-start items-center flex-col md:text-start text-center "
                >
                  <div className=" flex items-center justify-center w-[45px] h-[45px] bg-[#e5f4fd] text-blue-500 rounded-lg text-lg">
                    {item.logo}
                  </div>
                  <h3 className=" text-[#1f2937] [word-spacing:0px] font-semibold text-[18px]">
                    {item.h1}
                  </h3>
                  <p className=" text-[#555e67] [word-spacing:0px] font-medium">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" col-span-1 lg:w-full md:w-[80%] md:block hidden  w-full mx-auto border-t-2 border-l-2 rounded-tl-2xl shadow-md">
            <img
              src="/sc.png"
              className=" max-w-full max-h-full rounded-tl-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataExp;
