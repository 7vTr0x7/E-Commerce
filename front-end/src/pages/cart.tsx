import { useState } from "react";

const cartItems = [];
const subTotal = 999;
const shippingCharges = 200;
const tax = Math.round(subTotal * 0.18);
const total = subTotal + tax + shippingCharges;
const discount = 90;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Sub Total : ₹{subTotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em> - ₹{discount} </em>
        </p>
        <p>
          <b>Total : ₹{total}</b>
        </p>
      </aside>
    </div>
  );
};

export default Cart;
