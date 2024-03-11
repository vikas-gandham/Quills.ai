import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
  const testimonyList = [
    {
      blockquote:
        "The Quills AI chatbot app impresses with its intuitive interface and swift, accurate responses, significantly enhancing the overall user experience.",
      h1: "anand godini",
      p: "Developer",
      img: "/av-1.webp",
      classname: "overflow-hidden rounded-full bg-red-500 ",
    },
    {
      blockquote: "Best tool for data aggregations, log files analysis.",
      h1: "aHarish Kudikala",
      p: "Tester",
      img: "/av-2.webp",
      classname: "overflow-hidden rounded-full bg-green-700 ",
    },
    {
      blockquote: "Great product easy to use.",
      h1: "Anil Akula",
      p: "Data & Analytics",
      img: "/av-3.webp",
      classname: "overflow-hidden rounded-full bg-green-500 ",
    },
    {
      blockquote:
        "Great tool to expose data to product teams without adding any technical complexity.",
      h1: "Naveen",
      p: "Professional",
      img: "/av-4.webp",
      classname: "overflow-hidden rounded-full bg-blue-500 ",
    },
    {
      blockquote: "Awesome product. Easy to use!",
      h1: "Alekhya Y",
      p: "Software engineer",
      img: "/av-5.webp",
      classname: "overflow-hidden rounded-full bg-yellow-500 ",
    },
    {
      blockquote:
        "Using it for connecting with my Data sources and getting insights. Amazing product",
      h1: "Macharayya G",
      p: "Explorer",
      img: "/av-6.webp",
      classname: "overflow-hidden rounded-full bg-red-700 ",
    },
  ];

  const testimonials = testimonyList.map((item, index) => (
    <li key={index}>
      <ul className="flex flex-col gap-y-6 sm:gap-y-8">
        <li>
          <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-sky-900/10">
            <div className="absolute left-6 top-2 ">
              <RiDoubleQuotesL size="8rem" color="#f5f5f5" />
            </div>
            <blockquote className="text-lg tracking-tight text-slate-900 min-h-[100px] relative">
              {item.blockquote}
            </blockquote>
            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <h1 className="font-display text-base text-slate-900">
                  {item.h1}
                </h1>
                <p className="mt-1 text-sm text-slate-500">{item.p}</p>
              </div>
              <div className={item.classname}>
                <img
                  src={item.img}
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  className="h-14 w-14 object-cover"
                />
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </li>
  ));

  return (
    <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
      {testimonials}
    </ul>
  );
}
export default Testimonials;
