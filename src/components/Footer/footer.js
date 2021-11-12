import './footer.css';
import './responsive.css';
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <section data-scroll className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="info">
            <h1>intor.</h1>
            <div className="socials">
              <ul>
                <li><a href="http://"><CgFacebook size={16} className="icon" /></a></li>
                <li><a href="http://"><FaTwitter size={16} className="icon" /></a></li>
                <li><a href="http://"><FiInstagram size={16} className="icon" /></a></li>
              </ul>
            </div>
          </div>
          <div className="links-container">
            <div className="item">
              <h1>Address</h1>
              <div className="active-links">
                <a href="/">767 5th Street, 21st Floor,</a>
                <a href="/">New York, USA</a>
              </div>
            </div>
            <div className="item">

              <h1>Call us on</h1>
              <div className="active-links">
                <a href="/">+0223 4853 3023</a>
                <a href="/">+0223 6572 5432</a>
                <p>DM Us.</p>
                <a href="/">Info@intor.com</a>
              </div>
            </div>
            <div className="item">
              <h1>Our policies</h1>
              <div className="active-links">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms and Use</a>
                <a href="/">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="copyright">
          <p >Copyright &copy; <span className="company-name">intor.{" "}</span>{new Date().getFullYear()}. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
