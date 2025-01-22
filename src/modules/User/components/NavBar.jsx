import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-gray-800 text-gray-200 flex justify-between md:justify-start md:flex-col md:h-screen w-auto md:w-60 border-t md:border-t-0 border-gray-700 rounded-full md:rounded-[1px] shadow-lg md:bottom-auto md:left-0 md:right-0 md:top-0 md:mt-0 md:pt-14">
      <NavItem href="/home" icon="🏠" label="Home" />
      <NavItem href="/posts" icon="📜" label="Posts" />
    </nav>
  );
};

/**
 * Navigation Item Component
 */
const NavItem = ({ href, icon, label }) => {
  return (
    <a
      href={`/User/dashboard${href}`}
      className="flex items-center justify-center md:justify-start md:px-4 py-1 text-3xl text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 w-full md:w-auto rounded-full md:rounded-md  md:mt-6"
    >
      <span className="text-3xl md:mr-4">{icon}</span>
      <span className="text-xs md:text-sm font-semibold text-center md:text-left md:inline">{label}</span>
    </a>
  );
};

export default Navbar;
