/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import Trainer1 from "../Image/Trainer1.jpeg"
import Ladki1 from "../Image/Ladki1.jpeg";
import Ladki2 from "../Image/Ladki2.jpeg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      Our <span>Clients</span>
    </h2>
    <Icon />
    <p>
    "Empowering clients with tailored fitness journeys.{" "}
      <br />
      Join our community for personalized workouts, expert guidance, and a supportive environment to achieve your fitness aspirations".
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Vishwa kumar c"
        desc="Motivating coach, guides fitness journey, empowers, inspires progress, fosters discipline."
        img={Trainer1}
      />
      <TrainerCard
        title="Trainee"
        name="Anishka"
        desc="Transforming my body, gaining strength, achieving goals, fitness journey success."
        img={Ladki1}
      />
      <TrainerCard
        title="Trainee"
        name="Riya"
        desc="Revitalized, stronger, healthier—grateful for my transformative fitness journey at the gym."
        img={Ladki2}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
