import React from "react";
import  "./HomeSlideFoot.css";
import 'material-design-lite/material.css';

export default class Footer extends React.Component {
    render() {
        const footerStyle = {
          backgroundColor: "#373737",
        };


 
    return (
        <div >
            
            <div style={footerStyle}>
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-grid footer-main">
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone">
            <h5 className="footer-heading">
              KNOCK KNOCK <hr className="hr-footer" />{" "}
            </h5>
            <ul>
              <a href="">
                <li>
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-mail-f7a800f328eab451231c558115ad0067bdd6c5ba04b7acd19f22ae4036e702d1.png" />
                  support@knockkock.com
                </li>
              </a>
              <li>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e.png" />
                +91 90-9696-9696
              </li>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone">
            <h5 className="footer-heading">
              Company <hr className="hr-footer" />{" "}
            </h5>
            <ul>
              <a href="">
                <li>About Us</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>Careers</li>
              </a>
              <a href="">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone">
            <h5 className="footer-heading">
              Policy <hr className="hr-footer" />{" "}
            </h5>
            <ul>
              <a href="">
                <li>Privay Policy</li>
              </a>
              <a href="">
                <li>Terms & Conditions</li>
              </a>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone">
            <h5 className="footer-heading">
              Quick Links <hr className="hr-footer" />{" "}
            </h5>
            <ul>
              <a href="">
                <li>shops</li>
              </a>
              <a href="">
                <li>Offers</li>
              </a>
              <a href="">
                <li>products</li>
              </a>
              <a href="">
                <li>Own a Franchise</li>
              </a>
              <a href="">
                <li>Earn with us</li>
              </a>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone">
            <h5 className="footer-heading">
              Follow Us <hr className="hr-footer" />{" "}
            </h5>
            <ul className="social-links">
              <li>
                <a href="">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Insta-e068316ffc568b3c0162ef129542c4ec473fedb2317cc8132168a07a0616b475.png" />
                </a>
                <a href="">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Facebook-ad24f92a1479ca4c5b308092f11f91d3ad2189d505ba2a737f376943a89b721b.png" />
                </a>
                <a href="">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Linkedin-685bfa4464dc2263601740aad98014e02801299c7f2104be70458ac13d061fa1.png" />
                </a>
                <a href="">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Youtube-35dbc9202b8e7b71d09c782934215b9f6a78a1b3b11d190b5ad275c004484295.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone">
            <h5 className="footer-heading">
              Download Our App <hr className="hr-footer" />{" "}
            </h5>
            <ul>
              <li>
                <a href="">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/app_store-4407bc8ced0d52a50ff042ce51e32d51de3e11717955798ec54c6a28e7926c7c.png" />
                </a>
                <a href="">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/play_store-057f9061b4cd0fd4953a485569c15e63fdf8d89b0bcc025c04cfb34d9e8cd571.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        </div>
        </div>
        </div>
        
    );
  }
}
