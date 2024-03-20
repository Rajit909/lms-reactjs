import React from "react";

const Service = () => {
  return (
    <>
      <section class="two-column">
        <div class="container">
          <h4 class="section-title">Lorem Ipsum...</h4>
          <div class="row my-4">
            <div class="col-lg-6 col-md-12 p-0">
              <div class="image-wrap">
                <img src="/images/services.png" alt="gif" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12 align-self-center">
              <div class="two-col-content">
                <h5 class="inner-title">Services</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ip'sum has been the industry's
                  standard dummy text ever since the 1500s.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ip'sum has been the industry's standard dummy text ever since
                  the 1500s.
                </p>
                {/* <!-- <a href="#" class="text-capitalize pink-btn"> view more </a> --> */}
              </div>
            </div>
          </div>
          <div class="row flex-row-reverse">
            <div class="col-lg-6 col-md-12 p-0">
              <div class="image-wrap">
                <img src="/images/about.png" alt="gif" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12 align-self-center">
              <div class="two-col-content">
                <h5 class="inner-title">About Us</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ip'sum has been the industry's
                  standard dummy text ever since the 1500s.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ip'sum has been the industry's standard dummy text ever since
                  the 1500s.
                </p>
                {/* <!-- <a href="#" class="text-capitalize pink-btn"> view more </a> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
