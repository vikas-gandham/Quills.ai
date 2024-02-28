import { useEffect } from "react";

function BookDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className=" my-24 text-center">
      <h1>BookDemo</h1>
    </div>
  );
}
export default BookDemo;
