"use client";

import { useState } from "react";

const CheckoutArea = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="shipping-area">
              <h3 className="fw-semibold">Project Request Details</h3>
              <p className="mb-4">
                Complete the information below so Altekmar can review equipment,
                installation requirements and project scope. No payment is processed here.
              </p>
              <form className="checkout-form" onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>Full name</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" required />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" className="form-control" required />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>Company</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Project Location</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Service or Equipment Needed</label>
                      <select className="form-control" defaultValue="">
                        <option value="" disabled>Select a category</option>
                        <option>Elevators & Vertical Mobility</option>
                        <option>Generators & Power Systems</option>
                        <option>Air Conditioning & HVAC</option>
                        <option>Security Systems</option>
                        <option>General Contracting</option>
                        <option>Equipment & Products</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Project Details</label>
                      <textarea className="form-control" rows="6"></textarea>
                    </div>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  Shopify and AZUL payment processing will be connected in a later phase.
                </p>
                <button type="submit" className="btn">Submit Project Request</button>
                {submitted ? (
                  <p className="mt-4 mb-0 text-theme" role="status">
                    Your request is ready. Backend delivery will be connected during the integration phase.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutArea;
