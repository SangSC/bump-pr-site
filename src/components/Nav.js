import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "blog",
    name: "BOC Blog",
  },
  {
    path: "contact",
    name: "Newsletter",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            key={index}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
