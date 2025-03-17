// import { IoIosArrowDown } from "react-icons/io";
// import { TbWorld } from "react-icons/tb";
import { BsSnapchat } from "react-icons/bs";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "./Header.css";
import FloatingButtons from "../buttons/floatingButtons";

export default function Header() {
  const handleCall = () => {
    window.location.href = "tel:+966598608273";
  };
  return (
    <div className="header">
      <div className="mainHeader">
        <div className="logo-section">
          <img
            className="logoImage"
            src="/logo22.png"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="links-container">
          <p className="links">مؤسسة نور الهدى للاثاث الجديد</p>
        </div>
      </div>
      <div className="transtationAndIcons">
        <div></div>
        <div className="icons">
          <div className="iconStyle">
            <BsSnapchat />
          </div>
          <div className="iconStyle">
            <FaTiktok />
          </div>
          <div className="iconStyle">
            <FaInstagram />
          </div>
          <div className="iconStyle">
            <FaXTwitter />
          </div>
        </div>
      </div>
      <button onClick={handleCall} className="btn2  btn-primary d-flex align-items-center justify-content-center gap-3" >
                اتصل بنا
                <FaPhoneAlt />
                  </button>
      <FloatingButtons />
    </div>
  );
}
