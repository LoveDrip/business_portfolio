import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ProgressSection = () => {
  return (
    <section className="circle-progress__wrap">
      {/* <div className="container">
        <div className="circle-progress__4-col">
          <div className="circle-progress__single">
            <div className="circle-progress">
              <CircularProgressbar
                value={75}
                styles={buildStyles({
                  textColor: "#fe0040",
                  pathColor: "#fe0040",
                  trailColor: "rgba(234, 234, 234, 1)"
                })}
              />
              <span>(75%)</span>
            </div>
            <h3>Business Solution</h3>
          </div>
          <div className="circle-progress__single">
            <div className="circle-progress">
              <CircularProgressbar
                value={65}
                styles={buildStyles({
                  textColor: "#fe0040",
                  pathColor: "#fe0040",
                  trailColor: "rgba(234, 234, 234, 1)"
                })}
              />
              <span>(65%)</span>
            </div>
            <h3>24/7 Support</h3>
          </div>
          <div className="circle-progress__single">
            <div className="circle-progress">
              <CircularProgressbar
                value={85}
                styles={buildStyles({
                  textColor: "#fe0040",
                  pathColor: "#fe0040",
                  trailColor: "rgba(234, 234, 234, 1)"
                })}
              />
              <span>(85%)</span>
            </div>
            <h3>Devlopment</h3>
          </div>
          <div className="circle-progress__single">
            <div className="circle-progress">
              <CircularProgressbar
                value={55}
                styles={buildStyles({
                  textColor: "#fe0040",
                  pathColor: "#fe0040",
                  trailColor: "rgba(234, 234, 234, 1)"
                })}
              />
              <span>(55%)</span>
            </div>
            <h3>Client Strategy</h3>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ProgressSection;
