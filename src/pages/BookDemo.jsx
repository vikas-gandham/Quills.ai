import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BookDemo() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=" my-24 text-center">
      <h1>BookDemo</h1>
    </div>
  );
}
export default BookDemo;
