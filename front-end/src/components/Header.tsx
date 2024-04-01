import { useState } from "react";
import {
  FaCartPlus,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const user = { _id: "sf", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/search">
        <FaSearch />
      </Link>
      <Link to="/cart">
        <FaCartPlus />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to={"/admin/dashboard"}>Admin</Link>
              )}

              <Link to="/orders">Orders</Link>

              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login">
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
