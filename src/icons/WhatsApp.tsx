import whatsappImage from "../assets/whatsapp.png";

const WhatsApp = () => (
  <a
    href="https://wa.me/541161549962?text=Hola%21%0AMe%20gustaria%20reservar%20una%20sala%20de%20ensayo%21"
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
