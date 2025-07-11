import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../Services/Services.css"

function Works() {
  const { t } = useTranslation();
  const works = t("works", { returnObjects: true });
  const projects = works.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <div id="works" className="c_container">
      <div className="c_section">
        <h2>{works.section}</h2>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5 tablet:gap-8 laptop:gap-12 items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id + "-text"}
            className="order-2 laptop:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <span className="text-5xl laptop:text-8xl font-extrabold number__font-services">
              {project.number}
            </span>
            <h4 className="text-2xl font-bold">{project.title}</h4>
            <p className="mt-2">{project.description}</p>

            <ul className="flex gap-x-3 flex-wrap mt-5 text-green-500 font-semibold">
              {project.tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>

            <hr className="my-2 dark:text-green-500/40 text-gray-300" />
            <div className="flex gap-2 justify-start">
              <a
                href={project.link_web}
                target="_blank"
                className="btn btn-circle hover:bg-green-500 hover:text-white transition-all duration-300 hover:border-transparent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-left rotate-180" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z" /> </svg>
              </a>
              <a
                href={project.link_github}
                target="_blank"
                className="btn btn-circle hover:bg-green-500 hover:text-white transition-all duration-300 hover:border-transparent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" > <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />{" "} </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id + "-image"}
            className="flex justify-center items-center order-1 laptop:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img
              src={project.image}
              alt="project visual"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="btn btn-sm laptop:btn-md bg-green-50 hover:bg-green-100 dark:hover:bg-green-100/20 dark:bg-green-50/10 border-green-200 dark:border-green-200/10 text-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" /> </svg>
        </button>
        <button
          onClick={handleNext}
          className="btn btn-sm laptop:btn-md bg-green-50 hover:bg-green-100 dark:hover:bg-green-100/20 dark:bg-green-50/10 border-green-200 dark:border-green-200/10 text-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" /> </svg>
        </button>
      </div>
    </div>
  );
}

export default Works;
