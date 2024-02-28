import Screen from "../features/Screen";
import Companies from "../features/Companies";
import DataEmp from "../features/DataEmp";
import ChatbotCust from "../features/ChatbotCust";
import DataExp from "../features/DataExp";
import Brands from "../features/Brands";
import VisualData from "../features/VisualData";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Screen />
      <Companies />
      <DataEmp />
      <ChatbotCust />
      <DataExp />
      <Brands />
      <VisualData />
    </div>
  );
}
export default Home;
