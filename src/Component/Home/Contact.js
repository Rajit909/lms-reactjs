import React from "react";

const Contact = () => {
  return (
    <>
      {/* <!-- contact-section --> */}
      <section class="contacts-sect blog-detail mb-0" id="contactus">
        <div class="container-fluid contact">
          <h4 class="section-title">Contact Us</h4>
          <div class="inner-div">
            <div class="row">
              <div class="col-sm-8 lt">
                <p class="head">Write some words</p>
                <textarea
                  class="text"
                  placeholder="Your words are important for our growth. Thank You."
                ></textarea>
                <input type="text" placeholder="Enter your email." />
                <button class="submit pink-btn">Submit</button>
                <h2>Find Us Here</h2>
                <div class="footer">
                  <a href="0" class="social-icons">
                    <img
                      class="img-fluid"
                      src="/images/facebook.png"
                      alt="img"
                    />
                  </a>
                  <a href="0" class="social-icons">
                    <img
                      class="img-fluid"
                      src="/images/linkedin.png"
                      alt="img"
                    />
                  </a>
                  <a href="0" class="social-icons">
                    <img
                      class="img-fluid"
                      src="/images/youtube.png"
                      alt="img"
                    />
                  </a>
                  <a href="0" class="social-icons">
                    <img
                      class="img-fluid"
                      src="/images/twitter.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div class="row m-0">
                  <div class="col-md-5">
                    <i class="fas fa-phone-alt"></i>
                    <span>12345 67890</span>
                  </div>
                  <div class="col-md-6">
                    <i class="fas fa-envelope"></i>
                    <span>example@gamil.com</span>
                  </div>
                  <div class="col-12">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>xxx, yyy, zzz - 111 222</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
