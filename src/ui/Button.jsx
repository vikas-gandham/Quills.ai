import { Link } from "react-router-dom";

function Button({ children, to, type }) {
  const styles = {
    primary:
      "px-5 py-2.5 inline-block text-sm bg-blue-500 font-semibold text-blue-50 transition-colors duration-300 focus:outline-none hover:bg-blue-300 rounded-lg border-b-2 border border-blue-400 text-[14px]",
    secondary:
      "px-5 py-2.5 inline-block text-sm bg-none outline-blue-500 font-semibold text-blue-500 transition-colors duration-300 focus:outline-none hover:text-black rounded-lg border-b-2 border border-blue-400 text-[14px]",
    bgnone:
      "px-5 py-2.5 inline-block text-sm bg-none outline-none font-semibold transition-colors duration-300 focus:outline-none hover:text-blue-500 text-black text-[14px]",
    bgtrans:
      "px-5 py-2.5 inline-block text-sm bg-[#f5f5f5] outline-blue-500 font-semibold text-black transition-all duration-300 focus:outline-none hover:text-white rounded-lg border-b-2 border border-transparent border-grey-700 hover:bg-gray-500 text-[14px]",
  };

  return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  );
}
export default Button;
