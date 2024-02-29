import DemoButton from "../features/DemoButton";
import { useEffect } from "react";

function Logistics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className=" w-full lg:min-h-[80vh] lg:py-0  bg-white flex items-center justify-start md:text-start text-center relative">
        <div className=" w-[90%]  mx-auto z-[5] relative">
          <div className=" lg:w-[60%] py-[200px]">
            <div className=" space-y-[20px]">
              <h1 className="undefined md:text-[50px] md:leading-[60px] font-[700] text-[30px] leading-[45px] ">
                Generative AI in Manufacturing & Logistics Industry
              </h1>
              <p className=" undefined md:text-[20px]  w-full  font-[400] md:leading-[40px] text-[16px] leading-[24px] ">
                Generative AI is transforming the Manufacturing & Logistics
                industry, optimizing supply chains, enhancing production
                processes, and providing data-driven insights to streamline
                operations. Our innovative solutions harness powerful algorithms
                and predictive models to revolutionize manufacturing, logistics,
                and drive efficiency across the industry.
                <DemoButton />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logistics;
