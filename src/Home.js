import React from "react";
import "./Home.css";
import Product from "./Product";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-material-ui-carousel";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel autoPlay autoPlayInterval="3000">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="home page 1"
          />
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
            alt="home page 2"
          />
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/in_prime_pod_gw_adapts_acquisition_1500x600._CB405871129_.jpg"
            alt="home page 3"
          />
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonBooksMarketing/LandingPage/banner_4star_3000x1122._CB1198675309_.jpg"
            alt="home page 4"
          />
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            alt="home page 4"
          />
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={5}
          />
        </div>

        <Fade bottom>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              rating={3}
            />

            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              rating={5}
            />

            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              rating={4}
            />
          </div>
        </Fade>

        <Slide right>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              rating={4}
            />
          </div>
        </Slide>
        <Slide left>
          <div className="home__row">
            <Product
              id="12365489"
              title="Apple iPhone 11 (64GB) - Black"
              price={650.99}
              image="https://images-eu.ssl-images-amazon.com/images/I/41TR7G8VboL._AC_US160_FMwebp_QL70_.jpg"
              rating={5}
            />
            <Product
              id="12352489"
              title="OnePlus 8 Pro (Glacial Green 12GB RAM + 256GB Storage"
              price={200.99}
              image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY218_.jpg"
              rating={5}
            />
            <Product
              id="12361239"
              title="Samsung Galaxy Note 20(Mystic Bronze, 8GB RAM, 256GB Storage)"
              price={300.99}
              image="https://m.media-amazon.com/images/I/61ZhiGSzb7L._AC_UY218_.jpg"
              rating={4}
            />
            <Product
              id="12321342"
              title="PowerMax Fitness BS-150 Home Use Group Bike/Spin Bike with iPad & Bottle Holder"
              price={110.99}
              image="https://m.media-amazon.com/images/I/61gCBYR5G7L._AC_UY218_.jpg"
              rating={5}
            />
          </div>
        </Slide>
        <br />
      </div>
    </div>
  );
}

export default Home;
