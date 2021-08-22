import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import Colors from "./Colors";
import '../css/Details.css';

const Details = (props) => {
  const productContext = useContext(DataContext);

  const [product, setProduct] = useState([]);

  const getProductItem = () => {
    if (props.match.params.id) {
      const result = productContext.products;

      const data = result.filter((item) => {
        return item._id === props.match.params.id;
      });
      setProduct(data);
    }
  };

  useEffect(() => {
    getProductItem();
  }, []);

  return (
    <>
      {product.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.src} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
           <Colors color={item.colors} />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <Link to="/cart" className="cart">
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
