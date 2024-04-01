import { set } from "firebase/database";
import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
const subTotal = 999;
const shippingCharges = 200;
const tax = Math.round(subTotal * 0.18);
const total = subTotal + tax + shippingCharges;
const discount = 90;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearInterval(timeOut);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

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

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span>
              ₹{discount} Off Using The <code>{couponCode}</code>
            </span>
          ) : (
            <span>
              Invalid Coupon <VscError />{" "}
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
