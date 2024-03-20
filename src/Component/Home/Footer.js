import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <p class="footer-title">Product</p>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    Product 1
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    Product 2
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    Product 3
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <p class="footer-title">Company</p>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    About us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    Service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <p class="footer-title">Contact & Support</p>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="tel:+91 9876543210">
                    <i class="fas fa-phone mr-2"></i>+91 9876543210
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    <i class="fas fa-comments mr-2"></i>Live chat
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">
                    <i class="fas fa-envelope mr-2"></i>Frequently asked
                    questions
                  </a>
                </li>
                <ul class="list-inline social-buttons mb-0 py-2">
                  <li class="list-inline-item">
                    <a href="#0">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#0">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#0">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div class="col-12 text-center">
            <span class="copyright quick-links">
              Copyright &copy; Your Website 2021
              <script>document.write(new Date().getFullYear());</script>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
