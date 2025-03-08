import React from "react";
import "./Aboutus.css";
import img14 from "../../Assets/img14.png";
import img15 from "../../Assets/img15.png";
import img16 from "../../Assets/img16.png";
import img17 from "../../Assets/img17.png";



const Aboutus = () => {


  
  return (
    <div className="about-us-container">
      <div className="about-us">
        <div className="left">
          <h1>About us</h1>
          <p>
            Welcome to PetzzyWeb, your trusted destination for all things
            pet-related! Whether you're searching for a new furry friend,
            shopping for pet essentials, or seeking expert veterinary advice,
            we’re here to make it easy, secure, and convenient.
          </p>
        </div>
        <div className="right">
          <img src={img14} alt="" />
        </div>
      </div>

        <div className="about-us-para">
        <p className="img1"> <img src={img15} alt="" />{" "}  </p>
        <p className="img2"> <img src={img15} alt="" />{" "}  </p>
        <div className="about-us-content" >
          <p>At PetzzyWeb, we believe that pets are family, and their health,
          happiness, and well-being are our top priorities. Our platform
          connects pet lovers with reputable sellers, offers a wide range of
          high-quality products, and provides access to certified veterinarians
          for online consultations and in-person care.  <img src={img15} alt="" /> </p>
         
        </div>
        </div>

        <div className="about-us our-mission">
        <div className="left our-mission-left">
          <h1>Our mission</h1>
          <p className="our-mission-para">
          is to create a seamless experience for pet owners, ensuring that everything from adopting a new pet to finding the right products or receiving professional medical care is just a click away. We’re dedicated to providing a reliable and compassionate service, built on trust, transparency, and a deep love for animals.
          </p>
        </div>
        <div className="right our-mission-right">
          <img src={img16} alt="" />
        </div>
      </div>

        <div className="about-us-sec3">
            <div className="sec3-left">
                <p>Whether you’re welcoming a new pet into your home or ensuring your current companion gets the best care, PetzzyWeb is here to support every step of your journey.</p>
            </div>

            <div className="sec3-img">
                <img src={img17} alt="" />
            </div>
            <div className="sec3-right">
           <p> Join our growing community of pet enthusiasts and discover the ultimate online hub for pets and pet care today!  </p>
            </div>
             </div>    
</div>

  
  );
};

export default Aboutus;
