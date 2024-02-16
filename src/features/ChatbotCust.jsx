import { FaRobot, FaLocationArrow } from "react-icons/fa";
import { FaArrowRightLong, FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowDroprightCircle } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { IconContext } from "react-icons";

function ChatbotCust() {
  // const uiCustmization =
  // { logoURL: "https://static.quills.ai/quills.png" ,
  //  logoRounded: " " ,
  //  chatHeadingPosition: {"Logo on Side", "Logo at Start", "Text at Start"} ,
  //  botTitle: "Quills.ai" ,
  //  botSubtitle: " Chat with us" ,
  // headerBackgroundColor: "#111827 " ,
  //  headerTextColor: " #ffffff" ,
  //  subheaderTextColor: "#282828 " ,
  //  subheaderBackgroundColor: "#282828 " ,
  //  chatWindowBackgroundColor: "#f1f1f1   " ,

  //   chatWindowBackgroundImageLink:
  //     " ",
  // ,
  //  chatWindowBorderColor: "#282828 " ,
  //  botDefaultMessage: "👋 Hi Iam Quills bot. How can I help you?" ,
  //  botMessageBackgroundColor: "#282828 " ,
  //  botMessageTextColor: " #282828" ,
  //  userMessageBackgroundColor: "v " ,
  //  userMessageTextColor: " #282828" ,
  //  sendBarBackgroundColor: "#282828 " ,
  //  inputPlaceholderText: " " ,
  //  inputBackgroundColor: "#282828" ,
  // inputTextColor: "#282828 " ,
  // sendButtonIcon: " " ,
  // sendIconColor: " #282828" }

  return (
    <div
      id="chat"
      className=" pb-28 pt-[100px] mx-auto relative bg-[#1f1f1f] w-full"
    >
      <div className="md:w-[80%] w-[95%] text-white mx-auto space-y-4">
        <div className="flex items-center gap-2  border border-[#b6bccd] rounded-full w-[max-content] px-4 py-2 mx-auto">
          <FaRobot />
          <h1 className="md:text-base text-[12px]">Chatbot</h1>
        </div>
        <div className="flex flex-col items-center text-center space-y-4 mx-auto w-full pb-8">
          <h1 className="md:text-[3.4rem]  font-[500] leading-[1.2] text-[2.4rem] md:leading-[1.3]">
            Chatbot Customization
          </h1>
          <h6 className=" text-gray-300 md:text-[16px] mx-auto font-[300] leading-[160%] text-[18px] md:w-[85%]">
            Tailor our platform to meet your unique project requirements. We
            understand that one size doesn't fit all, so we offer customizable
            solutions that adapt to your specific needs.
          </h6>
        </div>
        <div className="w-full mx-auto p-2 bg-[#262626] border border-[#484848] rounded-2xl space-y-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-5 w-full relative">
            <div className="bg-[#303030] border border-[#484848] z-[5] h-[max-content] rounded-lg lg:p-4 p-2 lg:sticky top-[20px] shadow-md lg:col-span-3 col-span-1">
              <h2 className="text-lg font-semibold mb-4">Chat Preview</h2>
              <div className="overflow-hidden w-full shadoe-lg rounded-lg bg-grey-200 border border-white">
                <div className="flex justify-start gap-2 items-center py-2 px-4 w-full bg-[#111827]color">
                  <img
                    src="/quills.png"
                    alt="Chatbot logo"
                    className="w-8 h-8 order-1 rounded-full"
                  />
                  <div className="order-2">
                    <h2 className="text-lg font-semibold">Quills.ai</h2>
                    <p className="text-xs">Chat with us</p>
                  </div>
                </div>
                <div className="bg-white w-full">
                  <div className="py-2 max-h-[450px] min-h-[450px] overflow-scroll flex flex-col justify-between">
                    <div>
                      <div className="chat chat-start max-w-[700px] flex justify-start pl-4">
                        <div className="chat-bubble text-[14px] bg-[white] text-black border-2 leading-[20px] w-[max-content] py-2 px-4 rounded-full rounded-bl-none">
                          <p>👋 Hi Iam Quills bot. How can I help you?</p>
                        </div>
                      </div>
                      <div className=" chat chat-end mt-4 pr-4 max-w-[700px] flex justify-end">
                        <div className="chat-bubble  text-[14px] leading-[20px] bg-[#262626] py-2 px-4 w-[max-content] rounded-full rounded-br-none ">
                          <p>Message from the users</p>
                        </div>
                      </div>
                    </div>
                    <div className=" pb-2 shadow-sm">
                      <div className=" flex  items-center gap-2 p-2">
                        <input
                          className="w-full border placeholder:font-light rounded-full focus:outline-sky-400 py-2 px-4  bg-white text-black"
                          placeholder="Type a message..."
                          type="text"
                        />
                        <BiSolidMessageRounded size="1.5rem" color="#000" />
                      </div>
                      <p className=" text-center font-light text-xs text-gray-300">
                        Powered by Kloudhunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:col-span-5 col-span-1 w-full space-y-6 bg-transparent rounded-lg pe-4">
              <h2 className="text-lg font-semibold text white">
                UI Customization
              </h2>
              <div className="w-full grid md:grid-cols-2 gap-5">
                <div className="space-y-2 w-full">
                  <label className="block text-sm font-medium text-white">
                    Logo URL
                  </label>
                  <input
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] xs:max-w-full max-w-[200px]"
                    type="text"
                    value="  https://static.quills.png"
                  />
                </div>
                <div className="space-y-2 w-full  ">
                  <label className="block text-sm font-medium text-white">
                    Chat Heading Position
                  </label>
                  <select className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]">
                    <option value="logo-start">Logo at Start</option>
                    <option value="text-start">Text at Start</option>
                  </select>
                </div>
                <div className="space-y-2 w-full   ">
                  <label className="block text-sm font-medium text-white">
                    Bot Title
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    value="Quills.ai"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Subtitle
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828]  xs:max-w-full max-w-[200px]"
                    value=" Chat with us"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Header Background Color
                  </label>
                  <input
                    type="color"
                    className="  p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#111827"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Header Text Color
                  </label>
                  <input
                    type="color"
                    className=" p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#ffffff"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Subheader Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="f1f1f1"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Subheader Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Chat Window Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#f1f1f1"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Chat Window Background Image Link
                  </label>
                  <input
                    placeholder="https://images.unsplash.com/photo-1517384084767-6bc118943770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    value
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Chat Window Border Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#dcdcdc"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Default Message
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    value="👋 Hi Iam Quills bot. How can I help you?"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Message Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="blue-200"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Message Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="blue-900"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    User Message Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    Value="gray-200"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    User Message Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="gray-900"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Send Bar Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="blue-500"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Input Placeholder Text
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    value="Type a message..."
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Input Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#fff"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Input Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#000"
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Send Button Icon
                  </label>
                  <div className=" items-center flex gap-5 justify-center">
                    <IconContext.Provider value={{ size: "1.3rem" }}>
                      <FaArrowRightLong />
                      <FaCircleArrowRight />
                      <IoIosArrowForward />
                      <IoIosArrowDroprightCircle />
                      <FaLocationArrow />
                      <TiArrowForward />
                      <BiSolidMessageRounded color="#00bfff" />
                    </IconContext.Provider>
                  </div>
                </div>

                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Send Icon Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value="#121826"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatbotCust;
