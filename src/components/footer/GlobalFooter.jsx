import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import styles from "./globalFooter.module.css";
import { Link } from "react-router-dom";

const SocialItem = ({ children, link }) => {
  return (
    <div className={styles.socialItem}>
      <Link to={link} target="_blank">
        {children}
      </Link>
    </div>
  );
};

const GlobalFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <SocialItem link={"https:mcdm.dk"}>
          <FaFacebook></FaFacebook>
        </SocialItem>
        <SocialItem link={"https:mcdm.dk"}>
          <FaInstagram></FaInstagram>
        </SocialItem>
        <SocialItem link={"https:mcdm.dk"}>
          <FaPinterest></FaPinterest>
        </SocialItem>
        <SocialItem link={"https:mcdm.dk"}>
          <FaTwitter></FaTwitter>
        </SocialItem>
        <SocialItem link={"https:mcdm.dk"}>
          <FaYoutube></FaYoutube>
        </SocialItem>
      </div>
      <div className={styles.copy}>
        mail@smuk.nu <br />
        +45 12 34 56 78
      </div>
    </div>
  );
};
export default GlobalFooter;
