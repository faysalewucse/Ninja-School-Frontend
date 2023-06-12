import { useLoaderData, useNavigation } from "react-router-dom";
import { Banner } from "./Banner";
import { PopularClasses } from "./PopularClasses";
import { PopularInstructors } from "./PopularInstructors";
import { Benefits } from "./Benefits";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";

AOS.init();
// TODO: Add Blog Sections
export const Home = () => {
  return (
    <div className="overflow-hidden">
      <>
        <Banner />
        <PopularClasses />
        <PopularInstructors />
        <Benefits />
        <Contact />
      </>
    </div>
  );
};
