function PrivacyPolicy() {
  const anchorList = [
    "Information We Collect",
    "How We Use and Share Information",
    "How We Protect Information",
    "Your Rights Regarding the Use of Your Personal Information",
    "Links to Other Websites",
    "Changes to Our Privacy Policy",
    "Contact Us",
  ];
  return (
    <div className=" w-full py-[120px] bg-white dark:text-black ">
      <div className=" lg:w-[80%] mx-auto px-6 lg:px-0  ">
        <div className=" space-y-[50px]">
          <h1 className=" font-semibold text-center md:text-[40px] text-[30px] leading-[30px] text-[#112448] ">
            Quills PRIVACY POLICY
          </h1>
          <div className=" w-full space-y-4">
            <p className=" text-justify">
              Quills (the “Company”) is committed to maintaining robust privacy
              protections for its users. Our Privacy Policy (“Privacy Policy”)
              is designed to help you understand how we collect, use and
              safeguard the information you provide to us and to assist you in
              making informed decisions when using our Service.
            </p>
            <p className=" text-justify">
              For purposes of this Agreement, “Site” refers to the Company’s
              website, which can be accessed at https://www.quills.ai. The terms
              “we,” “us,” and “our” refer to the Company. “You” refers to you,
              as a user of our Site or our Service. By accessing our Site or our
              Service, you accept our Privacy Policy and Terms of Use (found
              here:"
              <a href="#" className="text-blue-500 underline">
                https://www.quills.ai/terms-conditions
              </a>
              "), and you consent to our collection, storage, use and disclosure
              of your Personal Information as described in this Privacy Policy.
            </p>
          </div>
          <div className=" w-full grid md:grid-cols-6 grid-cols-1 relative">
            <div className=" md:col-span-2 col-span-1 md:block hidden pl-4 list-disc space-y-4 sticky top-[100px] h-[max-content]">
              {anchorList.map((item, index) => (
                <a
                  key={index}
                  className=" list-item text-[#112448]  font-medium text-[14px] leading-[20px] cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
            <div id="1" className=" md:col-span-4  col-span-1 space-y-8">
              <div className=" space-y-6">
                <h1 className=" font-medium text-[20px] leading-[20px]">
                  I. INFORMATION WE COLLECT
                </h1>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  We collect “Non-Personal Information” and “Personal
                  Information.” Non-Personal Information includes information
                  that cannot be used to personally identify you, such as
                  anonymous usage data, general demographic information we may
                  collect, referring/exit pages and URLs, platform types,
                  preferences you submit and preferences that are generated
                  based on the data you submit and number of clicks. Personal
                  Information includes your which you submit to us through the
                  registration process at the Site.
                </p>
                <ul className=" pl-5 space-y-4">
                  <li className=" space-y-2">
                    <h1 className=" font-medium text-[20px] leading-[20px]">
                      1. Information collected via Technology
                    </h1>
                    <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                      To activate the Service you do not need to submit any
                      Personal Information other than your email address. To use
                      the Service thereafter, you do not need to submit further
                      Personal Information. However, in an effort to improve the
                      quality of the Service, we track information provided to
                      us by your browser or by our software application when you
                      view or use the Service, such as the website you came from
                      (known as the “referring URL”), the type of browser you
                      use, the device from which you connected to the Service,
                      the time and date of access, and other information that
                      does not personally identify you. We track this
                      information using cookies, or small text files which
                      include an anonymous unique identifier. Cookies are sent
                      to a user’s browser from our servers and are stored on the
                      user’s computer hard drive. Sending a cookie to a user’s
                      browser enables us to collect Non-Personal information
                      about that user and keep a record of the user’s
                      preferences when utilizing our services, both on an
                      individual and aggregate basis. The Company may use both
                      persistent and session cookies; persistent cookies remain
                      on your computer after you close your session and until
                      you delete them, while session cookies expire when you
                      close your browser.
                    </p>
                  </li>
                  <li className=" space-y-2">
                    <h1 className=" font-medium text-[20px] leading-[20px]">
                      2. Information you provide us by registering for an
                      account
                    </h1>
                    <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                      In addition to the information provided automatically by
                      your browser when you visit the Site, to become a
                      subscriber to the Service you will need to create a
                      personal profile. You can create a profile by registering
                      with the Service and entering your email address, and
                      creating a user name and a password. By registering, you
                      are authorizing us to collect, store and use your email
                      address in accordance with this Privacy Policy.
                    </p>
                  </li>
                  <li className=" space-y-2">
                    <h1 className=" font-medium text-[20px] leading-[20px]">
                      3. Children’s Privacy
                    </h1>
                    <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                      The Site and the Service are not directed to anyone under
                      the age of 13. The Site does not knowingly collect or
                      solicit information from anyone under the age of 13, or
                      allow anyone under the age of 13 to sign up for the
                      Service. In the event that we learn that we have gathered
                      personal information from anyone under the age of 13
                      without the consent of a parent or guardian, we will
                      delete that information as soon as possible. If you
                      believe we have collected such information, please contact
                      us at
                      <a href="#" className=" underline text-blue-500">
                        support@www.quills.ai.
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
