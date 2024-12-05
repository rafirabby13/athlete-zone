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