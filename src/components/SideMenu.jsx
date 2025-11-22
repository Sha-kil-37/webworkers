import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function RightSideMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      <div>
        {openMenu ? (
          ""
        ) : (
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-2xl px-2 py-2 absolute right-4 to-4 z-20 cursor-pointer"
          >
            <FiMenu />
          </button>
        )}
      </div>

      {/* Side Menu */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50"
              onClick={() => setOpenMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Right Sidebar (Animated Width) */}
            <motion.div
              className="fixed top-0 right-0 h-full bg-white dark:bg-gray-900 shadow-xl p-5 z-20"
              initial={{ width: 0 }}
              animate={{ width: 260 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="text-2xl mb-6 cursor-pointer"
              >
                <FiX />
              </button>

              {/* Menu Items */}
              <nav className="space-y-3">
                <a href="#home" className="block text-lg hover:text-blue-500">
                  Home
                </a>

                <a href="#about" className="block text-lg hover:text-blue-500">
                  About
                </a>

                {/* Dropdown */}
                <div>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center justify-between w-full text-lg hover:text-blue-500"
                  >
                    Services
                    <FiChevronDown
                      className={`transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-2 space-y-2 overflow-hidden"
                      >
                        <a
                          href="#web"
                          className="block text-base hover:text-blue-500"
                        >
                          Web Development
                        </a>
                        <a
                          href="#design"
                          className="block text-base hover:text-blue-500"
                        >
                          UI/UX Design
                        </a>
                        <a
                          href="#app"
                          className="block text-base hover:text-blue-500"
                        >
                          App Development
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#projects"
                  className="block text-lg hover:text-blue-500"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="block text-lg hover:text-blue-500"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
