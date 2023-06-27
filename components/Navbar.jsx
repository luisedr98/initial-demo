import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      {menuItems.map((item) => (
        <ActiveLink key={item.href} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};
