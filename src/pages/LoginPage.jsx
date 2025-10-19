import { Form } from "react-bootstrap";
import "./LoginPage.css";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    setError(false);
    setPasswordError("");
    if (!email.trim() || !password.trim()) {
      setError(true);
      return;
    }

    if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setEmail("");
    setPassword("");
    alert("Ingreso de usuario con éxito");
  };
  return (
    <div className="login-page">
      <Form className="login-form  " onSubmit={validarDatos}>
        <h4>Ingreso de usuario</h4>

        {error ? (
          <div className="alert alert-danger">
            <p>Todos los campos son obligatorios</p>
          </div>
        ) : null}
        {passwordError && (
          <div className="alert alert-danger">{passwordError}</div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Registrarse
        </button>
      </Form>
    </div>
  );
};
