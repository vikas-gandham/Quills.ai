import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function Solutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <Outlet />;
}
export default Solutions;
