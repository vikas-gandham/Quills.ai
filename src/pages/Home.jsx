import Screen from "../features/Screen";
import Companies from "../features/Companies";
import DataEmp from "../features/DataEmp";
import ChatbotCust from "../features/ChatbotCust";
import DataExp from "../features/DataExp";

function Home() {
  return (
    <div>
      <Screen />
      <Companies />
      <DataEmp />
      <ChatbotCust />
      <DataExp />
    </div>
  );
}
export default Home;
