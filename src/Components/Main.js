import React from "react";
import "./Animation.css";
import "./media.css";

export const Main = (props) => {
  const data = props.data;
  // console.log(data);

  function randomNumber(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min) + min));
  }

  const num = randomNumber(0, 15);

  return (
    <div className="bg-[#7AD5E8] flex justify-center items-center h-[590px] relative main_div">
      <div className="h-4/5 w-1/2 bg-[#f4f6f8] absolute left-[320px] top-[42px] rounded-lg flex items-center flex-col justify-center inner_div">
        <p className="text-flicker-in-glow mb-10 text-[1.6875rem] greet_text">
          Have a Nice Day!
        </p>
        <p className="quote_text focus-in-expand text-[1.875rem] mb-2 w-11/12 text-center">
          <span className="mr-1">❝</span>
          {data[num].text}
          <span className="ml-1">❞</span>
        </p>
        <p className="author_text focus-in-expand text-[1.5625rem] mb-10">
          -{data[num].author.split(",")[0]}
        </p>
      </div>
      <div className="h-4/5 w-1/2 bg-white border-4 border-black rounded-lg bg_div"></div>
    </div>
  );
};
