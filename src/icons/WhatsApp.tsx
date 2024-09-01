import whatsappImage from "../assets/whatsapp.png";
import { WPP_LINK } from "../constants/contact";

const WhatsApp = () => (
  <a
    href={WPP_LINK}
    target="_blank"
    style={{
      position: "fixed",
      bottom: 30,
      right: 16,
      zIndex: 3,
      cursor: "pointer",
    }}
  >
    <img
      src={whatsappImage}
      style={{
        width: "80px",
        height: "80px",
      }}
    />
  </a>
);

export default WhatsApp;
