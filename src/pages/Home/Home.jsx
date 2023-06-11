import { useLoaderData, useNavigation } from "react-router-dom";
import { Banner } from "./Banner";
import { PopularClasses } from "./PopularClasses";
import { PopularInstructors } from "./PopularInstructors";
import { Benefits } from "./Benefits";
// import preloader from "/preloader.gif";

// TODO: Add Contact and Blog Sections
export const Home = () => {
  return (
    <div className="overflow-hidden">
      <>
        <Banner />
        <PopularClasses />
        <PopularInstructors />
        <Benefits />
      </>
    </div>
  );
};
