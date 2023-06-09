import { useLoaderData } from "react-router-dom";
import { Banner } from "./Banner";
import { PopularClasses } from "./PopularClasses";
import { PopularInstructors } from "./PopularInstructors";
import { Benefits } from "./Benefits";

// TODO: Add Contact and Blog Sections
export const Home = () => {
  const { data: popularClasses } = useLoaderData();
  return (
    <div className="overflow-hidden">
      <Banner />
      <PopularClasses popularClasses={popularClasses} />
      <PopularInstructors />
      <Benefits />
    </div>
  );
};
