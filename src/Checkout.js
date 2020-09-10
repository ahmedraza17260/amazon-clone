/* eslint-disable no-unused-vars */
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="add_image"
        />
        {basket.length === 0 ? (
          <div>
            <h5 style={{ marginRight: "10px", paddingLeft: "10px" }}>
              Hello, {user?.email}
            </h5>
            <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
            <p
              className=""
              style={{
                marginRight: "10px",
                paddingLeft: "10px",
                paddingTop: "5px",
              }}
            >
              You have no item in the basket . To buy one or more items,
              click"Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h5 style={{ marginRight: "10px", paddingLeft: "10px" }}>
              Hello, {user?.email}
            </h5>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
