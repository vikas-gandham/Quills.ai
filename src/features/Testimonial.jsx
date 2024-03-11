import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Loader from "../ui/Loader";

function Testimonial() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        "https://run.mocky.io/v3/b227de75-5842-4b71-80e2-c30f1c975c13"
      );
      if (!res.ok)
        throw new Error("Something went wrong with fetching testimonials");

      const data = await res.json();
      console.log(data);
      setTestimonials(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.log(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !error && testimonials}
      {error && <ErrorMessage message={error} />}
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        {testimonials?.map((data, i) => (
          <li key={i}>
            <ul className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-sky-900/10">
                  <div className="absolute left-6 top-2 ">
                    <RiDoubleQuotesL size="8rem" color="#f5f5f5" />
                  </div>
                  <blockquote className="text-lg tracking-tight text-slate-900 min-h-[100px] relative">
                    {data.blockquote}
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <h1 className="font-display text-base text-slate-900">
                        {data.h1}
                      </h1>
                      <p className="mt-1 text-sm text-slate-500">{data.p}</p>
                    </div>
                    <div className={data.classname}>
                      <img
                        src={data.img}
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
        ))}
      </ul>
    </div>
  );
}
export default Testimonial;

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}
