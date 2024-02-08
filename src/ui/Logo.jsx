import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="h-[34px]">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-[34px] flex items-center justify-center gap-1"
      />
    </Link>
  );
}
export default Logo;
