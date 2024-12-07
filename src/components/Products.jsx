/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Product from "./Product.jsx";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { TailSpin } from "react-loader-spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { dataLoading, setDataLoading } = useContext(AuthContext);

  useEffect(() => {
    setDataLoading(true);
    fetch("https://athlete-zone-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setDataLoading(false);
        // console.log(data);
        setProducts(data);
      });
  }, [setDataLoading]);

  return (
    <div>
      {dataLoading ? (
        <div className="flex justify-center"><span className="loading loading-bars loading-lg mx-auto"></span></div>
      ) : (
        <div>
          <div className="md:w-3/4 mx-auto space-y-8 py-10 text-center">
            <h1 className="text-2xl md:text-4xl font-bold p-4 shadow-purple-600 shadow-md">
              Our Products
            </h1>
            <p className="text-lg md:text-xl">
              Explore our diverse range of products, thoughtfully crafted to
              meet your needs and enhance your lifestyle. From top-quality
              essentials to innovative solutions, we bring you the best to fuel
              your passions and elevate your experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((product, i) => (
              <Fade
                cascade
                delay={i * 200}
                direction="left"
                triggerOnce={true}
                damping={0.1}
                key={i}
              >
                {" "}
                <Product product={product}></Product>
              </Fade>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
