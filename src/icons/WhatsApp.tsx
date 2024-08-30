import whatsappImage from "../assets/whatsapp.png";

const WhatsApp = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=5491161549962"
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
