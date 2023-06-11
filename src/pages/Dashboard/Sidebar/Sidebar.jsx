import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiSelectMultiple, BiHelpCircle } from "react-icons/bi";
import { GiNinjaArmor } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { BsCreditCard } from "react-icons/bs";

export const Sidebar = () => {
  const menuItems = [
    {
      route: "Dashboard",
      path: "/dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      route: "Selected Classes",
      path: "selectedClasses",
      icon: <BiSelectMultiple />,
    },
    {
      route: "Enrolled Classes",
      path: "enrolledClasses",
      icon: <GiNinjaArmor />,
    },
    {
      route: "Payments",
      path: "payments",
      icon: <BsCreditCard />,
    },
  ];

  const menuItems2 = [
    {
      route: "Settings",
      path: "/settings",
      icon: <AiOutlineSetting />,
    },
    {
      route: "Get Help",
      path: "/help",
      icon: <BiHelpCircle />,
    },
  ];

  return (
    <div className="min-h-screen hidden md:block dark:bg-slate-950 w-80 bg-white dark:text-white dark:shadow-none dark:border-none shadow-lg border-r-[1px]">
      {/* First Section */}
      <div className="p-10">
        <h1 className="font-bold text-2xl text-center">Ninja School</h1>
        <h1 className="mt-10 mb-5">Menu</h1>
        <ul className="flex flex-col gap-7">
          {menuItems.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-3 font-bold items-center"
                    : "flex hover:text-primary hover:font-bold gap-3 items-center transition-all duration-300"
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <h1 className="text-lg">{item.route}</h1>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <hr />
      {/* Third Section */}
      <div className="p-10">
        <ul className="flex flex-col gap-8">
          {menuItems2.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-3 font-bold items-center"
                    : "flex hover:text-primary hover:font-bold gap-3 items-center transition-all duration-300"
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <h1 className="text-lg">{item.route}</h1>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
