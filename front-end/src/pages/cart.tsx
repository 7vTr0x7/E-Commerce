import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "jbkjb",
    name: "iPhone",
    price: 999,
    stock: 5,
    quantity: 3,
    photo:
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large.jpg",
    handler: () => {},
  },
];
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
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
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

        {cartItems.length > 0 && <Link to={"/shipping"}>CheckOut</Link>}
      </aside>
    </div>
  );
};

export default Cart;
