import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    county: "",
    pinCode: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="shipping">
      <button>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address</h1>
        <input
          type="text"
          name="address"
          placeholder="address"
          value={shippingInfo.address}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Shipping;
