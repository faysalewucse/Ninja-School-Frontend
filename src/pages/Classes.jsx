import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/shared/SectionHeader";
import { ClassCard } from "../components/cards/ClassCard";

export const Classes = () => {
  const { data: classes } = useLoaderData();

  return (
    <div className="dark:bg-slate-900 dark:text-white text-slate-800 p-5 md:p-20">
      <Container>
        <SectionHeader title={"Our Classes"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-20">
          {classes.map((classInfo) => (
            <ClassCard key={classInfo._id} classInfo={classInfo} />
          ))}
        </div>
      </Container>
    </div>
  );
};
