import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </div>
    </div>
  )
}