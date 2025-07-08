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
      className="container mx-auto px-3 tablet:px-0 my-4 sticky top-1 z-5 border border-red-500">

      <div className="flex justify-between items-center rounded-full px-3 py-2 border border-zinc-200 bg-white/70 backdrop-blur-sm">

        <div className="">
          {/* <img src="/images/logo/logo.png" className="w-10" alt="logo" /> */}
          <h4 className="font-bold">Shahboz<span className="text-green-600">.</span></h4>
        </div>

        <div className="flex items-center justify-center gap-2">

          <div className="hidden">
            <ThemeSwitcher />
          </div>

          <ul className="hidden tablet:flex gap-4">
            <li> <a href="" className="font-semibold hover:text-green-600 transition-all duration-300">Home</a></li>
            <li> <a href="" className="font-semibold hover:text-green-600 transition-all duration-300">Services</a></li>
            <li> <a href="" className="font-semibold hover:text-green-600 transition-all duration-300">Resume</a></li>
            <li> <a href="" className="font-semibold hover:text-green-600 transition-all duration-300">Works</a></li>
            <li> <a href="" className="font-semibold hover:text-green-600 transition-all duration-300">Contact</a></li>
          </ul>

          <div className="dropdown dropdown-end tablet:hidden">
            <div tabIndex={0} role="button" className="btn btn-circle btn-sm bg-transparent border-0 shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /> </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-white backdrop-blur-sm rounded-box z-1 w-52 p-2 shadow-sm">
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
