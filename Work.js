import React from "react";
import PickMeals from "../Assets/data-collection-in-healthcare.gif";
import ChooseMeals from "../Assets/1.webp";
import DeliveryMeals from "../Assets/download.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Gather Content",
      text: "In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation of our strategy, serving to attract a greater number of potential clients to your business.",
    },
    {
      image: ChooseMeals,
      title: "Launch Ads",
      text: "Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social media platforms to capture clients attention. ",
    },
    {
      image: DeliveryMeals,
      title: "Generate Leads",
      text: "Finally, we collect information from individuals who are genuinely interested in your services. Prioritising quote-ready leads and eliminating tire kickers.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">How It Works</h1>
        
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
            <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
