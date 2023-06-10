import brand from "/brand.png";
import brandWhite from "/brandWT.png";
import avatar from "/avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { dropdownItems, navItems } from "./navItems";
import { Container } from "../Container";
import { MdOutlineWbSunny } from "react-icons/md";
import { SlClose, SlMenu } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMoon } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ButtonOutline from "../shared/ButtonOutline";

export const Navbar = () => {
  const { isDark, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-[1px] p-7 shadow dark:bg-slate-950 dark:border-b-slate-800">
      <Container>
        <div className="flex items-center justify-between">
          <img className="w-16" src={isDark ? brandWhite : brand} alt="brand" />
          <nav
            className={`flex flex-col md:flex-row md:relative absolute ${
              open ? "top-5 bg-white dark:bg-black" : "-top-full"
            } right-0 md:w-fit w-full gap-5 transition-all duration-300 md:h-0 md:gap-10 rounded-b-xl md:rounded-b-none p-5 text-lg items-center z-20`}
          >
            {navItems.map((navItem, index) => {
              if (!navItem.condition) {
                return (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-secondary"
                        : "hover:text-secondary dark:text-white"
                    }
                    to={navItem.path}
                    key={index}
                  >
                    {navItem.pathName}
                  </NavLink>
                );
              } else if (navItem.condition && currentUser) {
                return (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-secondary"
                        : "hover:text-secondary dark:text-white"
                    }
                    to={navItem.path}
                    key={index}
                  >
                    {navItem.pathName}
                  </NavLink>
                );
              }
              return null;
            })}
            <div className="flex items-center gap-8">
              <div
                onClick={toggleDarkMode}
                className="hover:text-primary cursor-pointer transition duration-200"
              >
                {isDark ? (
                  <MdOutlineWbSunny color="white" size={"1.5em"} />
                ) : (
                  <HiMoon size={"1.5em"} />
                )}
              </div>

              {/* Dropdown Avatar */}
              {currentUser ? (
                <div className="relative inline-block">
                  <button
                    className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 border-2 border-primary"
                    onClick={toggleDropdown}
                  >
                    <img
                      src={
                        currentUser?.photoURL ? currentUser?.photoURL : avatar
                      } // Replace with the path to your avatar image
                      alt="Avatar"
                      className={`w-9 h-9 rounded-full transition-transform object-cover ${
                        isOpen ? "scale-110" : "scale-100"
                      }`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className={`${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    } transition-all duration-300 absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-300`}
                  >
                    {/* Menu items */}
                    {dropdownItems.map((item, index) => (
                      <NavLink
                        to={item.path}
                        key={index}
                        className={`block px-4 py-2 hover:text-primary`}
                      >
                        {item.pathName}
                      </NavLink>
                    ))}
                    <NavLink
                      onClick={logout}
                      className={`block px-4 py-2 text-red-500 hover:text-red-600`}
                    >
                      Log Out
                    </NavLink>
                  </div>
                </div>
              ) : (
                <ButtonOutline
                  text={"Login"}
                  onClickHandler={() => navigate("/login")}
                />
              )}
            </div>
          </nav>
          <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? (
              <SlClose className="dark:text-white absolute right-6 top-9 text-3xl z-20" />
            ) : (
              <SlMenu className="dark:text-white text-black text-2xl" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
