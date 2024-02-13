import DemoButton from "../features/DemoButton";

function LifeSciences() {
  return (
    <div className=" w-[90%]  mx-auto z-[5] relative">
      <div className=" lg:w-[60%] py-[200px]">
        <div className=" space-y-[20px]">
          <h1 className="undefined md:text-[50px] md:leading-[60px] font-[700] text-[30px] leading-[45px] ">
            Generative AI in Life Sciences
          </h1>
          <p className=" undefined md:text-[20px]  w-full  font-[400] md:leading-[40px] text-[16px] leading-[24px] ">
            Generative AI is transforming life sciences, making drug discovery
            quicker, tailoring care to each patient's needs, and uncovering
            valuable insights from biomedical data. Our innovative solutions
            leverage powerful algorithms and predictive models to revolutionise
            research, product development, and improve health outcomes for
            patients.
          </p>

          <DemoButton />
        </div>
      </div>
    </div>
  );
}
export default LifeSciences;