import React from 'react';
import './Academics.css';

export const Academics = () => {
  return (
    <div className="academics-container">      
      <div className="timeline">
        <div className="education-card">
          <div className="period">2019 - 2023</div>
          <h2>Bangladesh University of Engineering and Technology (BUET)</h2>
          <p className="degree">Bachelor of Science in Computer Science and Engineering</p>
          <p className="description">
            Earned my Bachelor's degree which happens to be the most impactful stage of my life.
          </p>
        </div>

        <div className="education-card">
          <div className="period">2016 - 2018</div>
          <h2>Dinajpur Government College</h2>
          <p className="degree">Higher Secondary Certificate (HSC)</p>
          <p className="description">
            Completed my college education with focus on Science stream.
          </p>
        </div>

        <div className="education-card">
          <div className="period">2008 - 2016</div>
          <h2>Dinajpur Zilla School</h2>
          <p className="degree">Secondary School Certificate (SSC)</p>
          <p className="description">
            Spent my formative years from Class 3 to 10, building strong academic foundations.
          </p>
        </div>

        <div className="education-card">
          <div className="period">2005 - 2007</div>
          <h2>St. Joseph's School, Dinajpur</h2>
          <p className="degree">Primary Education</p>
          <p className="description">
            Started my educational journey at this renowned institution, completing up to Class 2.
          </p>
        </div>
      </div>
    </div>
  );
};
