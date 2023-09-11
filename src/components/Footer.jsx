import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import twitter from "../assets/footer/twitter.svg"
import youtube from "../assets/footer/youtube.svg";


export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <div className="footer-info">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="copyright">
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};
