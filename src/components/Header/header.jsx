import { Link } from "react-router-dom";
import user from "../../images/user.jpg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user_image">
        <img src={user} alt={"user"} />
      </div>
    </div>
  );
};

export default Header;
