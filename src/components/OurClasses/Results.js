/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="First Training Class"
        info="Embark on your fitness journey with our inaugural training class. Join us for an empowering session, paving the way to your fittest self."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Second Training Class"
        info="Level up in our advanced training session. Elevate your fitness with expert guidance and next-level workouts in our dynamic classes."

        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Third Training Class"
        info="Discover our specialized training: the third-class experience. Elevate your fitness journey with tailored workouts and expert coaching for optimal results."

        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="Unleash new heights in our cutting-edge fourth-class training. Experience advanced techniques and tailored workouts for your ultimate fitness transformation."

        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
