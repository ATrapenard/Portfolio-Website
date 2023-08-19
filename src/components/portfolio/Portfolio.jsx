import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    title: "This Website",
    description:
      "Responsive website designed to be a display of my personal portfolio.  Also serves as a platform to visualize the results of my programming experience.",
    github: "https://github.com/ATrapenard/portfolio-website",
  },
  {
    id: 2,
    title: "Drug Overdoses in Connecticut",
    description:
      "Exploratory Data Analysis into the most common drugs associated with overdose deaths in the state of Connecticut.",
    github: "https://github.com/ATrapenard/Drug_OD_EDA",
  },
  {
    id: 3,
    title: "WIP Discord Lottery Bot",
    description:
      "Work in progress self-regulating 'Lottery Bot' for discord servers using the Discord API and Google Sheets API.",
    github: "https://github.com/ATrapenard/lottery-bot",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 style={{ color: "#d83f87" }}>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, description, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Check out the GitHub page.
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
