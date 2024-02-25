import DemoButton from "../features/DemoButton";

function Bfsi() {
  return (
    <div>
      <div className=" w-full lg:min-h-[80vh] lg:py-0  bg-white flex items-center justify-start md:text-start text-center relative">
        <div className=" w-[90%]  mx-auto z-[5] relative">
          <div className=" lg:w-[60%] py-[200px]">
            <div className=" space-y-[20px]">
              <h1 className="undefined md:text-[50px] md:leading-[60px] font-[700] text-[30px] leading-[45px] ">
                Generative AI in Banking, Financial Services, and Insurance
                Industry
              </h1>
              <p className=" undefined md:text-[20px]  w-full  font-[400] md:leading-[40px] text-[16px] leading-[24px] ">
                Generative AI is revolutionizing the Banking, Financial
                Services, and Insurance (BSFI) industry, optimizing financial
                processes, enhancing risk assessment, and providing data-driven
                insights to make informed decisions. Our innovative solutions
                leverage powerful algorithms and predictive models to transform
                banking, financial services, and insurance operations for
                increased efficiency and customer satisfaction.
              </p>
              <DemoButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bfsi;
