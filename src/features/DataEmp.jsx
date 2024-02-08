import { HiDatabase } from "react-icons/hi";

function DataEmp() {
  return (
    <div className="mx-[110px] my-[50px] py-[50px]">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center gap-1  border border-grey bg-white rounded-full w-[max-content] mx-auto px-4 py-2 shadow-sm shadow-blue-100">
          <HiDatabase />
          <h1 className="font-medium">Insightful Data Queries — Your Way</h1>
        </div>
        <h1 className="text-[#012447] md:text-[3.4rem] leading-[1.2] md:leading-[1.3]">
          Data Empowerment
        </h1>
      </div>
    </div>
  );
}
export default DataEmp;
