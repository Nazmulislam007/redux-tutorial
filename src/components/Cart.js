import React from "react";
import { useDispatch, useSelector } from "react-redux";
import items from "../api/cartItems";
import { actionAuth } from "../store/auth-slice";
import { actionCart } from "../store/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actionAuth.logout());
  };

  const style = {
    marginRight: "1rem",
    cursor: "pointer",
    padding: "5px 10px",
    background: "#f15b5b",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      <nav>
        <div style={style} onClick={() => dispatch(actionCart.setShowCart())}>
          product {cart.totalQuantity}
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="grid">
        {items.map((item) => {
          const { id, price, name, img } = item;
          return (
            <div key={id}>
              <img src={img} alt={name} />
              <p>{name}</p>
              <p>{price}</p>
              <button
                onClick={() =>
                  dispatch(actionCart.addToCart({ id, price, name, img }))
                }
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <p>TotalPrice </p>
        {cart.itemsList?.reduce((prev, curnt) => prev + curnt.totalPrice, 0)}
      </div>
      {cart.showCart && (
        <div className="flex">
          {cart.itemsList?.map((prod) => {
            const { id, name, img, price, totalPrice, quantity } = prod;
            return (
              <div key={id}>
                <img src={img} alt={name} />
                <p>{name}</p>
                <p>{quantity}</p>
                <p>{totalPrice}</p>
                <button
                  onClick={() =>
                    dispatch(actionCart.addToCart({ id, price, name, img }))
                  }
                >
                  Add Item
                </button>
                <button
                  onClick={() =>
                    dispatch(actionCart.removeToCart({ id, price, name, img }))
                  }
                >
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
