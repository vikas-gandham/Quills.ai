import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const cardList = [
    {
      img: "/NLI.png ",
      h1: "Natural Language Interaction ",
      p: "Interact with your data using plain language, making data exploration intuitive. ",
    },
    {
      img: " /SQL.png",
      h1: "SQL Query Generation",
      p: "Automatically generate SQL queries to simplify data analysis tasks. ",
    },
    {
      img: " /dv.png",
      h1: " Data Visualization & Exports",
      p: "Create stunning visualizations and export data in various formats for insights and sharing. ",
    },
    {
      img: "/grid.png ",
      h1: " Grid Options",
      p: " Customize and configure data grids for tailored data representation and analysis.",
    },
    {
      img: "/cp.png ",
      h1: " Custom Prompts",
      p: "Design personalized prompts for interactive and user-friendly data interactions. ",
    },
    {
      img: " /database.png",
      h1: "Databases as well as file sources ",
      p: " Connect to databases and import data from various file sources for comprehensive analysis.",
    },
    {
      img: "/ci.png ",
      h1: "Chatbot Integration ",
      p: " Incorporate chatbots for seamless and conversational data exploration and queries.",
    },
    {
      img: "/slack7.png ",
      h1: "Slack Integration ",
      p: " Integrate with Slack for collaborative data discussions and sharing within your team.",
    },
  ];
  return (
    <div className="w-full m-[40px] p-40 max-auto flex flex-col items-center justify-center gap-10 ">
      <div className="lg:w-[80%]  ">
        <h1 className=" md:text-[42px] md:leading-[50px] font-[500] text-[38px] leading-[45px] ">
          Personal AI chat assistant helping you to visualize the whole story
          from your data
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-[40px] ">
          {cardList.map((card, index) => (
            <div
              key={index}
              className="border transition-all ease-linear duration-300  hover:translate-y-2 bg-white rounded-[15px] overflow-hidden p-6"
            >
              <div className=" overflow-hidden w-full border  rounded-[7px] flex items-center justify-center py-4 max-h-[150px] min-h-[150px] relative bg-gradient-to-tl from-[#eaeaea] to-[#f6f6f6]">
                <img src="/bg-1.pnfg" className=" absolute " />
                <img src={card.img} className=" max-w-[70px] z-[5]" />
              </div>
              <div className="  flex flex-col  mt-6">
                <h1 className="font-display text-black text-[20px]   leading-[30px] font-medium ">
                  {card.h1}
                </h1>
                <p className="text-[16px] mt-2 leading-[20px] text-[#616161] tracking-tight">
                  {card.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 space-y-8 flex flex-col items-center">
        <h1 className=" md:text-[42px] md:leading-[50px] font-[500] text-[38px] leading-[45px] ">
          Trusted by
        </h1>
        <div className="flex items-center gap-10">
          <img src="c1.png" className="max-w-[150px] max-h-[60px]" />
          <img src="c6.png" className="max-w-[150px] max-h-[60px]" />
          <img src="logo2.png" className="max-w-[150px] max-h-[60px]" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
