import Screen from "../features/Screen";
import Companies from "../features/Companies";
import DataEmp from "../features/DataEmp";
import ChatbotCust from "../features/ChatbotCust";
import DataExp from "../features/DataExp";
import Brands from "../features/Brands";
import VisualData from "../features/VisualData";
import { useEffect, useRef } from "react";
import Testimonial from "../features/Testimonial";

function Home() {
  const chatbotref = useRef(null);
  useEffect(() => {
    const pathname = window.location.pathname.split("/");
    {
      pathname[1] === "chatbot"
        ? window.scrollTo({
            top: chatbotref.current.offsetTop,
            behaviour: "smooth",
          })
        : window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div>
      <Screen />
      <Companies />
      <DataEmp />
      <ChatbotCust ref={chatbotref} />
      <DataExp />
      <Brands />
      <VisualData />
      {/* <Testimonial /> */}
    </div>
  );
}
export default Home;
