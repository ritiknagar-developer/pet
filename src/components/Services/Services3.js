import React from "react";
import "./Services.css";
import img13 from "../../Assets/img13.png";
import img11 from "../../Assets/img11.png";
import img12 from "../../Assets/img12.png";
import { Link } from "react-router-dom";


const Services3 = () => {
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
            <img src={img13} alt="" />
          </div>
          <div className="pets-content">
            <h3>Expert Veterinary Care  </h3>
            <p>
              Whether your pet needs a routine check-up or you’re concerned
              about their health, PetzzyWeb connects you with experienced
              veterinarians who are here to help. Our platform allows you to
              book online consultations or in-person appointments with licensed
              vets.
            </p>
          </div>
        </div>

        <div className="sell-buy-pets reverse">
          <div className="pets-img">
            <img src={img11} alt="" />
          </div>
          <div className="pets-content">
            <h3>Convenient Online Consultations  </h3>
            <p>
              Don’t have time to visit a clinic? PetzzyWeb makes it easy to
              arrange virtual consultations with veterinary experts. Get
              professional advice and care for your pet from the comfort of your
              home.
            </p>
          </div>
        </div>

        <div className="sell-buy-pets margin">
          <div className="pets-img">
            <img src={img12} alt="" />
          </div>
          <div className="pets-content">
            <h3>Booking Made Simple    </h3>
            <p>
              Browse our network of trusted veterinarians, choose the right
              specialist for your pet, and book an appointment at a time that
              works for you.
            </p>
            <button className="margin-top">Find a Vet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services3;
