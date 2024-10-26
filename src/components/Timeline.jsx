/* eslint-disable no-unused-vars */
import React from "react";
import TimelineData from "./data/TimelineData";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {TimelineData.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
