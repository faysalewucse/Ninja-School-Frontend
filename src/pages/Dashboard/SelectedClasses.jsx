import { useQuery } from "@tanstack/react-query";
import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { Container } from "../../components/Container";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { BsCreditCard, BsTrash } from "react-icons/bs";

export const SelectedClasses = () => {
  const { currentUser } = useAuth();
  const {
    isLoading,
    refetch,
    data: bookedClasses,
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
    <div className="dark:bg-slate-900 min-h-[90vh] dark:text-white p-10 text-slate-800">
      {!isLoading ? (
        <Container>
          <SectionHeader title={"My Classes"} />

          {/* {bookedClasses.map((bookedClass) => (
              <ClassCard
                key={bookedClass._id}
                classInfo={bookedClass.classInfo[0]}
                bookedClasses={bookedClasses}
                refetch={refetch}
              />
            ))} */}

          <table className="w-full bg-transparent border-collapse my-10 text-center">
            <thead className="text-center dark:bg-gray-200 text-slate-800">
              <tr className="border-b dark:border-gray-700">
                <th className="py-2">Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Available Seats</th>
                <th>Total Seats</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookedClasses.map(({ classInfo }, index) => {
                const {
                  name,
                  instructorName,
                  totalSeats,
                  availableSeats,
                  price,
                  image,
                } = classInfo[0];
                return (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="py-4">
                      <img
                        src={image}
                        alt="Class"
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td>{name}</td>
                    <td>{instructorName}</td>
                    <td>{availableSeats}</td>
                    <td>{totalSeats}</td>
                    <td>{price}</td>
                    <td>
                      <div className="flex space-x-4 justify-center">
                        <button className="dark:text-green-300 text-green-600 hover:text-green-700 dark:hover:text-green-400 hover:scale-105 transition-all duration-150">
                          <BsCreditCard className="inline-block w-5 h-5" />
                          <span className="ml-1">Pay Now</span>
                        </button>
                        <button className="text-red-400 hover:text-red-500 hover:scale-105 transition-all duration-150">
                          <BsTrash className="inline-block w-5 h-5" />
                          <span className="ml-1">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <HashLoader
            color={"#FF3607"}
            loading={isLoading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
};
