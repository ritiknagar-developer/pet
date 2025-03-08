import React from "react";
import "./Services.css";
import img7 from "../../Assets/img7.png";
import img8 from "../../Assets/img8.png";
import img9 from "../../Assets/img9.png";
import { Link } from "react-router-dom";

const Services2 = () => {
  return (
    <div className="services">
      <div className="service-hero">
        <h1>Our services</h1>
        <p>
          At PetzzyWeb, we provide a comprehensive platform to meet all your
          pet-related needs, whether you're looking to adopt, buy, or sell a
          pet, shop for essentials, or consult a trusted veterinarian. Explore
          the services we offer below:
        </p>
      </div>

      <div className="services-option">
        <li>
          <Link to="/services">Sell & Buy Pets</Link>{" "}
        </li>
        <li>
          <Link to="/services2">Shop for Pet Essentials</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/services3">Consult a Vets</Link>{" "}
        </li>
      </div>

      <div className="sell-by-pets-container">
        <div className="sell-buy-pets">
          <div className="pets-img">
            <img src={img7} alt="" />
          </div>
          <div className="pets-content">
            <h3>Wide Range of Products  </h3>
            <p>
              PetzzyWeb offers an extensive selection of pet products to meet
              every need. From nutritious pet food and stylish accessories to
              fun toys, health supplements, and grooming products, we've got you
              covered.
            </p>
           
          </div>
        </div>

        <div className="sell-buy-pets reverse">
          <div className="pets-img">
            <img src={img8} alt="" />
          </div>
          <div className="pets-content">
            <h3>Quality You Can Trust  </h3>
            <p>
              We partner with trusted brands to ensure that every product meets
              the highest standards of quality and safety, so you can shop with
              confidence.
            </p>
           
          </div>
        </div>

        <div className="sell-buy-pets margin">
          <div className="pets-img">
            <img src={img9} alt="" />
          </div>
          <div className="pets-content">
            <h3>Fast and Reliable Delivery  </h3>
            <p>
              Get everything you need for your pet delivered right to your door.
              Our fast shipping options make it easy to keep your pets happy and
              healthy.
            </p>
        <button className="margin-top">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
