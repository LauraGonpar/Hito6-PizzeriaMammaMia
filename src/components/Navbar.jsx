import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  const { total } = useContext(CartContext);

  const token = true;

  return (
    <nav>
      <Navbar expand="lg" className="bg-dark ">
        <Container>
          <Navbar.Brand
            as={Link}
            className="link-light fw-bold title-hover"
            to="/"
          >
            Pizzería Mamma Mía
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link as={Link} className="link-light nav-hover-dark" to="/">
                🏠 Home
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link
                    as={Link}
                    className="link-light nav-hover-dark"
                    to="/profile"
                  >
                    🔓 Profile
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="link-light nav-hover-dark"
                    to="/404"
                  >
                    🔒 Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    className="link-light nav-hover-dark"
                    to="/login"
                  >
                    🔐 Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="link-light nav-hover-dark"
                    to="/register"
                  >
                    🔐 Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <>
          <Nav.Link
            as={Link}
            className="me-auto p-2 card-hover-dark"
            to="/cart"
          >
            🛒 Total: ${total.toFixed(0)}
          </Nav.Link>
        </>
      </Navbar>
    </nav>
  );
}
