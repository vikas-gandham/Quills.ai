import { useEffect } from "react";

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const termsList = [
    {
      h1: "Acceptance of Terms: ",
      p: "By accessing and using the Quills AI Website (built using React and Tailwind), you agree to abide by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using the website.",
    },
    {
      h1: "User Profile Access: ",
      p: "When you attempt to log in or register using your email on the Quills AI Website, you acknowledge and consent to the website owner having access to your user profile information. This information may include but is not limited to your name, email address, and any other details provided during the registration process. The website owner will handle this information in accordance with the Privacy Policy, ensuring the confidentiality and security of your personal data.",
    },
    {
      h1: "Use of the Website: ",
      p: "The Quills AI Website is provided for informational and communication purposes only. You must not use the website for any illegal or unauthorized purposes. You are solely responsible for your actions while using the website.",
    },
    {
      h1: "Intellectual Property: ",
      p: "The Quills AI Website, including its design, code, graphics, and content, is protected by intellectual property laws. All rights to the website's intellectual property belong to the website owner. You may not reproduce, modify, distribute, or use any part of the website without obtaining prior written permission from the website owner.",
    },
    {
      h1: "User Content: ",
      p: "When using the Quills AI Website, you may have the option to submit or upload content, including text and files. By submitting content, you grant the website owner a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute the content for the purpose of providing the chatbot services and improving the website's functionality.",
    },
    {
      h1: "Privacy and Data Protection: ",
      p: "The website owner is committed to protecting your privacy and handling your personal data in accordance with applicable privacy laws. By using the Quills AI Website, you acknowledge and agree to the website's Privacy Policy, which outlines how your personal information is collected, used, and stored.",
    },
    {
      h1: "Limitation of Liability: ",
      p: "The Quills AI Website is provided on an 'as is' basis without any warranties or guarantees. The website owner does not guarantee the accuracy, reliability, or availability of the website or its services. In no event shall the website owner be liable for any damages, losses, or expenses arising from the use or inability to use the website.",
    },
    {
      h1: "Third-Party Links: ",
      p: "The Quills AI Website may contain links to third-party websites or services that are not controlled or operated by the website owner. The website owner is not responsible for the content, privacy policies, or practices of any third-party websites. Accessing third-party links is at your own risk.",
    },
    {
      h1: "Modification of Terms: ",
      p: "The website owner reserves the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review the terms periodically. Continued use of the website after any modifications signifies your acceptance of the updated terms.",
    },
    {
      h1: "Governing Law and Jurisdiction: ",
      p: "These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where the website owner is based. Any disputes arising from the use of the website shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
    },
  ];
  return (
    <div>
      <div className=" w-full py-[120px] bg-white ">
        <div className=" lg:w-[90%] mx-auto px-6 lg:px-0 ">
          <div className=" space-y-[50px]">
            <h1 className=" font-semibold text-center md:text-[40px] text-[30px] leading-[30px] text-[#112448] ">
              Terms and Conditions - Quills AI Website
            </h1>
            <div>
              <ul className=" list-decimal pl-6 space-y-4 text-justify md:text-[16px] text-[14px] font-light text-[#112448] leading-[175%] ">
                {termsList.map((item, index) => (
                  <li key={index}>
                    <strong>{item.h1}</strong>
                    {item.p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-[90%] mx-auto px-6 lg:px-0  space-y-2  w-full pb-[120px] bg-white">
        <p>
          Please note that these terms and conditions are provided as a general
          guideline and may need to be customized to fit your specific website
          and legal requirements. It is recommended to consult with a legal
          professional to ensure compliance with applicable laws and
          regulations.
        </p>
        <p>Quills AI LLC located at</p>
        <p>2000 Bering Dr, Suite # 102, Houston, Texas, 77057</p>
      </div>
    </div>
  );
}
export default TermsConditions;
