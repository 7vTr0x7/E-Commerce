import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link className="findmore" to={"/search"}>
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="jbkjb"
          name="iPhone"
          price={999}
          stock={5}
          photo="https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large.jpg"
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
