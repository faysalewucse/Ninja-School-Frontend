import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { SectionHeader } from "../../components/shared/SectionHeader";
import axios from "axios";
import { PopularInstructorCard } from "../../components/cards/PopularInstructorCard";

export const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_API_URL}/instructors/popular`)
      .then((response) => {
        setPopularInstructors(response.data);
      });
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-gray-100 dark:text-white md:p-20 p-5">
      <Container>
        <SectionHeader
          heading={"Our Program"}
          title={"Popular Instructors"}
          description={
            "Join and train with experienced instructors who have achieved championship-level success. "
          }
        />

        <div className="flex flex-col gap-5 justify-center items-center my-10">
          {popularInstructors?.map((instructor, index) => (
            <PopularInstructorCard
              key={instructor._id}
              index={index}
              image={instructor.photoURL}
              classes={instructor.classInfo[0]}
              totalStudents={instructor.totalStudents}
              name={instructor.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
