import { Link } from "react-router-dom";
// import HoverMenu from "../features/HoverMenu";

function Menu() {
  return (
    <div className="text-base-8">
      <ul className="lg:flex items-center justify-between gap-5">
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link>
        </li>
        <li>
          <Link to="/solutions">
            {/* <HoverMenu /> */}
            Solutions
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
