import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" my-24 text-center">
      <h1>Chatbot</h1>
    </div>
  );
}
export default Chatbot;
