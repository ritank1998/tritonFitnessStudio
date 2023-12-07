/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard"
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Master basic fitness fundamentals with essential workouts, balanced nutrition, and consistent routines to kickstart your journey towards a healthier lifestyle."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Elevate muscle-building expertise through advanced techniques, specialized training, precise nutrition, and expert guidance for optimal strength and growth."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Revolutionize your workout routine with cutting-edge equipment, innovative exercises, expert trainers, and a vibrant community at our new gym facility.
        ."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Cultivate inner balance and strength with serene yoga sessions, mindful breathing, flexibility exercises, and guided meditation for holistic wellness.
        ."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Develop foundational muscle-building skills with fundamental exercises, proper form, targeted workouts, and essential nutrition for an effective strength-building journey.
        ."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Achieve physique goals with intense workouts, specialized techniques, tailored nutrition, and expert guidance in our comprehensive bodybuilding program.
        ."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
