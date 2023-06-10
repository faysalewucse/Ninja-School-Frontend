import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/shared/SectionHeader";
import { ClassCard } from "../components/cards/ClassCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export const Classes = () => {
  const { data: classes } = useLoaderData();
  const { currentUser } = useAuth();

  const {
    isLoading,
    isError,
    data: bookedClasses,
    error,
  } = useQuery({
    queryKey: ["bookedClasses"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/bookedClasses/${
          currentUser.email
        }`
      );

      return data;
    },
  });

  return (
    <div className="dark:bg-slate-900 dark:text-white text-slate-800 p-5 md:p-20">
      <Container>
        <SectionHeader title={"Our Classes"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-20">
          {classes.map((classInfo) => (
            <ClassCard
              key={classInfo._id}
              classInfo={classInfo}
              bookedClasses={bookedClasses}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
