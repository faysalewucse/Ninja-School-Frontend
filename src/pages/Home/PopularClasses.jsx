import React from "react";
import { Container } from "../../components/Container";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { PopularClassCard } from "../../components/cards/PopularClassCard";

// TODO: Add Animation
export const PopularClasses = ({ popularClasses }) => {
  return (
    <div className="dark:bg-slate-800 bg-gray-100 dark:text-white md:p-20 p-5">
      <Container>
        <SectionHeader
          heading={"Our Program"}
          title={"Popular Martial Arts Classes"}
          description={
            "Join our popular martial arts classes and train with experienced instructors who have achieved championship-level success. "
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 my-10">
          {popularClasses.map((popularClass) => (
            <PopularClassCard
              key={popularClass._id}
              image={popularClass.image}
              className={popularClass.name}
              enrolledStudents={
                popularClass.totalSeats - popularClass.availableSeats
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
