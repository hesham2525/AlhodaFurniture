import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import "./content.css";
import { FaWhatsapp } from "react-icons/fa";
import LeafletMap from "../Map/Map";
import ImageSlider3 from "../Slider3/slider";

import { useEffect } from "react";

export default function Content() {
  const handleBuyNowClick = (productTitle) => {
    const phoneNumber = "+966598608273";
    const productMessage = `أنا مهتم بمنتج: ${productTitle}.\n\nمن فضلك أرسل لي مزيدًا من التفاصيل.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      productMessage
    )}`;

    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const product = [
    [
      { id: 5, name: " غرف نوم وطني  ", img: "/نوم وطني 1.jpg" },
      { id: 4, name: "   غرف نوم تفصيل ", img: "/نوم تفصيل1.jpg" },
      { id: 2, name: " كنب ", img: "/كنب1.jpg" },
      { id: 3, name: " مطابخ", img: "/مطابخ1.jpg" },
    ],
    [
      { id: 1, name: " مطابخ حديثة", img: "/مطابخ2.jpg" },
      { id: 2, name: " L كنب حرف ", img: "/كنب حرف L 2.jpg" },
      { id: 4, name: " كنب مودرن   ", img: "/كنب مودرن.jpg" },
      { id: 3, name: " غرف نوم تفصيل  ", img: "/نوم تفصيل 2.jpg" },
    ],
    [
      {
        id: 1,
        name: "  مطابخ",
        img: "/مطابخ 3.jpg",
      },
      { id: 2, name: " غرف نوم تفصيل", img: "/نوم تفصيل8.jpg" },
      { id: 4, name: " U كنب حرف ", img: "/U1كنب حرف .jpg" },
      { id: 3, name: "غرف نوم وطني ", img: "/نوم وطني 2.jpg" },
    ],
  ];
  const imagesRommWatany = [
    "/نوم وطني 1.jpg",
    "/نوم وطني 2.jpg",
    "/نوم وطني 3.jpg",
    "/نوم وطني 4.jpg",
    "/نوم وطني 5.jpg",
    "/ننوم وطني 6.jpg",
    "/نوم وطني7.jpg",
    "/نوم وطني 8.jpg",
    "/نوم وطني 9.jpg",
    "/نوم وطني 10.jpg",
  ];
  const imagesRoomTafsel = [
    "/نوم تفصيل1.1.jpg",
    "/نوم تفصيل1.jpg",
    "/نوم تفصيل 2.jpg",
    "/نوم تفصيل 3.jpg",
    "/نوم تفصيل 2.2.jpg",
    "/نوم تفصيل4.jpg",
    "/نوم تفصيل5.jpg",
    "/نوم تفصيل6.jpg",
    "/نوم تفصيل7.jpg",
    "/نوم تفصيل9.jpg",
  ];
  const imagesDataModern = [
    "/مودرن1.jpg",
    "/مودرن2.jpg",
    "/مودرن3.jpg",
    "/مودرن4.jpg",
    "/مودرن5.jpg",
    "/مودرن6.jpg",
    "/مودرن7.jpg",
    "/مودرن8.jpg",
    "/مودرن10.jpg",
  ];
  const imagesDataLU = [
    "/L2.jpg",
    "/U1.jpg",
    "/L5.jpg",
    "/U2.jpg",
    "/L3.jpg",
    "/U3.jpg",
    "/L4.jpg",
    "/U4.jpg",
    "/L6.jpg",
    "/U5.jpg",
    "/L.jpg",
  ];
  const imagesDataKIT = [
    "/مطبخ1.jpg",
    "/مطبخ2.jpg",
    "/مطبخ4.jpg",
    "/مطبخ5.jpg",
    "/مطبخ6.jpg",
    "/مطبخ7.jpg",
    "/مطبخ8.jpg",
    "/مطبخ9.jpg",
    "/مطبخ10.jpg",
    "/مطابخ 3.jpg",
  ];
  const imagesData711 = [
    "/كنببب1.jpg",
    "/كنببب2.jpg",
    "/كنببب3.jpg",
    "/كنببب4.jpg",
    "/كنببب5.jpg",
    "/كنببب6.jpg",
    "/كنببب7.jpg",
    "/كنبب8.jpg",
    "/كنببب9.jpg",
    "/كنبب10.jpg",
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % product.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [product.length]);
  return (
    <>
      <div className="Containar">
        <div className="ImageCover">
          <img className="img1" src="/backgrpund-1.jpg" alt="" loading="lazy" />
          <div className="textCover">
            <h2>مؤسسة نور الهدى </h2>
            <p> للأثاث الجديد المودرن و الكلاسيك بالرياض</p>
          </div>
        </div>
      </div>
      <br />
      <div className="marquee-container">
        <div className="marquee">
          <span>
            {" "}
            U غرف نوم وطني | غرف نوم تفصيل | كنب حرف | L مطابخ حديثة | كنب حرف
          </span>
          <span>
            {" "}
            U غرف نوم وطني | غرف نوم تفصيل | كنب حرف | L مطابخ حديثة | كنب حرف
          </span>
          <span>
            {" "}
            U غرف نوم وطني | غرف نوم تفصيل | كنب حرف | L مطابخ حديثة | كنب حرف
          </span>
        </div>
      </div>
      <br />
      <div className="btnWhatsap">
        <a
          href="https://wa.me/+966598608273"
          className="ancurBtn"
          target="_blank"
        >
          {" "}
          <button className="btn1">
            {" "}
            <FaWhatsapp size={20} /> .... تواصل معنا عبر الوتساب{" "}
          </button>
        </a>
      </div>

      <div className="information">
        <div className="infoSection1">
          <p className="para1">أفضل شركة بيع أثاث جديد في الرياض</p>

          <p className="para2">
            تعتبر شركتنا من أفضل الشركات المتخصصة في بيع الأثاث الجديد المودرن
            والكلاسيك في الرياض، نقدم لعملائنا أحدث التصاميم العصرية والكلاسيكية
          </p>
          <p className="para2">
            نقدم تشكيلة واسعة من غرف النوم الوطني و التفصيل التي تناسب جميع
            الاذواق بأفضل الأسعار، مع ضمان الجودة والتصميم الراقي.
          </p>
          <p className="para2">
            و كنب بجميع المقاسات و مطابخ حديثة وصالات استقبال - مجالس وجلسات
            عربية فاخرة
          </p>
        </div>
        <br />

        <div className="citiesImages">
          {product[activeSlide].map((item) => (
            <div className="cityImage" key={item.id}>
              <button
                className="btnWhatsapp"
                onClick={() => handleBuyNowClick(item.name)}
              >
                {" "}
                <img
                  className="imgCity"
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                />
              </button>

              <br />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
        <div className="dots">
          {product.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeSlide === index ? "activeDot" : ""}`}
              onClick={() => handleDotClick(index)}
            >
              {activeSlide === index ? (
                <GoDotFill style={{ color: "#3a8ae0", fontSize: "20px" }} />
              ) : (
                <GoDot style={{ fontSize: "20px" }} />
              )}
            </div>
          ))}
        </div>
        <p className="para1"> غرف نوم وطني </p>
        <br />

        <div className="secSlider">
          <div>
            <ImageSlider3 images={imagesRommWatany} />
          </div>
          <div
            className="sec2Info"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "right",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <p className="mainP" style={{}}>
              غرف نوم وطني 🛋️
            </p>
            <p className="sideP">
              نقدم تشكيلة واسعة من{" "}
              <strong>غرف النوم الوطني العصري والمودرن</strong> الذي يضفي لمسة
              من الأناقة والراحة على منزلك.
            </p>
            <p className="sideP">
              يوجد لدينا سراير ودواليب جميع المقاسات والأحجام وغرف نوم نفر ونفر
              ونص ونفرين
            </p>
            <p className="sideP">
              وايضا غرف نوم اطفال ٢سرير ومراتب طبي ضغط ٦٠لجميع المقاسات
              والأحجام
            </p>
            <p className="sideP2">
              ✔ تصاميم فريدة تناسب جميع الأذواق والمساحات.
            </p>
            <p className="sideP2">
              ✔ خامات عالية الجودة تضمن المتانة والاستدامة.
            </p>
            <p className="sideP2">
              ✔ أسعار تنافسية مع عروض حصرية وتخفيضات رائعة.
            </p>
            <p className="sideP2">
              ✔ خدمة التوصيل والتركيب لجميع مناطق الرياض.
            </p>
            <p className="sideP3">
              💬 تواصل معنا الآن للحصول على استشارة مجانية واختيار الأثاث
              المثالي لمنزلك! 📞
            </p>
          </div>
        </div>
        <br />
        <p className="para1"> غرف نوم تفصيل </p>

        <div className="secSlider">
          <div>
            <ImageSlider3 images={imagesRoomTafsel} />
          </div>
          <div
            className="sec2Info"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "right",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <p className="mainP" style={{}}>
              غرف نوم تفصيل 🛋️
            </p>
            <p className="sideP">
              يوجد لدينا تشكيلة من{" "}
              <strong>غرف الجديده جاهزه وتفصيل من المصنع </strong>
              مكونه من دولاب وتسريحه وكرسي تسريحه وشوفنيره
            </p>

            <p className="sideP">
              و 2 كمدينو وسرير ويوجد غرف نفر ونص ونفر شامل توصيل تركيب
            </p>
            <p className="sideP2">✔ غرف مودرن وغرف المنتان</p>
            <p className="sideP2">✔ غرف نوم خشب تيلندي وغرف نوم خشب المنتان</p>
            <p className="sideP2">
              ✔ أسعار تنافسية مع عروض حصرية وتخفيضات رائعة
            </p>
            <p className="sideP2">✔ خدمة التوصيل والتركيب لجميع مناطق الرياض</p>
            <p className="sideP3">
              💬 تواصل معنا الآن للحصول على استشارة مجانية واختيار الأثاث
              المثالي لمنزلك! 📞
            </p>
          </div>
        </div>

        <br />
        <br />
        <div className="btnWhatsap">
          <a
            href="https://wa.me/+966598608273"
            className="ancurBtn"
            target="_blank"
          >
            {" "}
            <button className="btn1">
              {" "}
              <FaWhatsapp size={20} /> .... تواصل معنا عبر الوتساب{" "}
            </button>
          </a>
        </div>

        <p className="para1"> كنب مودرن </p>
        <p className="para1"> </p>

        <div className="secSlider">
          <div>
            <ImageSlider3 images={imagesDataModern} />
          </div>
          <div
            className="sec2Info"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "right",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <p className="mainP" style={{}}>
              كنب مودرن
            </p>
            <p className="sideP">
              يوجد لدينا تشكيلة من الكنب الامريكي المودرن
              <strong>كنب امريكي قطن كثافه عاليا مريح بالجلوس </strong>
              مقاس 3 في 3 و بسعر المصنع
            </p>

            <p className="sideP2">
              ✔ تصاميم فريدة تناسب جميع الأذواق والمساحات.
            </p>
            <p className="sideP2">
              ✔ خامات عالية الجودة تضمن المتانة والاستدامة.
            </p>
            <p className="sideP2">
              ✔ أسعار تنافسية مع عروض حصرية وتخفيضات رائعة.
            </p>
            <p className="sideP2">
              ✔ خدمة التوصيل والتركيب لجميع مناطق الرياض.
            </p>
            <p className="sideP3">
              💬 تواصل معنا الآن للحصول على استشارة مجانية واختيار الأثاث
              المثالي لمنزلك! 📞
            </p>
          </div>
        </div>

        <p className="para1"> ( U كنب حرف ) , ( L كنب حرف ) </p>
        <p className="para1"> </p>

        <div className="secSlider">
          <div>
            <ImageSlider3 images={imagesDataLU} />
          </div>
          <div
            className="sec2Info"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "right",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <p className="mainP" style={{}}>
              U كنب حرف , L كنب حرف
            </p>
            <p className="sideP">
              كنب جديد جاهز للطلب والاستفسار لجميع انحاء الرياض
              <strong> كنب مودرن </strong>
              💯 حرف ال مقاس ٣.٥ في ٣.٥
            </p>
            <p className="sideP">
              كنب حر L مقاس ٣ونص طول في ٣ونص عرض و الطقم كامل خمس قطع
            </p>
            <p className="sideP">انتريه سبع أشخاص ٤ قطع</p>
            <p className="sideP2">✔ اسفنج كثافه عاليه</p>
            <p className="sideP2">
              ✔   كنب حرف يو مقاس ٥في٤ يتكون من ١٠قطع ١٤متر
            </p>
            <p className="sideP2">
              ✔ خامات عالية الجودة تضمن المتانة والاستدامة
            </p>

            <p className="sideP2">✔ خدمة التوصيل والتركيب لجميع مناطق الرياض</p>
            <p className="sideP3">
              💬 تواصل معنا الآن للحصول على استشارة مجانية واختيار الأثاث
              المثالي لمنزلك! 📞
            </p>
          </div>
        </div>

        <p className="para1"> ( كنب 7 نفر ) , ( كنب 11 نفر ) </p>
        <p className="para1"> </p>

        <div className="secSlider">
          <div>
            <ImageSlider3 images={imagesData711} />
          </div>
          <div
            className="sec2Info"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "right",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <p className="mainP" style={{}}>
              كنب 7 نفر , كنب 11 نفر
            </p>
            <p className="sideP">
              يوجد لدينا تشكيلة من الغرف الجديده{" "}
              <strong  > كنب 7 نفر , كنب 11 نفر  </strong>
              جاهزه وتفصيل من المصنع .
            </p>
            <p className="sideP">
              كنب مودرن 11 نفر 
            و  كنب مودرن 7 نفر 

            </p>
            <p className="sideP2">
              ✔ تصاميم فريدة تناسب جميع الأذواق والمساحات.
            </p>
            <p className="sideP2">
              ✔ خامات عالية الجودة تضمن المتانة والاستدامة.
            </p>
            <p className="sideP2">
              ✔ أسعار تنافسية مع عروض حصرية وتخفيضات رائعة.
            </p>
            <p className="sideP2">
              ✔ خدمة التوصيل والتركيب لجميع مناطق الرياض.
            </p>
            <p className="sideP3">
              💬 تواصل معنا الآن للحصول على استشارة مجانية واختيار الأثاث
              المثالي لمنزلك! 📞
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="btnWhatsap">
        <a
          href="https://wa.me/+966598608273"
          className="ancurBtn"
          target="_blank"
        >
          {" "}
          <button className="btn1">
            {" "}
            <FaWhatsapp size={20} /> .... تواصل معنا عبر الوتساب{" "}
          </button>
        </a>
      </div>
      <p className="para1"> مطابخ جديدة و عصرية </p>
      <p className="para1"> </p>

      <div className="secSlider">
        <div>
          <ImageSlider3 images={imagesDataKIT} />
        </div>
        <div
          className="sec2Info"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "right",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <p className="mainP" style={{}}>
            مطابخ جديدة و عصرية
          </p>
          <p className="sideP">
            يوجد لدينا تشكيلة من <strong>المطابخ الجديدة </strong>
            جاهزه وتفصيل من المصنع على حسب طلب الزبون .
          </p>
          <p className="sideP">
            مطابخ جديدة جاهزة صاج المونيوم مقاس 5 متر و 60 سم العمق 50 سم
          </p>
          <p className="sideP">
            مطابخ جديدة جاهزة صاج كلادينج مقاس 5 متر و 60 سم العمق 50 سم
          </p>
          <p className="sideP2">مطابخ معدلة حسب مقاسات المطبخ</p>
          <p className="sideP2">✔ تصاميم فريدة تناسب جميع الأذواق والمساحات</p>
          <p className="sideP2">
            يوجد جميع انواع الرخام الطبيعي والجلاكسي الصناعي 
          </p>
          <p className="sideP2">✔ خدمة التوصيل والتركيب لجميع مناطق الرياض</p>
          <p className="sideP3">
            💬 تواصل معنا الآن للحصول على استشارة مجانية واختيار الأثاث المثالي
            لمنزلك! 📞
          </p>
        </div>
      </div>

      <div className="information2">
        <p className="paraWhy">📞 لماذا تختارنا؟</p>
        <div className="info-list">
          <p>
            {" "}
            تصاميم فريدة تجمع بين الجمال والعملية لضمان تجربة استخدام مميزة ✅
          </p>
          <p> أفضل الأسعار في الرياض مع عروض حصرية لعملائنا✅</p>
          <p> جودة مضمونة وخامات عالية التحمل تدوم لسنوات طويلة✅</p>
          <p> خدمة توصيل وتركيب لجميع مناطق الرياض بأيدي خبراء متخصصين✅</p>
          <p> إمكانية الطلب أونلاين مع خيارات دفع مرنة تناسب الجميع✅</p>
        </div>
      </div>
      <br />
      <br />

      {/* <div className="btnWhatsap">
          <a  href="https://wa.me/+966598608273" className="ancurBtn" target="_blank"> <button className="btn1" > <FaWhatsapp size={20} />  ....  تواصل معنا عبر الوتساب    </button></a>
        </div> */}
      <hr />

      <div className="btnWhatsap">
        <a
          href="https://wa.me/+966598608273"
          className="ancurBtn"
          target="_blank"
        >
          {" "}
          <button className="btn1">
            {" "}
            <FaWhatsapp size={20} /> .... تواصل معنا عبر الوتساب{" "}
          </button>
        </a>
      </div>
      <br />
      <br />

      <LeafletMap />

      <div className="btnWhatsap">
        <a
          href="https://wa.me/+966598608273"
          className="ancurBtn"
          target="_blank"
        >
          {" "}
          <button className="btn1">
            {" "}
            <FaWhatsapp size={20} /> .... تواصل معنا عبر الوتساب{" "}
          </button>
        </a>
      </div>
    </>
  );
}
