import { useEffect, useState } from "react";
import Product from "./Product.jsx";

const Products = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
    return (
        <div>
          <div className="w-3/4 mx-auto space-y-8 py-10 text-center">
          <h1 className="text-4xl font-bold p-4 shadow-purple-600 shadow-md">Our Products</h1>
          <p className="text-xl">Explore our diverse range of products, thoughtfully crafted to meet your needs and enhance your lifestyle. From top-quality essentials to innovative solutions, we bring you the best to fuel your passions and elevate your experiences</p>
          </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    products?.map((product, i)=> <Product
                    key={i}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;