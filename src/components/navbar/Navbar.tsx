"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchOverlay from "./SearchOverlay";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const navItems = [
    {
      label: "Admissions",
      dropdown: [
        {
          label: "Undergraduate",
          href: "/admission/undergraduate",
        },
        { label: "Graduate", href: "/admission/graduate" },
        { label: "International Students", href: "/admission/international" },
        { label: "Certificate Programs", href: "/admission/international" },
      ],
    },

    {
      label: "Academics",
      dropdown: [
        { label: "Undergraduate Programs", href: "/academics/undergraduate" },
        { label: "Graduate Programs", href: "/academics/graduate" },
        { label: "Departments", href: "/academics/departments" },
        { label: "Degree Programs", href: "/academics/programs" },
        { label: "Online Courses", href: "/academics/online-courses" },
        { label: "Research Opportunities", href: "/academics/research" },
        { label: "Course Catalog", href: "/academics/catalog" },
        { label: "Course Registration", href: "/academics/registration" },
        { label: "Academic Calendar", href: "/academics/calendar" },
        { label: "Faculty Directory", href: "/academics/faculty" },
      ],
    },

    {
      label: "Events",
      dropdown: [
        { label: "All Events", href: "/events/calendar" },
        { label: "Academic Events", href: "/events/academic" },
        { label: "Cultural Events", href: "/events/cultural" },
        { label: "Sports Events", href: "/events/sports" },
        { label: "Guest Lectures", href: "/events/guest-lectures" },
        { label: "Workshops & Webinars", href: "/events/workshops" },
        { label: "Career Fairs", href: "/events/career-fairs" },
        { label: "Student Club Events", href: "/events/student-clubs" },
      ],
    },

    {
      label: "About",
      dropdown: [
        { label: "University", href: "/about/university" },
        { label: "History", href: "/about/history" },
        { label: "Vision & Mission", href: "/about/vision-mission" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "Campus & Facilities", href: "/about/campus" },
        { label: "Accreditations & Rankings", href: "/about/accreditations" },
        { label: "Research Highlights", href: "/about/research-highlights" },
        { label: "Alumni Testimonials", href: "/about/alumni-testimonials" },
      ],
    },

    {
      label: "Contact",
      dropdown: [
        { label: "General Inquiries", href: "/contact/general" },
        { label: "Admissions Office", href: "/contact/admissions" },
        { label: "Registrar’s Office", href: "/contact/registrar" },
        { label: "Department Contacts", href: "/contact/departments" },
        { label: "Campus Map", href: "/contact/map" },
        { label: "International Support", href: "/contact/international" },
        { label: "Careers & Recruitment", href: "/contact/careers" },
        { label: "IT Support", href: "/contact/it" },
        { label: "Location & Directions", href: "/contact/location" },
      ],
    },
  ];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <nav
        className="sticky top-0 w-full left-0 font-roboto shadow"
        style={{ zIndex: 9999 }}
      >
        <div className="bg-[#008080] dark:bg-[#161929] shadow-md w-full font-roboto">
          <div className="w-11/12 mx-auto py-[2px] sm:py-1 lg:py-2">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="nav-title text-white hover:text-gray-600 nav-title">
                  EduHeritage
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="flex justify-center items-center space-x-2 sm:space-x-3.5 md:space-x-6 font-roboto paragraph-text">
                <button
                  onClick={toggleSearch}
                  className="rounded-lg hidden cursor-pointer md:flex items-center space-x-[6px] py-1 px-[10px] hover:bg-white bg-transparent hover:text-[#008080] dark:hover:text-gray-800 text-white"
                >
                  <FiSearch className=" font-black" />
                  <h1>Search</h1>
                </button>
                <button
                  onClick={toggleSearch}
                  className=" text-white block md:hidden hover:text-gray-600 dark:hover:text-gray-800 cursor-pointer"
                >
                  <FiSearch className="font-black" />
                </button>
                <div className="flex justify-center items-center space-x-2 sm:space-x-3.5 md:space-x-6">
                  {user ? (
                    <>
                      <Link
                        onClick={handleLogout}
                        href="/"
                        className="text-white hover:text-gray-600"
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <div className="hidden sm:flex space-x-2 sm:space-x-3 md:space-x-6 items-center">
                      <Link
                        href="/auth/login"
                        className="text-white hover:text-gray-600"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white hover:text-gray-600 focus:outline-none py-5"
                  >
                    {menuOpen ? (
                      <FaTimes className="sm:text-xl md:text-lg" />
                    ) : (
                      <FaBars className="sm:text-xl md:text-lg" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center lg:text-sm xl:text-lg space-x-3 relative bg-white dark:bg-[#1a1d2e] dark:border-b dark:border-[#2f3243] dark:shadow-md">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                className="relative group hover:cursor-pointer"
                key={item?.label}
              >
                <button className="text-gray-800 dark:text-gray-200 px-6 xl:px-8 py-2 rounded-md transition-colors duration-200 hover:text-[#008080] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2a2f45] font-medium">
                  {item.label}
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-[44px] hidden lg:text-sm xl:text-lg bg-white dark:bg-[#1e1e2f] group-hover:block shadow-lg w-auto py-2 px-5 rounded-b-md dark:border dark:border-gray-700">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="block text-gray-800 dark:text-gray-200 hover:text-[#008080] dark:hover:text-gray-200 text-nowrap rounded px-3 py-2 transition-colors duration-200"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div
                key={item.label}
                className="text-white hover:text-gray-600 font-medium dark:bg-[#161929] dark:bprder-b-2 border-white"
              >
                {item.label}
              </div>
            )
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#008080] dark:bg-[#161929] shadow-lg py-1 absolute z-50 top-14 w-32 sm:w-40 text-center sm:text-right right-0"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navItems.map((item, index) => (
              <div key={item.label} className="group">
                {/* Menu Item */}
                <h1
                  className={`
            block text-white hover:cursor-pointer px-2 sm:px-5 py-3 
            ${
              index === 0
                ? "border-b-[0.050px] border-transparent hover:border-white"
                : ""
            }
            ${
              index !== 0
                ? "border-y-[0.050px] border-transparent hover:border-white"
                : ""
            }
            hover:text-gray-600 transition-all duration-300 ease-in-out
          `}
                  onClick={() => toggleDropdown(index)}
                >
                  {item.label}
                </h1>

                {/* Dropdown for mobile */}
                {item.dropdown && openDropdownIndex === index && (
                  <motion.div
                    className="absolute right-[129.50px] sm:right-[160.52px] top-10 bg-[#008080] dark:bg-[#161929] group-hover:block shadow-lg rounded-md w-40 sm:w-auto space-y-2 py-2 px-5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onMouseEnter={() => setMenuOpen(true)} // Hide menu when mouse leaves
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block text-white hover:text-gray-600 px-2 sm:px-5 sm:text-nowrap"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {user ? (
              <>
                <Link href="/" className="text-white hover:text-gray-600">
                  <h1
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    className="block text-white hover:cursor-pointer px-2 sm:px-5 py-3 border-y-[0.050px] border-transparent hover:border-white"
                  >
                    Logout
                  </h1>
                </Link>
              </>
            ) : (
              <div className="flex flex-col sm:hidden">
                <Link
                  href="/auth/login"
                  className="text-white hover:text-gray-600"
                >
                  <h1
                    onClick={() => setMenuOpen(false)}
                    className="block text-white hover:cursor-pointer px-2 sm:px-5 py-3 border-y-[0.050px] border-transparent hover:border-white"
                  >
                    Login
                  </h1>
                </Link>
                <Link
                  href="/auth/register"
                  className="text-white hover:text-gray-600"
                >
                  <h1
                    onClick={() => setMenuOpen(false)}
                    className="block text-white hover:cursor-pointer px-2 sm:px-5 py-3 border-t-[0.050px] border-transparent hover:border-white"
                  >
                    Register
                  </h1>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </nav>
      <SearchOverlay isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
};

export default Navbar;
