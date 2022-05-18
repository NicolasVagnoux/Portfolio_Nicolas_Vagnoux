import React from "react";
import PropTypes from "prop-types";

const ContactLogo = ({ id, img, url }) => {
  return (
    <div className="contactLogo">
      <a href={url}>
        <img src={img} alt={id} />
      </a>
    </div>
  );
};

ContactLogo.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ContactLogo;
