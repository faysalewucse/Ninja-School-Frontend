import Button from "../shared/Button";
import { useAuth } from "../../contexts/AuthContext";

export const ClassCard = ({ classInfo }) => {
  const { currentUser } = useAuth();
  const { name, instructorName, totalSeats, availableSeats, price, image } =
    classInfo;

  return (
    <div
      className={`md:flex gap-5 border border-primary p-5 border-dashed rounded-2xl ${
        !availableSeats && "bg-gradient-to-br border-0 from-red-500 to-red-300"
      }`}
    >
      <img
        className="w-full md:w-1/2 h-64 object-top object-cover"
        src={image}
        alt="instructor_image"
      />
      <div className="text-center md:text-start flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h1 className="text-lg font-bold">Instructor: {instructorName}</h1>
          <h1>Seats Available: {availableSeats}</h1>
          <h1>Total Seats: {totalSeats}</h1>
          <h1>Price: {price}$</h1>
        </div>

        <Button
          text={`${availableSeats ? "Select" : "No Seats Available"}`}
          style={`${
            (!availableSeats ||
              currentUser?.role === "admin" ||
              currentUser?.role === "instructor") &&
            "cursor-not-allowed opacity-50"
          } w-fit mx-auto md:mx-0 mt-2 md:mt-0`}
        />
      </div>
    </div>
  );
};
