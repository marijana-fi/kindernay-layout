import React from "react";
import "./section-why.scss";
import CardWhy from "./CardWhy";
import whyData from "../../data/whyData";
import SectionTitle from "../SectionTitle";

function SectionWhy() {
  return (
    <section id="section-why">
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <SectionTitle innerText="Why kindernay" />
          </div>

          {whyData.map((card) => (
            <CardWhy label={card.label} key={card.label} text={card.text} path={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionWhy;
