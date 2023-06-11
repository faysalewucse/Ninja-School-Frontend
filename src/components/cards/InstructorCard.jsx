import React from "react";
import Button from "../shared/Button";

export const InstructorCard = ({ instructor }) => {
  const { name, photoURL, email, classInfo } = instructor;

  return (
    <div className="md:flex gap-5 border border-primary p-5 border-dashed">
      <img
        className="w-full md:w-1/2 h-64 object-top object-cover"
        src={photoURL}
        alt="instructor_image"
      />
      <div className="text-center md:text-start flex flex-col justify-between">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h6 className="dark:text-gray-300 text-gray-700 text-sm opacity-80">
          {email}
        </h6>
        <h1>Classes Taken: {classInfo.length}</h1>
        <h1 className="text-primary font-bold text-2xl hidden md:block">
          Classes
        </h1>
        <div className="hidden md:block">
          {classInfo.map(({ name }, index) => (
            <h3>
              {index + 1}. {name}
            </h3>
          ))}
        </div>
        <Button
          text={"See Classes"}
          style={"w-fit mx-auto md:mx-0 mt-2 md:mt-0"}
        />
      </div>
    </div>
  );
};
