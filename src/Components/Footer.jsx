import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <a href="#" id="back-to-top" />
      {/* footer begin */}
      <footer>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex">
                  <div className="de-flex-col">
                    <a href="04_retro-index.html">
                      <img alt="" className="f-logo" src="" />
                      <span className="copy">
                        © Copyright 2021 - NFT LAnding page
                      </span>
                    </a>
                  </div>
                  <div className="de-flex-col">
                    <div className="social-icons">
                      <a href="#">
                        <i className="fa fa-facebook fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest fa-lg" />
                      </a>
                      <a href="#">
                        <i className="fa fa-rss fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
