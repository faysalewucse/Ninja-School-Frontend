import React from "react";
import Button from "../shared/Button";

export const InstructorCard = ({ instructor }) => {
  const { name, image, email, classIds, classNames: clsNames } = instructor;

  return (
    <div className="flex gap-5 border border-primary p-5 border-dashed">
      <img
        className="w-1/2 h-64 object-top object-cover"
        src={image}
        alt="instructor_image"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h6 className="dark:text-gray-300 text-gray-700 text-sm opacity-80">
          {email}
        </h6>
        <h1>Classes Taken: {classIds.length}</h1>
        <h1 className="text-primary font-bold text-2xl">Classes</h1>
        <div>
          {clsNames.map((clsName, index) => (
            <h3>
              {index + 1}. {clsName}
            </h3>
          ))}
        </div>
        <Button text={"See Classes"} style={"w-fit"} />
      </div>
    </div>
  );
};

//    - (optional) `See Classes` button to show classes by this Instructor. This will take you to a new link
