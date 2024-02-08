import { BsStars } from "react-icons/bs";
import Button from "../ui/Button";
import { RiRecordCircleLine } from "react-icons/ri";

function Screen() {
  return (
    <div className="pt-[100px] pb-[50px] md:w-[80%] w-[90% mx-auto text-center reltive z-[2]">
      <div className="lg:w-[75%] mx-auto space-y-[40px]">
        <div className="flex items-center justify-center gap-2 px-4 py-2  border border-grey shadow-sm bg-white shadow-blue-100 break-all mx-auto rounded-full w-[max-content] ">
          <BsStars color="#387ff5" />
          <h1 className="md:text-base text-[12px] font-medium">
            Generative Business Intelligence for Analysis
          </h1>
        </div>
        <div className="space-y-[24px] w-full flex flex-col items-center justify-between">
          <h1 className="text-[#131316] md:text-[64px] font-[500] text-[36px] leading-[110%]">
            AI-Driven Chatbot with Instant SQL Query Generation
          </h1>
          <img src="/curve.png" className="rotate-180 max-w-[200px]" />
          <p className="text-[#131316] md:text-[20px] w-full mx-auto font-[400] leading-[160%] text-[18px] font-sans">
            Connect databases, CSVs, and Excel effortlessly and start chatting
            in plan english. Save time and rev up productivity with in-app chat,
            Slack, chatbots, etc.. Speed up data-driven decisions with a 63%
            boost in efficiency!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button to="/login" type="primary">
              Get Started
            </Button>
            <Button to="/bookdemo" type="bgtrans">
              <div className="flex items-center justify-center gap-1">
                <RiRecordCircleLine /> Book a Demo
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Screen;
