import { useQuery } from "@tanstack/react-query";
import { Container } from "../../components/Container";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

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

  return (
    <div className="dark:bg-slate-900 min-h-[90vh]">
      <Container>
        <div className="grid grid-cols-4 p-12">
          <div className="bg-gradient-to-bl shadow-xl from-slate-700 to-primary bg-opacity-80 px-5 py-8 text-center text-white rounded-xl">
            <h1 className="font-bold text-7xl">{bookedClasses?.length || 0}</h1>
            <h1 className="font-semibold text-xl">Selected Classes</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};
