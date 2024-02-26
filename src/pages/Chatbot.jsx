import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Chatbot() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=" my-24 text-center">
      <h1>Chatbot</h1>
    </div>
  );
}
export default Chatbot;
