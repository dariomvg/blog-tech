import Image from "next/image";
import iconArrow from "../assets/icons/icon-arrow.png";
import "../styles/section-cards-main.css";
import Link from "next/link";

export const SectionCardsMain = ({ title, route, children }) => {
  return (
    <section className="container-cards">
      <h2 className="title-container">{title}</h2>
      <div className="list-cards">{children}</div>
      <Link href={`/${route}`} className="link-more">
        Ver todo
        <Image
          src={iconArrow}
          alt="image arrow"
          width={20}
          height={20}
          loading="lazy"
        />
      </Link>
    </section>
  );
};
