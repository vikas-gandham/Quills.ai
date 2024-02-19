import Screen from "../features/Screen";
import Companies from "../features/Companies";
import DataEmp from "../features/DataEmp";
import ChatbotCust from "../features/ChatbotCust";
import DataExp from "../features/DataExp";
import Brands from "../features/Brands";
import VisualData from "../features/VisualData";

function Home() {
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
