import "./Fotter.css";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp  } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";



export default function Footer() {
  return (
    <>
      <footer className="footer">
        
        <div className="footerContent">
          <div className="footerSection">
            <div>
              <h3 className="footerTitle">بيانات التواصل</h3>
              

            </div>
            <ul className="contactDetails">
              <li>
                <span className="icon"> <div className="iconStyle2">
                  <a style={{color:"rgb(103, 215, 240)"}} href="tel:+966547620899"><FaPhoneAlt /></a>
                </div>
                </span> 0598608273
              </li>
              <li>
                <span className="icon"><div className="iconStyle2">
                <IoMail />
                </div>
                </span> AlhodaFurniture@gmail.com
              </li>
              <li>
                <span className="icon"> <div className="iconStyle2">
                  <FaMapMarkerAlt />
                </div> </span> الرياض - الطيف المصانع
              </li>
            </ul>
          </div>

             <ul  style={{direction:"rtl"}} className="pagesList">
                <br/>
            
                 <li > <IoIosArrowBack />الاحكام و الشروط </li>
                  <li > <IoIosArrowBack />السياسات الخصوصية</li>
                 <li > <IoIosArrowBack /> الاسئلة الشائعة</li>
                 <li > <IoIosArrowBack />  تواصل معنا</li>
            </ul>
          <div className="footerSection">
            <h3 className="footerTitle">الصفحات</h3>
            <ul className="pagesList">
              <li >  <IoIosArrowBack />خدماتنا  </li>
              <li > <IoIosArrowBack />عن الشركة</li>
              <li > <IoIosArrowBack />الوجهات السياحية</li>
              <li > <IoIosArrowBack />ألبوم الصور</li>
            </ul>
          </div>
          

          <div className="footerSection">
            <img  width="100px" src="/logojpg-removebg-preview.png" alt="" />
            <p className="aboutText">
              مؤسسة الهدى للاثاث الجديد هو منصة إلكترونية تهدف إلى تقديم مجموعة متنوعة من
              
            </p>
            <p className="aboutText">الخيارات للاثاث و غرف النوم و الكنب و المطابخ  بأعلى جودة و افضل سعر في الرياض </p>
            <br/>
            <div className="socialIcons">
            <div className="iconStyle">
          <a
              href="https://wa.me/+966598608273"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <FaWhatsapp size={20} />
            </a>            
          </div>
          <div className="iconStyle">
            <a
              href=" http://tiktok.com/@saody003"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <FaTiktok size={20} />
            </a>
          </div>
          <div className="iconStyle">
            <a
              href="https://www.instagram.com/kasb_almawaard?igsh=enRzcmY5cGw4OWo5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <div className="iconStyle">
            <a
              href="https://www.facebook.com/people/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D9%86%D9%88%D8%B1-%D8%A7%D9%84%D9%87%D8%AF%D9%8A-%D9%84%D9%84%D8%A3%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF/61555551041774/?rdid=WtbgNiqHtSjlCtiJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F158L26ofJD%2F"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <FaFacebookF size={20} />
            </a>
          </div>
                  
              </div>
          </div>
        </div>

        <div className="footerBottom">
          <a style={{color:"white" , fontSize:"25px"}} href="https://wa.me/+201069514877"><p>صنع بواسطة م / هشام عبد الناصر </p></a>
        </div>
      </footer>
    </>
  );
}
