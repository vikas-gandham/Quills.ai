import DemoButton from "../features/DemoButton";
import { useEffect } from "react";

function Hospitality() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className=" w-full lg:min-h-[80vh] lg:py-0  bg-white flex items-center justify-start md:text-start text-center relative">
        <div className=" w-[90%]  mx-auto z-[5] relative">
          <div className=" lg:w-[60%] py-[200px]">
            <div className=" space-y-[20px]">
              <h1 className="undefined md:text-[50px] md:leading-[60px] font-[700] text-[30px] leading-[45px] ">
                Quills.ai - Empowering Hospitality with AI-Driven Data Insights
              </h1>
              <p className=" undefined md:text-[20px]  w-full  font-[400] md:leading-[40px] text-[16px] leading-[24px] ">
                Unlock the Power of Your Data in Plain English
              </p>
              <DemoButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hospitality;
