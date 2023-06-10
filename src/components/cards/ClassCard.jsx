import Button from "../shared/Button";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const ClassCard = ({ classInfo, bookedClasses, refetch }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    _id,
    name,
    instructorName,
    totalSeats,
    availableSeats,
    price,
    image,
  } = classInfo;

  const selectClassHandler = (classId) => {
    if (!currentUser) {
      return Swal.fire({
        title: "For selecting this class you have to login first.",
        confirmButtonColor: "#FF3607",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) navigate("/login");
      });
    }
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_BASE_API_URL}/bookedClass`, {
        classId,
        studentEmail: currentUser.email,
      })
      .then((response) => {
        setLoading(false);
        refetch();
        if (response.status === 200) {
          Swal.fire("Great", "You booked the class!", "success");
        }
      });
  };

  const alreadyBooked = () => {
    return bookedClasses?.some((bookedClass) => bookedClass.classId === _id);
  };

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
          loading={loading}
          onClickHandler={() => selectClassHandler(_id)}
          text={`${
            alreadyBooked()
              ? "Already Selected"
              : availableSeats
              ? "Select"
              : "No Seats Available"
          }`}
          style={`${
            (alreadyBooked() ||
              !availableSeats ||
              currentUser?.role === "admin" ||
              currentUser?.role === "instructor") &&
            "cursor-not-allowed opacity-50"
          } w-11/12 mx-auto md:mx-0 mt-2 md:mt-0`}
        />
      </div>
    </div>
  );
};
