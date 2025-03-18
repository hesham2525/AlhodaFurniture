// import { IoIosArrowDown } from "react-icons/io";
// import { TbWorld } from "react-icons/tb";
import { BsSnapchat } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp  } from 'react-icons/fa';

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
          <a
              href="https://wa.me/+966598608273"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <FaWhatsapp size={18} />
            </a>            
          </div>
          <div className="iconStyle">
            <a
              href=" http://tiktok.com/@saody003"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <FaTiktok size={18} />
            </a>
          </div>
          <div className="iconStyle">
            <a
              href="https://www.instagram.com/kasb_almawaard?igsh=enRzcmY5cGw4OWo5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <div className="iconStyle">
            <a
              href="https://www.facebook.com/people/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D9%86%D9%88%D8%B1-%D8%A7%D9%84%D9%87%D8%AF%D9%8A-%D9%84%D9%84%D8%A3%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF/61555551041774/?rdid=WtbgNiqHtSjlCtiJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F158L26ofJD%2F"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={handleCall}
        className="btn2  btn-primary d-flex align-items-center justify-content-center gap-3"
      >
        اتصل بنا
        <FaPhoneAlt />
      </button>
      <FloatingButtons />
    </div>
  );
}
