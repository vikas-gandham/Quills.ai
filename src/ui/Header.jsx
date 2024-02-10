import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";
import { useState, useEffect } from "react";

function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`w-full fixed mx-auto top-0 right-0 left-0 z-20 pt-[5px] ${
        !top && `border-[#eaeaea] border-b bg-white shadow-md`
      }`}
    >
      <div className="md:max-w-[80%] max-w-[95%] flex items-center justify-between dark:text-black mx-auto py-3">
        <Logo />
        <Menu />
        <div className="flex items-center justify-between gap-2">
          <Button to="/login" type="bgnone">
            Log in
          </Button>
          <Button to="/login" type="secondary">
            Sign up
          </Button>
          <Button to="/bookdemo" type="primary">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
