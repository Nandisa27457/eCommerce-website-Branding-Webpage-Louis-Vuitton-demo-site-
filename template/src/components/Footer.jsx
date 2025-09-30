import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Louis Vuitton</h2>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h3>Shop</h3>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Bags</li>
              <li>Shoes</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>About</h3>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Connect</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>Louis Vuitton</span>
        <span>All rights reserved</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  );
}
