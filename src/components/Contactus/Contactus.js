import React from "react";
import "./Contact.css";
import img18 from "../../Assets/img18.png"

const Contactus = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-hero">
        <h1>Book a Consultation</h1>
        <p>
          Don't wait for a small issue to become a big problem. Contact one of
          our trusted veterinarians today and ensure your pet stays healthy and
          happy. Fill out the form below to book a consultation.
        </p>
      </div>
      <div className="contact-img">
        <img src={img18} alt="" />
      </div>
      
      <div class="form-container">
    <form class="info-form">
     

       {/* Section 1: Pet Owner's Information  */}
      <fieldset>
        <h2>Pet Owner's Information</h2>
        <div class="form-group">
          <label for="owner-name">Full Name</label>
          <input type="text" id="owner-name" name="owner-name" placeholder="Enter here" required/>
        </div>
        <div class="form-group">
          <label for="owner-email">Email</label>
          <input type="email" id="owner-email" name="owner-email" placeholder="Enter here" required/>
        </div>
        <div class="form-group">
          <label for="owner-phone">Phone Number</label >
          <input type="tel" id="owner-phone" name="owner-phone" placeholder="Enter here" required/>
        </div>
      </fieldset>

       {/* Section 2: Pet Information  */}
      <fieldset>
        <h2>Pet's Information</h2>
        <div class="form-group">
          <label for="pet-name">Pet's Name</label>
          <input type="text" id="pet-name" name="pet-name" placeholder="Enter here" required/>
        </div>
        <div class="form-group">
          <label for="pet-name">Species</label>
          <input type="text" id="pet-name" name="pet-name" placeholder="Enter here" required/>
        </div>
        <div class="form-group">
          <label for="pet-name">Breed ( if applicable ) </label>
          <input type="text" id="pet-name" name="pet-name" placeholder="Enter here" required/>
        </div>
        <div class="form-group">
          <label for="pet-name">Age</label>
          <input type="number" id="pet-name" name="pet-name" placeholder="Enter here" required/>
        </div>
        <div class="form-group">
          <label  style={{color:'black'}} for="pet-name">Primary Concern</label>
          <p style={{color:'white', fontSize:'16px',margin:'0', fontFamily:'poppins',fontWeight:'400'}}>(Briefly describe the reason for the consultation)</p>
          <input type="text" id="pet-name" name="pet-name" placeholder="Enter here" required/>
        </div>
       
      </fieldset>

       {/* Section 3: Consultation Method  */}
      <fieldset>
        <h2>Consultation Method<i class="fa-solid fa-angle-down"></i></h2>
        <div class="form-group">
           <label for="vet">Select Veterinarian</label> 
          <select id="vet" name="vet" required>
          <option value="">Online Consultation<span >499/-</span></option>
          <option value="dr-smith">In-Person Appointment <span>799/-</span></option>
            
          </select>
        </div>
      </fieldset>
        
     

       {/* Section 4: Preferred Veterinarian  */}
      <fieldset>
        <h2>Preferred Veterinarian<i class="fa-solid fa-angle-down"></i></h2>
        <div class="form-group">
          <label for="vet">Select Veterinarian:</label>
          <select id="vet" name="vet" required>
            <option value="">abc</option>
            <option value="">abc</option>
            <option value="">ABC</option>
          
          </select>
        </div>
      </fieldset>

       {/* Section 5: Payment Information  */}
      <fieldset>
        <h2>Payment Information<i class="fa-solid fa-angle-down"></i></h2>
        <div class="form-group">
          <label for="card-name">Cardholder Name:</label>
          <input type="text" id="card-name" name="card-name" placeholder="Name on card" required/>
        </div>
        <div class="form-group">
          <label for="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" placeholder="Enter your card number" required/>
        </div>
        <div class="form-group">
          <label for="expiry-date">Expiry Date:</label>
          <input type="month" id="expiry-date" name="expiry-date" required/>
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="password" id="cvv" name="cvv" placeholder="Enter CVV" required/>
        </div>
      </fieldset>

       {/* Submit Button  */}
       <div className="form-button">
      <button type="submit">Submit</button>
      <button type="reset" >Clear form</button>
      </div>
    </form>
  </div>
    </div>
  );
};

export default Contactus;
