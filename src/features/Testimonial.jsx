import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Loader from "../ui/Loader";

function Testimonial() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [newBlockquote, setNewBlockquote] = useState("");
  const [newH1, setNewH1] = useState("");
  const [newP, setNewP] = useState("");

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
      setTestimonials(data);

      console.log(testimonials);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const addTestimonial = async function () {
    try {
      const blockquote = newBlockquote.trim();
      const h1 = newH1.trim();
      const p = newP.trim();
      if (blockquote && h1 && p) {
        const res = await fetch(
          "https://run.mocky.io/v3/b227de75-5842-4b71-80e2-c30f1c975c13",
          {
            method: "POST",
            body: JSON.stringify({ blockquote, h1, p }),
            headers: { content: "application/json; charset=UTF-8" },
          }
        );
        if (!res.ok)
          throw new Error("Something went wrong with adding testimonials");
        const data = await res.json();
        setTestimonials([...testimonials, data]);
        setNewBlockquote("");
        setNewH1("");
        setNewP("");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  const updateTestimonial = async function (id) {
    try {
      const testimonial = testimonials.find((user) => user.id === id);

      const res = await fetch(
        `https://run.mocky.io/v3/b227de75-5842-4b71-80e2-c30f1c975c13/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(testimonial),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const data = await res.json();
      if (!res.ok)
        throw new Error("Something went wrong with updating testimonials");
      setTestimonials(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  const deleteTestimonial = async function (id) {
    try {
      const res = await fetch(
        `https://run.mocky.io/v3/b227de75-5842-4b71-80e2-c30f1c975c13/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (!res.ok)
        throw new Error("Something went wrong with deleting testimonials");
      setTestimonials(() => {
        data.filter((item) => item.id !== id);
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  const onChangeHandler = (id, key, value) => {
    setTestimonials((values) => {
      return values.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && testimonials && (
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
                      <textarea
                        name="paragraph_text"
                        cols="50"
                        rows="3"
                        value={data.blockquote}
                        onChange={(value) =>
                          onChangeHandler(testimonials.h1, "blockquote", value)
                        }
                      />
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <h1 className="font-display text-base text-slate-900">
                          <input
                            value={data.h1}
                            onChange={(value) =>
                              onChangeHandler(testimonials.h1, "h1", value)
                            }
                          />
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                          <input
                            value={data.p}
                            onChange={(value) =>
                              onChangeHandler(testimonials.h1, "p", value)
                            }
                          />
                        </p>
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
                    <div className=" flex items-center justify-center gap-4 pt-16">
                      <button
                        onClick={() => updateTestimonial(testimonials.h1)}
                        className="border px-4 py-3 rounded-lg shadow-md bg-blue-500 text-white"
                      >
                        UPDATE
                      </button>
                      <button
                        onClick={() => deleteTestimonial(testimonials.h1)}
                        className="border px-4 py-3 rounded-lg shadow-md bg-red-500 text-white"
                      >
                        DELETE
                      </button>
                    </div>
                  </figure>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      <div className=" space-y-8 p-16 flex items-center justify-center">
        <input
          placeholder="Add Name"
          value={newH1}
          onChange={(e) => setNewH1(e.target.value)}
        />
        <input
          placeholder="Add Role"
          value={newP}
          onChange={(e) => setNewP(e.target.value)}
        />
        <input
          placeholder="Add Comment"
          value={newBlockquote}
          onChange={(e) => setNewBlockquote(e.target.value)}
        />
        <button
          onClick={addTestimonial}
          className="  border px-4 py-3 rounded-lg shadow-md bg-green-500 text-white"
        >
          Add Testimonial
        </button>
      </div>
    </>
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
