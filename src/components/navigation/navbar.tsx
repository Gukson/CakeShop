import { AppBar, Toolbar } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    title: "Strona główna",
    link: "/",
  },
  {
    title: "Oferta i cennik",
    link: "/offer",
  },
  {
    title: "Zamów",
    link: "/order",
  },
];

const leftLinkStyle = {
  marginRight: "1rem",
  color: "white",
  textDecoration: "none",
};

const rightLinkStyle = {
  marginLeft: "auto",
  color: "white",
};

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {NavLinks.map((link) => (
          <Link key={link.link} style={leftLinkStyle} to={link.link}>
            {link.title}
          </Link>
        ))}
        <Box flexGrow={"1" }/>
        <Link key={"/cart"} style={rightLinkStyle} to={"/cart"}>
          <ShoppingCart />
        </Link>
        <IconedMenu icon={<AccountCircle/>}/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
