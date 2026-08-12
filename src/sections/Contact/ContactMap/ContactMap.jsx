const ContactMap = () => {
  return (
    <div className="map-area overflow-hidden">
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps?q=Santo+Domingo,+Dominican+Republic&z=12&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
