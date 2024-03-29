import { FaRobot, FaLocationArrow } from "react-icons/fa";
import { FaArrowRightLong, FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowDroprightCircle } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { useState } from "react";
import { forwardRef } from "react";

const ChatbotCust = forwardRef(function ChatbotCust(props, ref) {
  const [uiCust, setUiCust] = useState({
    logoURL: " https://static.quills.png",
    logoRounded: true,
    chatHeadingPosition: " logo-side",
    botTitle: "Quills.ai",
    botSubtitle: " Chat with us",
    headerBackgroundColor: " #111827",
    headerTextColor: "#ffffff",
    subheaderTextColor: "#f1f1f1",
    subheaderBackgroundColor: "#111827",
    chatWindowBackgroundColor: "#f1f1f1",
    chatWindowBackgroundImageLink:
      "https://images.unsplash.com/photo-1517384084767-6bc118943770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    chatWindowBorderColor: "#dcdcdc",
    botDefaultMessage: "👋 Hi Iam Quills bot. How can I help you?",
    botMessageBackgroundColor: "blue-200",
    botMessageTextColor: "blue-900",
    userMessageBackgroundColor: "gray-200",
    userMessageTextColor: "gray-900",
    sendBarBackgroundColor: "blue-500",
    inputPlaceholderText: "Type a message...",
    inputBackgroundColor: "#fff",
    inputTextColor: "#000",
    sendButtonIcon: "arrow7",
    sendIconColor: "#121826",
  });

  return (
    <div
      ref={ref}
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
              <div
                className="overflow-hidden w-full shadow-lg rounded-lg bg-grey-200 border border-white"
                style={{ borderColor: uiCust.chatWindowBorderColor }}
              >
                {uiCust.chatHeadingPosition === "logo-start" ? (
                  <div
                    className=" flex justify-between  items-center py-2 px-4 w-full "
                    style={{ backgroundColor: uiCust.headerBackgroundColor }}
                  >
                    <img
                      src="/quills.png"
                      alt="Chatbot logo"
                      className="w-8 h-8 order-1 rounded-full"
                    />
                    <div className="order-2">
                      <h2
                        className="text-lg font-semibold "
                        style={{ color: uiCust.headerTextColor }}
                      >
                        {uiCust.botTitle}
                      </h2>
                      <p
                        className="text-xs"
                        style={{
                          color: uiCust.subheaderTextColor,
                          backgroundColor: uiCust.subheaderBackgroundColor,
                        }}
                      >
                        {uiCust.botSubtitle}
                      </p>
                    </div>
                  </div>
                ) : uiCust.chatHeadingPosition === "text-start" ? (
                  <div
                    className=" flex justify-between  items-center py-2 px-4 w-full "
                    style={{ backgroundColor: uiCust.headerBackgroundColor }}
                  >
                    <div className="order-1">
                      <h2
                        className="text-lg font-semibold "
                        style={{ color: uiCust.headerTextColor }}
                      >
                        {uiCust.botTitle}
                      </h2>
                      <p
                        className="text-xs"
                        style={{
                          color: uiCust.subheaderTextColor,
                          backgroundColor: uiCust.subheaderBackgroundColor,
                        }}
                      >
                        {uiCust.botSubtitle}
                      </p>
                    </div>

                    <img
                      src="/quills.png"
                      alt="Chatbot logo"
                      className="w-8 h-8 order-1 rounded-full"
                    />
                  </div>
                ) : (
                  <div
                    className=" flex justify-start gap-2 items-center py-2 px-4 w-full "
                    style={{ backgroundColor: uiCust.headerBackgroundColor }}
                  >
                    <img
                      src="/quills.png"
                      alt="Chatbot logo"
                      className="w-8 h-8 order-1 rounded-full"
                    />
                    <div className="order-2">
                      <h2
                        className="text-lg font-semibold "
                        style={{ color: uiCust.headerTextColor }}
                      >
                        {uiCust.botTitle}
                      </h2>
                      <p
                        className="text-xs"
                        style={{
                          color: uiCust.subheaderTextColor,
                          backgroundColor: uiCust.subheaderBackgroundColor,
                        }}
                      >
                        {uiCust.botSubtitle}
                      </p>
                    </div>
                  </div>
                )}
                <div
                  className=" w-full"
                  style={{
                    backgroundColor: uiCust.chatWindowBackgroundColor,
                  }}
                >
                  <div className="py-2 max-h-[450px] min-h-[450px] overflow-scroll flex flex-col justify-between">
                    <div>
                      <div
                        className="chat chat-start max-w-[700px] flex justify-start pl-4"
                        style={{ borderColor: uiCust.chatWindowBorderColor }}
                      >
                        <div
                          className="chat-bubble text-[14px] bg-[white] text-black border-2 leading-[20px] w-[max-content] py-2 px-4 rounded-full rounded-bl-none"
                          style={{
                            backgroundColor: uiCust.botMessageBackgroundColor,
                            color: uiCust.botMessageTextColor,
                          }}
                        >
                          <p>{uiCust.botDefaultMessage}</p>
                        </div>
                      </div>
                      <div className=" chat chat-end mt-4 pr-4 max-w-[700px] flex justify-end">
                        <div
                          className="chat-bubble  text-[14px] leading-[20px] bg-[#262626] py-2 px-4 w-[max-content] rounded-full rounded-br-none "
                          style={{
                            backgroundColor: uiCust.userMessageBackgroundColor,
                            color: uiCust.userMessageTextColor,
                          }}
                        >
                          <p>Message from the users</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" pb-2 shadow-sm"
                      style={{ backgroundColor: uiCust.sendBarBackgroundColor }}
                    >
                      <div className=" flex  items-center gap-2 p-2">
                        <input
                          className="w-full border placeholder:font-light rounded-full focus:outline-sky-400 py-2 px-4  bg-white text-black"
                          style={{
                            backgroundColor: uiCust.inputBackgroundColor,
                            color: uiCust.inputTextColor,
                          }}
                          placeholder={uiCust.inputPlaceholderText}
                          type="text"
                        />

                        {uiCust.sendButtonIcon === "arrow1" ? (
                          <FaArrowRightLong
                            size="1.3rem"
                            color={uiCust.sendIconColor}
                          />
                        ) : uiCust.sendButtonIcon === "arrow2" ? (
                          <FaCircleArrowRight
                            size="1.3rem"
                            color={uiCust.sendIconColor}
                          />
                        ) : uiCust.sendButtonIcon === "arrow3" ? (
                          <IoIosArrowForward
                            size="1.3rem"
                            color={uiCust.sendIconColor}
                          />
                        ) : uiCust.sendButtonIcon === "arrow4" ? (
                          <IoIosArrowDroprightCircle
                            size="1.3rem"
                            color={uiCust.sendIconColor}
                          />
                        ) : uiCust.sendButtonIcon === "arrow5" ? (
                          <FaLocationArrow
                            size="1.3rem"
                            color={uiCust.sendIconColor}
                          />
                        ) : uiCust.sendButtonIcon === "arrow6" ? (
                          <TiArrowForward
                            size="1.3rem"
                            color={uiCust.sendIconColor}
                          />
                        ) : (
                          <BiSolidMessageRounded
                            size="1.5rem"
                            color={uiCust.sendIconColor}
                          />
                        )}
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
                    value={uiCust.logoURL}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        logoURL: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full  z-[1] relative ">
                  <label className="block text-sm font-medium text-white">
                    Logo Rounded
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      className="sr-only peer"
                      type="checkbox"
                      checked={uiCust.logoRounded}
                      onChange={(e) => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          logoRounded: e.target.checked,
                        }));
                      }}
                    ></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                  </label>
                </div>
                <div className="space-y-2 w-full  ">
                  <label className="block text-sm font-medium text-white">
                    Chat Heading Position
                  </label>
                  <select
                    value={uiCust.chatHeadingPosition}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        chatHeadingPosition: e.target.value,
                      }));
                    }}
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                  >
                    <option value="logo-side">Logo on Side</option>
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
                    value={uiCust.botTitle}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        botTitle: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Subtitle
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828]  xs:max-w-full max-w-[200px]"
                    value={uiCust.botSubtitle}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        botSubtitle: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Header Background Color
                  </label>
                  <input
                    type="color"
                    className="  p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.headerBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        headerBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Header Text Color
                  </label>
                  <input
                    type="color"
                    className=" p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.headerTextColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        headerTextColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Subheader Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.subheaderTextColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        subheaderTextColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Subheader Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.subheaderBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        subheaderBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Chat Window Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.chatWindowBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        chatWindowBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Chat Window Background Image Link
                  </label>
                  <input
                    placeholder={uiCust.chatWindowBackgroundImageLink}
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        chatWindowBackgroundImageLink: e.target.placeholder,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Chat Window Border Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.chatWindowBorderColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        chatWindowBorderColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Default Message
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    value={uiCust.botDefaultMessage}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        botDefaultMessage: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Message Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.botMessageBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        botMessageBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Bot Message Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.botMessageTextColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        botMessageTextColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    User Message Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.userMessageBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        userMessageBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    User Message Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.userMessageTextColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        userMessageTextColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Send Bar Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.sendBarBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        sendBarBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Input Placeholder Text
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md py-2 px-3 text-white bg-[#282828] dark:bg-[#282828] xs:max-w-full max-w-[200px]"
                    value={uiCust.inputPlaceholderText}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        inputPlaceholderText: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Input Background Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.inputBackgroundColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        inputBackgroundColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Input Text Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.inputTextColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        inputTextColor: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Send Button Icon
                  </label>
                  <nav className=" flex gap-4 ">
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow1",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow1" ? (
                        <FaArrowRightLong size="1.3rem" color="#00bfff" />
                      ) : (
                        <FaArrowRightLong size="1.3rem" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow2",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow2" ? (
                        <FaCircleArrowRight size="1.3rem" color="#00bfff" />
                      ) : (
                        <FaCircleArrowRight size="1.3rem" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow3",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow3" ? (
                        <IoIosArrowForward size="1.3rem" color="#00bfff" />
                      ) : (
                        <IoIosArrowForward size="1.3rem" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow4",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow4" ? (
                        <IoIosArrowDroprightCircle
                          size="1.3rem"
                          color="#00bfff"
                        />
                      ) : (
                        <IoIosArrowDroprightCircle size="1.3rem" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow5",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow5" ? (
                        <FaLocationArrow size="1.3rem" color="#00bfff" />
                      ) : (
                        <FaLocationArrow size="1.3rem" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow6",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow6" ? (
                        <TiArrowForward size="1.3rem" color="#00bfff" />
                      ) : (
                        <TiArrowForward size="1.3rem" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setUiCust((prevState) => ({
                          ...prevState,
                          sendButtonIcon: "arrow7",
                        }));
                      }}
                    >
                      {setUiCust.sendButtonIcon === "arrow7" ? (
                        <BiSolidMessageRounded size="1.3rem" color="#00bfff" />
                      ) : (
                        <BiSolidMessageRounded size="1.3rem" />
                      )}
                    </button>
                  </nav>
                </div>

                <div className="space-y-2 w-full ">
                  <label className="block text-sm font-medium text-white">
                    Send Icon Color
                  </label>
                  <input
                    type="color"
                    className="p-1 box-content   min-h-[20px] min-w-[40px] bg-[#282828] dark:bg-[#282828]"
                    value={uiCust.sendIconColor}
                    onChange={(e) => {
                      setUiCust((prevState) => ({
                        ...prevState,
                        sendIconColor: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChatbotCust;
