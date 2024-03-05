import iconInstagram from "../assets/icons/all-icons/icon-instagram.png";
import iconX from "../assets/icons/all-icons/icon-twitter.png";
import iconLinkedin from "../assets/icons/all-icons/icon-linkedin.png";
import "../styles/footer.css"; 
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="title-footer">©2024 Dario, All rights reserved</p>
      <div className="list-apps">
        <a href="https://www.instagram.com/dariomartinezgod/" target="_BLANK" className="link-app-footer">
          <Image src={iconInstagram} alt="icon instagram" width={40} height={40} loading="lazy" />
        </a>
        <a href="https://twitter.com/DarioGod07" target="_BLANK" className="link-app-footer">
          <Image src={iconX} alt="icon twitter - X" width={40} height={40} loading="lazy" />
        </a>
        <a href="https://www.linkedin.com/in/dario-martinez-597486291/" target="_BLANK" className="link-app-footer">
          <Image src={iconLinkedin} alt="icon linkedin" width={40} height={40} loading="lazy" />
        </a>
      </div>
    </footer>
  )
}
