import { FaPlus } from "react-icons/fa";

type ProductType = {
  productId: string;
  name: string;
  price: number;
  stock: number;
  photo: string;
  handler: () => void;
};

const server = "vvn";

const ProductCard = ({
  productId,
  name,
  price,
  stock,
  photo,
  handler,
}: ProductType) => {
  return (
    <div className="product-card">
      <img src={`${photo}`} alt={name} />
      <p>{name}</p>
      <span>${price}</span>

      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
