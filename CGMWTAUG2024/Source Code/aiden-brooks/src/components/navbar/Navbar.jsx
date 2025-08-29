import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Archive",
      url: "/archive",
    },
    {
      label: "Information",
      url: "/information",
    },
  ];

  return (
    <div className="navbar">
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <div className="nav-link" key={index}>
            <Link to={link.url}>{link.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
