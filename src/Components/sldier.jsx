import React from "react";
import Faq from "react-faq-component";
import Image1 from "../images/1.ba00bd3a.jpg";

import Image2 from "../images/4.12bce2bb.jpg";
import Image3 from "../images/7.6c56ed2e (1).jpg";
import Image4 from "../images/Conor.02c32c39.png";
import Image5 from "../images/Monoliff.c1875efb.png";
import Image6 from "../images/Obo.ca07b9cd.png";

export default function Homepage() {
  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
    ],
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />

      <section
        id="section-hero"
        className="no-bottom"
        aria-label="section"
        style={{ backgroundSize: "cover" }}
      >
        <div className="d-carousel" style={{ backgroundSize: "cover" }}>
          <div
            id="item-carousel-big"
            className="owl-carousel wow fadeIn owl-loaded owl-drag animated"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationName: "fadeIn",
            }}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1374px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "5042px",
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image1} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image2} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image3} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image4} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image5} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image6} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image1} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "433.333px", marginRight: "25px" }}
                >
                  <div className="nft_pic" style={{ backgroundSize: "cover" }}>
                    <a href="03_grey-item-details.html">
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">NFT Title</span>
                        <span className="nft_pic_by">Author Name</span>
                      </span>
                    </a>
                    <div
                      className="nft_pic_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <img src={Image3} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
          <div
            className="d-arrow-left"
            style={{ backgroundSize: "cover", opacity: 0, display: "block" }}
          >
            <i className="fa fa-angle-left" />
          </div>
          <div
            className="d-arrow-right"
            style={{ backgroundSize: "cover", opacity: 0, display: "block" }}
          >
            <i className="fa fa-angle-right" />
          </div>
        </div>
      </section>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Payment Methods</h2>
            <div className="small-border bg-color-2" />
          </div>
        </div>
      </div>
      <section id="section-intro" className="no-top no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-sm-30">
              <div className="feature-box f-boxed style-3">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet" />
                <div className="text">
                  <h4 className="wow fadeInUp">Set up your wallet</h4>
                  <p className="wow fadeInUp" data-wow-delay=".25s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
                <i className="wm icon_wallet" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-sm-30">
              <div className="feature-box f-boxed style-3">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt" />
                <div className="text">
                  <h4 className="wow fadeInUp">Add your NFT's</h4>
                  <p className="wow fadeInUp" data-wow-delay=".25s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
                <i className="wm icon_cloud-upload_alt" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-sm-30">
              <div className="feature-box f-boxed style-3">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt" />
                <div className="text">
                  <h4 className="wow fadeInUp">Sell your NFT's</h4>
                  <p className="wow fadeInUp" data-wow-delay=".25s">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
                <i className="wm icon_tags_alt" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section-items"
        className="no-bottom"
        style={{ padding: "20px 20px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>New Items</h2>
                <div className="small-border bg-color-2" />
              </div>
            </div>
            <div id="items-carousel" className="owl-carousel wow fadeIn">
              {/* nft item begin */}
              <div className="d-item">
                <div className="nft__item">
                  <div className="de_countdown" />
                  <div className="author_list_pp"></div>
                  <div className="nft__item_wrap">
                    <a href="04_retro-item-details.html">
                      <img
                        src={Image1}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="04_retro-item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>

                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* nft item begin */}

              {/* nft item begin */}
              <div className="d-item">
                <div className="nft__item">
                  <div className="de_countdown" />
                  <div className="author_list_pp"></div>
                  <div className="nft__item_wrap">
                    <a href="04_retro-item-details.html">
                      <img
                        src={Image2}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="04_retro-item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>

                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* nft item begin */}
              {/* nft item begin */}
              <div className="d-item">
                <div className="nft__item">
                  <div className="de_countdown" />
                  <div className="author_list_pp"></div>
                  <div className="nft__item_wrap">
                    <a href="04_retro-item-details.html">
                      <img
                        src={Image3}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="04_retro-item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>

                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* nft item begin */}
              {/* nft item begin */}
              <div className="d-item">
                <div className="nft__item">
                  <div className="de_countdown" />
                  <div className="author_list_pp"></div>
                  <div className="nft__item_wrap">
                    <a href="04_retro-item-details.html">
                      <img
                        src={Image4}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="04_retro-item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>

                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* nft item begin */}
              {/* nft item begin */}
              <div className="d-item">
                <div className="nft__item">
                  <div className="de_countdown" />
                  <div className="author_list_pp"></div>
                  <div className="nft__item_wrap">
                    <a href="04_retro-item-details.html">
                      <img
                        src={Image5}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="04_retro-item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>

                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* nft item begin */}
              {/* nft item begin */}
              <div className="d-item">
                <div className="nft__item">
                  <div className="de_countdown" />
                  <div className="author_list_pp"></div>
                  <div className="nft__item_wrap">
                    <a href="04_retro-item-details.html">
                      <img
                        src={Image6}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="04_retro-item-details.html">
                      <h4>Pinky Ocean</h4>
                    </a>

                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* nft item begin */}
            </div>
          </div>
        </div>
      </section>

      <section id="section-items" className="no-bottom">
        <div className="container">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>FAQS</h2>
              <div className="small-border bg-color-2" />
            </div>
          </div>
          <div className="row">
            <Faq data={data} />
          </div>
        </div>
      </section>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Our Road Map</h2>
            <div className="small-border bg-color-2" />
          </div>
        </div>
      </div>
      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Promototions & Giveaways</h2>

            <p>
              Promote and giveaway NFT's/ETH leading up to the Octoplush
              release.
            </p>
          </div>{" "}
          {/* cd-timeline-content */}
        </div>{" "}
        {/* cd-timeline-block */}
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie"></div>{" "}
          {/* cd-timeline-img */}
          <div className="cd-timeline-content">
            <h2>Title of section 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <span className="cd-date">Jan 18</span>
          </div>{" "}
          {/* cd-timeline-content */}
        </div>{" "}
        {/* cd-timeline-block */}
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>{" "}
          {/* cd-timeline-img */}
          <div className="cd-timeline-content">
            <h2>Title of section 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, obcaecati, quisquam id molestias eaque asperiores
              voluptatibus cupiditate error assumenda delectus odit similique
              earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit,
              itaque, deserunt corporis vero ipsum nisi eius odio natus ullam
              provident pariatur
            </p>
            <span className="cd-date">Jan 24</span>
          </div>{" "}
          {/* cd-timeline-content */}
        </div>{" "}
        {/* cd-timeline-block */}
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location"></div>{" "}
          {/* cd-timeline-img */}
          <div className="cd-timeline-content">
            <h2>Title of section 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
              qui ut.
            </p>
            <span className="cd-date">Feb 14</span>
          </div>{" "}
          {/* cd-timeline-content */}
        </div>{" "}
        {/* cd-timeline-block */}
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location"></div>
          <div className="cd-timeline-content">
            <h2>Title of section 5</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum.
            </p>
            <span className="cd-date">Feb 18</span>
          </div>{" "}
          {/* cd-timeline-content */}
        </div>{" "}
        {/* cd-timeline-block */}
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie"></div>{" "}
          {/* cd-timeline-img */}
          <div className="cd-timeline-content">
            <h2>Final Section</h2>
            <p>This is the content of the last section</p>
            <span className="cd-date">Feb 26</span>
          </div>{" "}
          {/* cd-timeline-content */}
        </div>{" "}
        {/* cd-timeline-block */}
      </section>
    </div>
  );
}
