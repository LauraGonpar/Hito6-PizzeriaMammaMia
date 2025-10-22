import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, addToCart, removeFromCart, total } = useCart();
  console.log("🚀 Cart items:", cartItems);
  if (cartItems.length === 0) {
    return <p className="text-center mt-5">🛒 Tu carrito está vacío</p>;
  }

  return (
    <div className="cart-container dflex my-5">
      <h2 className="mb-4">🛍️ Tu carrito</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border-bottom py-3 mb-3 w-25"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "70px", height: "70px", borderRadius: "8px" }}
            />
            <div>
              <strong>{item.name}</strong>
              <p className="m-0">${item.price.toLocaleString("es-CL")}</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Button
              variant="outline-success"
              size="ml"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </Button>
            <span className="d-flex justify-content-center align-items-center">
              {item.quantity}
            </span>
            <Button
              variant="outline-success"
              size="ml"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </div>
        </div>
      ))}

      <div className="text-end mt-4">
        <h4>Total: ${total.toLocaleString("es-CL")}</h4>
      </div>
      <Button className="btn-success">Finalizar compra</Button>
    </div>
  );
};
