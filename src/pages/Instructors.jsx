import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container } from "../components/Container";
import { InstructorCard } from "../components/cards/InstructorCard";
import { SectionHeader } from "../components/shared/SectionHeader";

export const Instructors = () => {
  const { data: instructors } = useLoaderData();

  return (
    <div className="dark:bg-slate-900 dark:text-white text-slate-800 p-5 md:p-20">
      <Container>
        <SectionHeader
          heading={"Our Expert Instructors"}
          title={"Learn from the Best in Martial Arts"}
          description={
            "Meet our expert martial arts instructors who are committed to helping you excel in your training."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
      </Container>
    </div>
  );
};
