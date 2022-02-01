import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="nav_profile"
        src="https://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3.png"
        alt="profile"
      />
    </div>
  );
}
