/* eslint-disable no-unused-vars */
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
import Fade from "react-reveal/Fade";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Fade bottom>
      <FlipMove>
        <div className="checkoutProduct">
          <img className="checkoutProduct__image" src={image} alt="" />

          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title"> {title} </p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
          </div>
        </div>
      </FlipMove>
    </Fade>
  );
}

export default CheckoutProduct;
