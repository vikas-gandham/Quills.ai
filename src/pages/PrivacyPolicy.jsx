function PrivacyPolicy() {
  const anchorList = [
    { name: "Information We Collect", id: "#1" },
    { name: "How We Use and Share Information", id: "#2" },
    { name: "How We Protect Information", id: "#3" },
    {
      name: "Your Rights Regarding the Use of Your Personal Information",
      id: "#4",
    },
    { name: "Links to Other Websites", id: "#5" },
    { name: "Changes to Our Privacy Policy", id: "#6" },
    { name: "Contact Us", id: "#7" },
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
                  href={item.id}
                  className=" list-item text-[#112448]  font-medium text-[14px] leading-[20px] cursor-pointer scroll-py-6 "
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div id="1" className=" md:col-span-4  col-span-1 space-y-8 ">
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
              <div id="2" className=" space-y-6">
                <h1 className=" font-medium text-[20px] leading-[20px]">
                  II. HOW WE USE AND SHARE INFORMATION
                </h1>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  <span className=" font-medium">Personal Information:</span>
                  Except as otherwise stated in this Privacy Policy, we do not
                  sell, trade, rent or otherwise share for marketing purposes
                  your Personal Information with third parties without your
                  consent. We do share Personal Information with vendors who are
                  performing services for the Company, such as the servers for
                  our email communications who are provided access to user’s
                  email address for purposes of sending emails from us. Those
                  vendors use your Personal Information only at our direction
                  and in accordance with our Privacy Policy.
                </p>
                <p clasName=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  In general, the Personal Information you provide to us is used
                  to help us communicate with you. For example, we use Personal
                  Information to contact users in response to questions, solicit
                  feedback from users, provide technical support, and inform
                  users about promotional offers.
                </p>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  We may share Personal Information with outside parties if we
                  have a good-faith belief that access, use, preservation or
                  disclosure of the information is reasonably necessary to meet
                  any applicable legal process or enforceable governmental
                  request; to enforce applicable Terms of Service, including
                  investigation of potential violations; address fraud, security
                  or technical concerns; or to protect against harm to the
                  rights, property, or safety of our users or the public as
                  required or permitted by law.
                </p>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  <span>Non-Personal Information:</span>
                  In general, we use Non-Personal Information to help us improve
                  the Service and customize the user experience. We also
                  aggregate Non-Personal Information in order to track trends
                  and analyze use patterns on the Site. This Privacy Policy does
                  not limit in any way our use or disclosure of Non-Personal
                  Information and we reserve the right to use and disclose such
                  Non-Personal Information to our partners, advertisers and
                  other third parties at our discretion.
                </p>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  In the event we undergo a business transaction such as a
                  merger, acquisition by another company, or sale of all or a
                  portion of our assets, your Personal Information may be among
                  the assets transferred. You acknowledge and consent that such
                  transfers may occur and are permitted by this Privacy Policy,
                  and that any acquirer of our assets may continueto process
                  your Personal Information as set forth in this Privacy Policy.
                  If our information practices change at any time in the future,
                  we will post the policy changes to the Site so that you may
                  opt out of the new information practices. We suggest that you
                  check the Site periodically if you are concerned about how
                  your information is used.
                </p>
              </div>
              <div id="4" className=" space-y-6">
                <h1 className=" font-medium text-[20px] leading-[20px]">
                  IV. YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION
                </h1>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  You have the right at any time to prevent us from contacting
                  you for marketing purposes. When we send a promotional
                  communication to a user, the user can opt out of further
                  promotional communications by following the unsubscribe
                  instructions provided in each promotional email. Please note
                  that notwithstanding the promotional preferences you indicate
                  by either unsubscribing, we may continue to send you
                  administrative emails including, for example, periodic updates
                  to our Privacy Policy.
                </p>
              </div>
              <div id="5" className=" space-y-6">
                <h1 className=" font-medium text-[20px] leading-[20px]">
                  V. LINKS TO OTHER WEBSITES
                </h1>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  As part of the Service, we may provide links to or
                  compatibility with other websites or applications. However, we
                  are not responsible for the privacy practices employed by
                  those websites or the information or content they contain.
                  This Privacy Policy applies solely to information collected by
                  us through the Site and the Service. Therefore, this Privacy
                  Policy does not apply to your use of a third-party website
                  accessed by selecting a link on our Site or via our Service.
                  To the extent that you access or use the Service through or on
                  another website or application, then the privacy policy of
                  that other website or application will apply to your access or
                  use of that site or application. We encourage our users to
                  read the privacy statements of other websites before
                  proceeding to use them.
                </p>
              </div>
              <div id="6" className=" space-y-6">
                <h1 className=" font-medium text-[20px] leading-[20px]">
                  VI. CHANGES TO OUR PRIVACY POLICY
                </h1>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  The Company reserves the right to change this policy and our
                  Terms of Service at any time. We will notify you of
                  significant changes to our Privacy Policy by sending a notice
                  to the primary email address specified in your account or by
                  placing a prominent notice on our site. Significant changes
                  will go into effect 30 days following such notification.
                  Non-material changes or clarifications will take effect
                  immediately. You should periodically check the Site and this
                  privacy page for updates.
                </p>
              </div>
              <div id="7" className=" space-y-6">
                <h1 className=" font-medium text-[20px] leading-[20px]">
                  VII. CONTACT US
                </h1>
                <p className=" md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] text-justify">
                  If you have any questions regarding this Privacy Policy or the
                  practices of this Site, please contact us by sending an email
                  to
                  <a className=" underline text-blue-500" href="#">
                    support@www.quills.ai.
                  </a>
                </p>
                <p>
                  Last Updated: This Privacy Policy was last updated on
                  07/09/2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
