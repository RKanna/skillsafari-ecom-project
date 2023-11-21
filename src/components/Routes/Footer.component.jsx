import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <section className="main-foot">
      <div className="footer">
        <div className="footer-first">
          <h4>Customer Service</h4>
          <br />
          <a href="#">Contact Us</a>
          <a href="">Sell With Us</a>
          <a href="">Shipping</a>
        </div>
        <div className="footer-middle">
          <div>
            <hr className="vertical" />
          </div>
          <div className="middle">
            <h4>Links</h4>
            <br />
            <a href="#">Contact Us</a>
            <a href="">Sell With Us</a>
            <a href="">Shipping</a>
          </div>
        </div>
        <div className="footer-last">
          <div>
            <hr className="vertical" />
          </div>
          <div className="last">
            <h4>News Letter</h4>
            <br />
            <p>Sign Up for Our Newsletter</p>
          </div>
        </div>
      </div>

      <p>© 2023 Shop Store</p>
      <div className="social">
        <FacebookIcon className="crsr" />
        <InstagramIcon className="crsr" />
        <PinterestIcon className="crsr" />
        <TwitterIcon className="crsr" />
      </div>
    </section>
  );
};

export default Footer;
