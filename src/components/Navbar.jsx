import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

export default function NavbarComponent() {
  const { total } = useCart();

  const token = true;

  return (
    <nav>
      <Navbar expand="lg" className="bg-dark ">
        <Container>
          <Navbar.Brand className="link-light fw-bold title-hover" href="/">
            Pizzería Mamma Mía
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className="link-light nav-hover-dark" href="/">
                🏠 Home
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link
                    className="link-light nav-hover-dark"
                    href="/profile"
                  >
                    🔓 Profile
                  </Nav.Link>
                  <Nav.Link className="link-light nav-hover-dark" href="/404">
                    🔒 Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="link-light nav-hover-dark" href="/login">
                    🔐 Login
                  </Nav.Link>
                  <Nav.Link
                    className="link-light nav-hover-dark"
                    href="/register"
                  >
                    🔐 Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <>
          <Nav.Link className="me-auto p-2 card-hover-dark" href="/cart">
            {" "}
            🛒 Total: ${total.toFixed(0)}
          </Nav.Link>
        </>
      </Navbar>
    </nav>
  );
}
