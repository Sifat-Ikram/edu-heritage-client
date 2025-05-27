"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import { FaBars, FaSignInAlt, FaSignOutAlt, FaTimes } from "react-icons/fa";
import SearchOverlay from "./SearchOverlay";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const quickLinkRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLButtonElement | null>(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  const pathname = usePathname();

  // Define pages where you want transparent navbar
  const transparentRoutes = ["/"];
  const isTransparent = transparentRoutes.includes(pathname);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  const toggleQuickLink = () => {
    setShowQuickLinks((prev) => !prev);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const quickLinks = [
    {
      id: 1,
      label: "Admissions",
      href: "/admissions",
    },
    {
      id: 2,
      label: "Departments",
      href: "/departments",
    },
    {
      id: 3,
      label: "Contact",
      href: "/contact",
    },
  ];

  const navItems = [
    {
      label: "Admissions",
      dropdown: [
        {
          label: "Overview",
          href: "/admission/overview",
        },
        { label: "How to Apply", href: "/admission/howToApply" },
        { label: "Tution and fees", href: "/admission/tutionFee" },
        { label: "Scholarships & Aid", href: "/admission/scholarships" },
      ],
    },

    {
      label: "Academics",
      dropdown: [
        { label: "Undergraduate", href: "/academics/undergraduate" },
        { label: "Graduate", href: "/academics/graduate" },
        { label: "Course Catalog", href: "/academics/catalog" },
        { label: "Research Opportunities", href: "/academics/research" },
        { label: "Course Registration", href: "/academics/registration" },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !document.querySelector(".relative.group")?.contains(target)
      ) {
        setOpenDropdownIndex(null);
      }

      if (
        quickLinkRef.current &&
        !quickLinkRef.current.contains(target) &&
        !document.querySelector(".relative.group")?.contains(target)
      ) {
        setShowQuickLinks(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Handler to call on scroll
    const handleScroll = () => {
      // Show top bar only when at the very top (scrollY == 0)
      setShowTopBar(window.scrollY === 0);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case user loads page scrolled down
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <nav
        className={`top-0 w-full left-0 font-roboto
          ${isTransparent ? "fixed" : "sticky"}
          `}
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col">
          <div
            className={`bg-[#008080] dark:bg-[#161929] shadow-md text-white w-full font-roboto py-1 sm:py-2
             ${
               showTopBar
                 ? isTransparent
                   ? "translate-y-0"
                   : "hidden"
                 : "? isTransparent"
             } transition-transform duration-300 ease-in-out
            `}
          >
            <div className="w-11/12 mx-auto flex justify-center md:justify-between items-center">
              <div className="flex items-center max-sm:justify-between space-x-4 sm:space-x-6 font-roboto text-xs lg:text-sm xl:text-sm 2xl:text-base">
                {/* Current Date */}
                <div className="flex justify-center items-center gap-2">
                  <span>
                    {new Date().toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div ref={quickLinkRef} className="relative md:hidden">
                  <button
                    onClick={() => toggleQuickLink()}
                    className="flex items-center space-x-1 text-white hover:text-gray-200"
                  >
                    <span>Quick Links</span>
                    <FiChevronDown
                      className={`transform transition-transform duration-300 ${
                        showQuickLinks ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {showQuickLinks && (
                    <div className="absolute z-50 mt-[6px] bg-[#008080] border border-gray-200 rounded-md shadow-md w-28 text-xs">
                      <ul className="flex flex-col text-white">
                        {quickLinks?.map((item) => (
                          <li key={item?.id}>
                            <Link
                              href={item.href}
                              className="block px-2 py-1 hover:bg-[#006f6f]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* Quick Links (non-dropdown) */}
                <div className="hidden md:flex space-x-3">
                  <Link
                    href="/admissions"
                    className="hover:underline hover:text-gray-200"
                  >
                    Admissions
                  </Link>
                  <Link
                    href="/departments"
                    className="hover:underline hover:text-gray-200"
                  >
                    Departments
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:underline hover:text-gray-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full font-roboto relative transition-all duration-300 ${
              showTopBar
                ? isTransparent
                  ? "translate-y-0 bg-transparent shadow backdrop-blur-sm"
                  : "translate-y-0 bg-[#008080] dark:bg-[#161929] shadow"
                : "-translate-y-[58px] bg-[#008080] text-gray-950 dark:bg-[#161929] shadow mt-5"
            }`}
          >
            <div className="w-11/12 mx-auto flex justify-between items-center shadow">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span
                  className={`nav-title
                  ${
                    showTopBar
                      ? isTransparent
                        ? "text-white dark:text-white dark:hover:text-white"
                        : "dark:text-white text-white bg- dark:hover:text-white"
                      : "dark:text-white dark:hover:text-white text-white"
                  }
                  `}
                >
                  EduHeritage
                </span>
              </Link>
              <div>
                <div
                  ref={dropdownRef}
                  className="hidden md:flex items-center justify-center paragraph-text space-x-4 relative"
                >
                  {navItems.map((item) =>
                    item.dropdown ? (
                      <div
                        className="relative group hover:cursor-pointer"
                        key={item?.label}
                      >
                        <button
                          className={`cursor-pointer transition-colors duration-200
                          ${
                            showTopBar
                              ? isTransparent
                                ? "hover:text-[#008080] dark:hover:text-white text-white font-medium py-[2px] sm:py-1 lg:py-[14px]"
                                : "dark:text-white text-white font-medium py-[2px] sm:py-1 lg:py-[14px]"
                              : "dark:text-white text-white font-medium py-[2px] sm:py-1 lg:py-[14px]"
                          }
                          `}
                        >
                          {item.label}
                        </button>
                        {/* Dropdown Menu */}
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 group-hover:block hidden
                                     group-last:left-auto group-last:right-0 group-last:translate-x-0 z-50 w-max
                                     bg-[#026868] rounded-md dark:bg-[#161929] shadow-xl transition-all duration-300 ease-out animate-fadeInUp"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block text-gray-100 dark:text-gray-100 hover:bg-white hover:text-gray-800 dark:hover:text-gray-800 text-nowrap rounded px-5 py-2 transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={item.label}
                        className="text-white font-medium dark:bg-[#161929] dark:bprder-b-2 border-white"
                      >
                        {item.label}
                      </div>
                    )
                  )}
                  <div className="relative flex items-center gap-4 pl-3">
                    {/* Content */}
                    <div
                      className={`flex items-center px-4 py-[6px] bg-white/50 rounded-md transition-all duration-300
                      ${
                        showTopBar
                          ? "backdrop-blur-md text-white/80 text-sm hover:text-white"
                          : "backdrop-blur-md text-white text-sm dark:bg-white/20 dark:text-white"
                      }
                      `}
                    >
                      <button
                        ref={searchRef}
                        onClick={toggleSearch}
                        className="cursor-pointer pr-2 hover:text-gray-900"
                      >
                        Search
                      </button>
                      /
                      {user ? (
                        <Link
                          onClick={handleLogout}
                          href="/"
                          className="cursor-pointer pl-2 transition hover:text-gray-900"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link
                          href="/auth/login"
                          className="cursor-pointer pl-2 transition hover:text-gray-900"
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                {/* Mobile Hamburger */}
                <div className="flex items-center space-x-2 sm:space-x-3 md:hidden">
                  <div className="flex justify-center items-center space-x-2 sm:space-x-3.5 md:space-x-6">
                    {user ? (
                      <>
                        <Link
                          onClick={handleLogout}
                          href="/"
                          className="text-[#008080] hover:text-[#026868] dark:text-white"
                        >
                          <FaSignOutAlt />
                        </Link>
                      </>
                    ) : (
                      <div>
                        <Link
                          href="/auth/login"
                          className="text-[#008080] hover:text-[#026868] dark:text-white"
                        >
                          <FaSignInAlt />
                        </Link>
                      </div>
                    )}
                  </div>
                  <button
                    ref={searchRef}
                    onClick={toggleSearch}
                    className="text-[#008080] hover:text-[#026868] dark:text-white cursor-pointer"
                  >
                    <FiSearch className="font-black text-sm sm:text-base" />
                  </button>
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-[#008080] hover:text-[#026868] dark:text-white focus:outline-none py-5"
                  >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="md:hidden bg-[#008080] dark:bg-[#161929] shadow-lg py-1 absolute z-50 top-full w-32 sm:w-40 text-center sm:text-right right-0"
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
                    className="absolute right-[129.50px] sm:right-[160.52px] top-0 bg-[#008080] dark:bg-[#161929] group-hover:block shadow-lg rounded-md w-40 sm:w-auto space-y-2 py-2 px-5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onMouseEnter={() => setMenuOpen(true)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        onClick={() => setMenuOpen(false)}
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
