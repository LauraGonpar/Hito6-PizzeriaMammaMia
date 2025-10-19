import { useState } from "react";
import { Form } from "react-bootstrap";
import "./RegisterPage.css";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    setError(false);
    setPasswordError("");
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError(true);
      return;
    }

    if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden.");
      return;
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    alert("Usuario registrado con éxito");
  };
  return (
    <div className="register-page">
      <Form className="register-form  " onSubmit={validarDatos}>
        <h4>Registro de usuario</h4>

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
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="Confirmar contraseña"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Registrarse
        </button>
      </Form>
    </div>
  );
};
