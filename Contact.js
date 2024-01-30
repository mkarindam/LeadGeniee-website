import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Get 10 New Quality Leads</h1>
      <h1 className="primary-heading">Within 30 Days, or You Don't Pay</h1>

      <div className="contact-form-container">
      <form action="your_server_endpoint" method="post">
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" placeholder="Ari Bhaii" required></input>   
        <label for="contactNo">Contact No:</label>
        <input type="tel" id="contactNo" name="contactNo" placeholder="8697****39" required></input> 
        <label for="email">Email ID:</label>
        <input type="email" id="email" name="email" placeholder="yourmail@gmail.com" required></input>
        <button type="submit" class="secondary-button">Register</button>
       </form>
      </div>
    
    </div>
  );
};

export default Contact;
