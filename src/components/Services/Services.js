import React from "react";
import "./Services.css";
import img4 from '../../Assets/img4.png';
import img5 from '../../Assets/img5.png';
import img6 from '../../Assets/img6.png';
import { Link } from "react-router-dom";









const Services = () => {  
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
         {/* <a href="Services.js">Sell & Buy Pets</a>
        <a href="Services2.js">Shop for Pet Essentials</a>
        <a href="Services3.js">Consult a Vet</a>  */}
       <li><Link to="/services">Sell & Buy Pets</Link>  </li>
       <li><Link to="/services2">Shop for Pet Essentials</Link>  </li>
      <li> <Link to="/services3">Consult a Vets</Link>  </li>

      </div>

      <div className="sell-by-pets-container">
      <div className="sell-buy-pets">
        <div className="pets-img">
        <img src={img4} alt="" />
        </div>
        <div className="pets-content">
          <h3>Find Your Perfect Pet  </h3>
          <p>
            Searching for a new furry, feathered, or scaled friend? At
            PetzzyWeb, you can browse a variety of pets, from dogs and cats to
            more exotic animals like parrots or reptiles. Our user-friendly
            platform allows you to connect with pet owners and breeders,
            ensuring a transparent and smooth adoption or purchase process.
          </p>
          <button>Buy now</button>
        </div>
      </div>


       
      <div className="sell-buy-pets reverse">
        <div className="pets-img">
        <img src={img5} alt="" />
        </div>
        <div className="pets-content">
          <h3>Find Your Perfect Pet  </h3>
          <p>
            Searching for a new furry, feathered, or scaled friend? At
            PetzzyWeb, you can browse a variety of pets, from dogs and cats to
            more exotic animals like parrots or reptiles. Our user-friendly
            platform allows you to connect with pet owners and breeders,
            ensuring a transparent and smooth adoption or purchase process.
          </p>
          <button>Sell now</button>
        </div>
      </div>

      <div className="sell-buy-pets margin">
        <div className="pets-img">
        <img src={img6} alt="" />
        </div>
        <div className="pets-content">
          <h3>Find Your Perfect Pet  </h3>
          <p>
            Searching for a new furry, feathered, or scaled friend? At
            PetzzyWeb, you can browse a variety of pets, from dogs and cats to
            more exotic animals like parrots or reptiles. Our user-friendly
            platform allows you to connect with pet owners and breeders,
            ensuring a transparent and smooth adoption or purchase process.
          </p>
         
        </div>
      </div>
      </div>

  
      
    </div>
    
  );
};

export default Services;




