import { motion } from "motion/react";
import ThemeSwitcher from './ThemeSwitcher'

function Navbar() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      className="container mx-auto px-2 tablet:px-0 my-5 sticky top-2">

      <div className="flex justify-between items-center rounded-full px-3 py-1 bg-gradient-to-r from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] border border-gray-200 dark:border-gray-600 dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]">

        <div className="">
          <img src="/images/logo/logo.png" className="w-10" alt="logo" />
        </div>

        <div className="flex items-center justify-center gap-2">

          <ThemeSwitcher />

          <ul className="hidden tablet:flex gap-4 dark:text-white">
            <li>Home</li>
            <li>Services</li>
            <li>Resume</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Hire Me</li>
          </ul>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle bg-transparent border-0 shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /> </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Home</a></li>
              <li><a>Services</a></li>
              <li><a>Resume</a></li>
              <li><a>Work</a></li>
              <li><a>Contact</a></li>
              <li><a>Hire Me</a></li>
            </ul>
          </div>

        </div>

      </div>

    </motion.nav>
  );
}

export default Navbar;
