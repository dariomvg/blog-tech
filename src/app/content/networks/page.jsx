import Image from "next/image";
import iconInstagram from "@/assets/icons/icon-instagram.png";
import iconLinkedin from "@/assets/icons/icon-linkedin.png";
import iconTwitter from "@/assets/icons/icon-twitter.png";
import "./networks.css";

export default function RouteContentContacts() {
  return (
    <section className="section-routes-contacts">
      <strong className="title-redes">Redes</strong>
      <div className="list-apps">
        <a
          href="https://www.instagram.com/dariomartinezgod/"
          target="_BLANK"
          className="link-app-contact">
          <Image
            src={iconInstagram}
            alt="icon instagram"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
        <a
          href="https://twitter.com/DarioGod07"
          target="_BLANK"
          className="link-app-contact">
          <Image
            src={iconTwitter}
            alt="icon twitter - x"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dario-martinez-597486291/"
          target="_BLANK"
          className="link-app-contact">
          <Image
            src={iconLinkedin}
            alt="icon linkedin"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
      </div>

      <a
        href="https://dario-martinez.vercel.app/"
        target="_BLANK"
        className="link-portfolio-contact">
        Portfolio
      </a>
    </section>
  );
}
