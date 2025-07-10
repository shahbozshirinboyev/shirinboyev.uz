import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function Resume() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div
      id="resume"
      className="c_container"
    >
      <div className="border border-green-200 bg-green-50/70 backdrop-blur-sm p-2 mb-4 rounded-sm">
        <h2 className="font-bold text-green-500">{resume.info.section}</h2>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 tablet:gap-12 laptop:gap-32">
        <div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">{resume.info.title}</h2>
            <p className="text-sm">
              {resume.info.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-5">

            <button
              onClick={() => setActiveTab("skills")}
              className={`btn w-full ${activeTab === "skills"
                ? "bg-green-500 text-white"
                : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
                }`}
            >
              {resume.info.tabs.skills}
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`btn w-full ${activeTab === "experience"
                ? "bg-green-500 text-white"
                : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
                }`}
            >
              {resume.info.tabs.experience}
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`btn w-full ${activeTab === "education"
                ? "bg-green-500 text-white"
                : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
                }`}
            >

              {resume.info.tabs.education}
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`btn w-full ${activeTab === "about"
                ? "bg-green-500 text-white"
                : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
                }`}
            >
              {resume.info.tabs.about}

            </button>

          </div>
        </div>

        <div className="col-span-1 laptop:col-span-2">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* About Me */}
                <div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{resume.about.title}</h3>
                    <p className="text-sm">
                     {resume.about.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 max-h-[350px]">
                    <ul className="flex flex-col gap-3">

                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.full_name.name}</span>
                        <span>{resume.about.full_name.value}</span>
                      </li>

                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.experience.name}</span>
                        <span>{resume.about.experience.value}</span>
                      </li>

                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.nationality.name}</span>
                        <span>{resume.about.nationality.value}</span>
                      </li>

                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.freelance.name}</span>
                        <span>{resume.about.freelance.value}</span>
                      </li>

                    </ul>

                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.phone.name}</span>
                        <span>{resume.about.phone.value}</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.email.name}</span>
                        <span>{resume.about.email.value}</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.telegram.name}</span>
                        <span>{resume.about.telegram.value}</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">{resume.about.languages.name}</span>
                        <span>{resume.about.languages.value}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Education */}
                <div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{resume.education.title}</h3>
                    <p className="text-sm">
                      {resume.education.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 max-h-[350px] overflow-y-auto">

                    {
                      resume.education.items.map((education, index) => (

                        <div className="border border-zinc-400 p-4 rounded-sm">
                          <span className="text-green-500 font-bold">
                            {education.years}
                          </span>
                          <h4 className="pt-3 font-bold">
                            {education.institution}
                          </h4>

                          <ul className="mt-5 list-disc list-inside custom-list">
                            <li className="font-semibold">{education.field}</li>
                          </ul>
                        </div>

                      ))
                    }

                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Experience */}
                <div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{resume.experience.title}</h3>
                    <p className="text-sm">
                      {resume.experience.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 max-h-[350px] overflow-y-auto">

                    {
                      resume.experience.items.map((experience, index) => (

                        <div className="border border-zinc-400 p-4 rounded-sm">
                          <span className="text-green-500 font-bold">
                            {experience.years}
                          </span>
                          <h4 className="pt-3 font-bold">
                            {experience.company}
                          </h4>

                          <ul className="mt-5 list-disc list-inside custom-list">
                            <li className="font-semibold">{experience.role}</li>
                          </ul>
                        </div>

                      ))
                    }

                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Skills */}
                <div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{resume.skills.title}</h3>
                    <p className="text-sm">
                      {resume.skills.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 mt-5 gap-4 max-h-[350px] overflow-y-auto">

                    {
                      resume.skills.list.map((skill, index) => (
                        <div key={index} className="border rounded-sm border-zinc-400 p-2 flex justify-start items-center gap-2">
                          <img src={skill.icon} alt={skill.name} width="35px" height='35px' />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))
                    }



                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Resume;
