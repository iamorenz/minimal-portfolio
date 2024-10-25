/* eslint-disable no-unused-vars */
import React from "react";
import PortfolioData from "./data/PortfolioData";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PortfolioData.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
