import React from "react";
import "./section-buy.scss";
import Button from "../button/Button";
import SectionTitle from "../SectionTitle";
import { Parallax } from "react-parallax";

function SectionBuy() {
  const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <section id="section-buy" className="align-items-center">
      <Parallax
        bgImage={"img/section-buy-bg.jpg"}
        strength={500}
        bgImageStyle={{ objectFit: "none" }}
      >
        <div>
          {/* <div style={insideStyles}>HTML inside the parallax</div> */}
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <SectionTitle innerText="get your kindernay xiv" customClass="white" />
                <p className="white">
                  The first internal gear hub that accommodates a 12mm through-bolt, yielding a
                  total of 14 speeds out of just three simple planetary series. Also, the lightest
                  full-range 14-speed gear hub on the market, weighting just 1400 grams. For even
                  more practicality, we've designed the XIV with a wide gear range of 543% between
                  the first and fourteenth speed, and 13.9% gear intervals.
                </p>
                <Button name="btn primary" label="Buy Now" />
              </div>
            </div>
          </div>{" "}
        </div>
      </Parallax>
    </section>
  );
}

export default SectionBuy;
