import MenuContent from "@/components/MenuContent";
import "./globals-content.css";

export default function ContentLayout({ children }) {
  return (
    <>
      <section className="wrapper-content">
        <MenuContent />
        <section className="nav-routes">{children}</section>
      </section>
    </>
  );
}
