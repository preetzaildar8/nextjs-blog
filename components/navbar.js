import { useContext } from 'react'
import { ThemeContext } from '../helpers/ThemeContext'
import Link from "next/link"
import styles from './navbar.module.css'

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <nav className={theme}>
            <ul className={styles.navbar}>
                <li><Link className={theme} href="/">Home</Link></li>
                <li><Link className={theme} href="/blogs">Blogs</Link></li>
                <li><Link className={theme} href="/about">About</Link></li>
                <li><Link className={theme} href="contact">Contact</Link></li>
                <li><Link className={theme} href="/signin">Sign In</Link></li>
                <li><button className={styles.navButton} onClick={toggleTheme}>Toggle Theme</button></li>
            </ul>
        </nav>
    )
}

// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import Link from "next/link";
// import { useContext } from "react";
// import AppContext from "../AppContext";

// export default function Navigation() {
//   const value = useContext(AppContext);
//   let { languageSelected } = value.state;
//   let { navbarAboutLink, navbarBlogsLink, navbarContactLink } = value.state.languages;

//   return (
//     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//       <Container>
//         <Link href="/">
//           <a className="navbar-brand">Bolgs by Khsuhanpreet</a>
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto"></Nav>
//           <Nav>
//             <Link href="/blogs">
//               <a className="nav-link">{navbarBlogsLink}</a>
//             </Link>
//             <Link href="/about">
//               <a className="nav-link">{navbarAboutLink}</a>
//             </Link>
//             <Link href="/contact">
//               <a className="nav-link">{navbarContactLink}</a>
//             </Link>
//             <NavDropdown
//               title={languageSelected.toUpperCase()}
//               id="collasible-nav-dropdown"
//             >
//               <NavDropdown.Item onClick={() => value.setLanguageSelected("en")}>
//                 English
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item onClick={() => value.setLanguageSelected("es")}>
//                 Spanish
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }