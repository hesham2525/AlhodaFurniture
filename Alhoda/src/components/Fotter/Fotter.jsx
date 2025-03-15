import "./Fotter.css";
import { BsSnapchat } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";



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
              <div className="iconStyle1">
                    <BsSnapchat />
                  </div>
                  <div className="iconStyle1">
                    <FaTiktok />
                  </div>
                  <div className="iconStyle1">
                    <FaInstagram />
                  </div>
                  <div className="iconStyle1">
                    <FaXTwitter />
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
