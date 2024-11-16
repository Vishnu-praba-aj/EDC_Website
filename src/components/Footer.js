import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/lakshya-ssn-692b53206"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/ssnlakshya?igsh=MTh5ZXI2dmpkcHo3dQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/your-edc-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* Mail */}
        <a href="mailto:your-edc-email@example.com" className="social-link mail">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/your-whatsapp-number"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link whatsapp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} EDC. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
