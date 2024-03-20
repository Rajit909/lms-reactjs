import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section class="main-banner bg-img">
        <div class="container">
          <div class="banner-content text-center">
            <h6 class="text-white text-uppercase">
              Lorem Ipsum is simply dummy text of the printing.
            </h6>
            <h4 class="text-white text-uppercase">Future Is Here</h4>
            <p class="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ip'sum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a href="#0" class="pink-btn read-more">
              read more
            </a>
          </div>
          <div class="service-row row">
            <div class="service-col col-md-4 col-sm-6 col-12">
              <div class="service-card">
                <Link to="/packages/basic" className="stretched-link">
                  .
                </Link>
                {/* <a href="/basic.html" class="stretched-link">
                  .
                </a> */}
                {/* <!-- <span><i class="fa fa-mug-hot"></i></span> --> */}
                <div class="inner-div">
                  <img src="/images/1.png" class="img-fluid" alt="img" />
                </div>
                <h5>
                  <b>Basic</b>
                </h5>
                <p class="amount">
                  <i class="fas fa-rupee-sign"></i>
                  <b>2999&nbsp;/&nbsp;6month</b>
                </p>
                <ul>
                  <li>
                    <span>&#10004;</span>Ipsum is simply dummy text of the
                    printing
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum has been the industry's
                    standard dummy text
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text
                  </li>
                </ul>
              </div>
            </div>
            <div class="service-col col-md-4 col-sm-6 col-12">
              <div class="service-card f2f2">
                <Link to="/packages/secondary" className="stretched-link">
                  .
                </Link>
                {/* <!-- <span><i class="far fa-clock"></i></span> --> */}
                <div class="inner-div">
                  <img src="/images/2.png" class="img-fluid" alt="img" />
                </div>
                <h5>
                  <b>Secondary</b>
                </h5>
                <p class="amount">
                  <i class="fas fa-rupee-sign"></i>
                  <b>3999&nbsp;/&nbsp;years</b>
                </p>
                <ul>
                  <li>
                    <span>&#10004;</span>Ipsum is simply dummy text of the
                    printing
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum has been the industry's
                    standard dummy text
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text
                  </li>
                </ul>
              </div>
            </div>
            <div class="service-col col-md-4 col-sm-6 col-12">
              <div class="service-card">
                <Link to="/packages/premium" className="stretched-link">
                  .
                </Link>
                {/* <!-- <span><i class="fa fa-truck"></i></span> --> */}
                <div class="inner-div">
                  <img src="/images/3.png" class="img-fluid" alt="img" />
                </div>
                <h5>
                  <b>Permium</b>
                </h5>
                <p class="amount">
                  <i class="fas fa-rupee-sign"></i>
                  <b>4999&nbsp;/&nbsp;2years</b>
                </p>
                <ul>
                  <li>
                    <span>&#10004;</span>Ipsum is simply dummy text of the
                    printing
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum has been the industry's
                    standard dummy text
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum
                  </li>
                  <li>
                    <span>&#10004;</span>Lorem Ipsum is simply dummy text
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
