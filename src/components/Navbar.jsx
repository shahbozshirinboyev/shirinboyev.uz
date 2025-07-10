import { motion } from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";
import useActiveSection from "../hooks/useActiveSection";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";


function Navbar() {
  const { t } = useTranslation();
  const menus = t("menus", { returnObjects: true });
  const activeSection = useActiveSection(["home", "services", "resume", "works", "contacts"]);

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
      className="container mx-auto px-4 tablet:px-0 my-4 sticky top-1 z-5"
    >
      <div className="flex justify-between items-center rounded-full px-3 py-2 border border-green-200 dark:border-green-200/10 bg-green-50/70 dark:bg-green-50/10 backdrop-blur-3xl">

        <div>
          {/* <img src="/images/logo/logo.png" className="w-10" alt="logo" /> */}
          <h4 className="font-bold">
            Shahboz<span className="text-green-500">.</span>
          </h4>
        </div>

        <div className="flex items-center justify-center gap-2">

          <div className="tablet:hidden">
            <LanguageSwitcher />
          </div>

          <div className="tablet:hidden">
            <ThemeSwitcher />
          </div>

          <ul className="hidden tablet:flex items-center gap-4">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.href}
                  className={`font-semibold transition-all duration-300 ${activeSection === menu.href.replace("#", "") ? "text-green-500" : "" }`} >
                  {menu.name}
                </a>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>

          <div className="dropdown dropdown-end tablet:hidden">

            <div tabIndex={0} role="button" className="btn btn-circle btn-sm bg-transparent border-0 shadow-none" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /> </svg>
            </div>

            <ul tabIndex={0} className="dropdown-content menu border border-green-200 dark:border-green-200/10 bg-green-50/90 dark:bg-slate-950/90 backdrop-blur-sm rounded-box z-1 w-52 p-2 shadow-sm">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.href}
                  className={`font-semibold transition-all duration-300 ${activeSection === menu.href.replace("#", "") ? "text-green-500" : "" }`} >
                  {menu.name}
                </a>
              </li>
            ))}
            </ul>

          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
