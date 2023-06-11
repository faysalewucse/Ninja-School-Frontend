import { useQuery } from "@tanstack/react-query";
import { Container } from "../../components/Container";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { DashboardCard } from "../../components/cards/DashboardCard";

export const Dashboard = () => {
  const { currentUser } = useAuth();

  const { data: bookedClasses } = useQuery({
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

  // const { data: myStudents } = useQuery({
  //   queryKey: ["totalSt"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       `${import.meta.env.VITE_BASE_API_URL}/bookedClasses/${
  //         currentUser.email
  //       }`
  //     );
  //     return data;
  //   },
  // });

  return (
    <div className="dark:bg-slate-900 min-h-[90vh]">
      <Container>
        <div className="grid grid-cols-4 p-12">
          {currentUser?.role === "student" && (
            <DashboardCard
              number={bookedClasses?.length || 0}
              title={"Selected Class"}
            />
          )}
          {currentUser?.role === "instructor" && (
            <DashboardCard
              number={bookedClasses?.length || 0}
              title={"Selected Class"}
            />
          )}
        </div>
      </Container>
    </div>
  );
};
