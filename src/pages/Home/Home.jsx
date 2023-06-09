import { useLoaderData } from "react-router-dom";
import { Banner } from "./Banner";
import { PopularClasses } from "./PopularClasses";
import { PopularInstructors } from "./PopularInstructors";

export const Home = () => {
  const { data: popularClasses } = useLoaderData();
  return (
    <div className="overflow-hidden">
      <Banner />
      <PopularClasses popularClasses={popularClasses} />
      <PopularInstructors />
    </div>
  );
};
