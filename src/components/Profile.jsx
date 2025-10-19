import { Container, Card, Button } from "react-bootstrap";
import "./Profile.css";

export const Profile = () => {
  const user = {
    email: "usuario@ejemplo.com",
    name: "Juan Pérez",
  };

  return (
    <Container className="container my-5 d-flex flex-column align-items-center">
      <h2 className="text-center mb-4">Perfil de Usuario</h2>

      <Card style={{ maxWidth: "600px" }} className="mx-auto shadow-lg">
        <Card.Body>
          <Card.Title className="text-primary fs-3">{user.name}</Card.Title>

          <div className="mt-3">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>

          <hr />

          <Button variant="danger" className="w-100 mt-3">
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
