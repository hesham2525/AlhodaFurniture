import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './floatingButtons.css'; 

const FloatingButtons = () => {

  return (
    <div className="floating-buttons">
      <a href="https://wa.me/+966598608273"  target="_blank" rel="noopener noreferrer" className="floating-button whatsapp">
        <FaWhatsapp size={28} />
      </a>
     
      <a href="tel:+966598608273" className="floating-button call">
        <FaPhoneAlt size={20} />
      </a>
      <a href="https://www.google.com/maps?q=24.5422,46.7596" target="_blank" rel="noopener noreferrer" className="floating-button map">
        <FaMapMarkerAlt size={22} />
      </a>
    </div>
  );
};

export default FloatingButtons;