import React from "react";

export default function Header() {
  return (
    <header className="transparent header-light scroll-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* logo begin */}
                  <div id="logo">
                    <h2 style={{ marginTop: "14px" }}>Landing Page</h2>
                  </div>
                  {/* logo close */}
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainmenu begin */}
                <ul id="mainmenu">
                  <li>
                    <a href="04_retro-index.html">Home</a>
                  </li>
                  <li>
                    <a href="04_retro-index.html">Collections</a>
                  </li>
                  <li>
                    <a href="04_retro-index.html">Roadmap</a>
                  </li>
                </ul>
                {/* mainmenu close */}
                <div className="menu_side_area">
                  <a href="04_retro-wallet.html" className="btn-main">
                    <i className="icon_wallet_alt" />
                    <span>Connect Wallet</span>
                  </a>
                  <span id="menu-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
