import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Resume() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div
      id="resume"
      className="c_container"
    >
      <div className="border border-green-200 bg-green-50/70 backdrop-blur-sm p-2 mb-4 rounded-sm">
        <h2 className="font-bold text-green-500">Resume</h2>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 tablet:gap-12 laptop:gap-32">
        <div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Why hire me?</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <button
              onClick={() => setActiveTab("about")}
              className={`btn w-full ${
                activeTab === "about"
                  ? "bg-green-500 text-white"
                  : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`btn w-full ${
                activeTab === "education"
                  ? "bg-green-500 text-white"
                  : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`btn w-full ${
                activeTab === "experience"
                  ? "bg-green-500 text-white"
                  : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`btn w-full ${
                activeTab === "skills"
                  ? "bg-green-500 text-white"
                  : "bg-green-50 hover:bg-green-100 border-green-200 text-green-500"
              }`}
            >
              Skills
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
                    <h3 className="text-2xl font-semibold mb-3">About me</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi fugit blanditiis ab perspiciatis nostrum
                      excepturi.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 h-[350px]">
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Full Name</span>
                        <span>Shahboz Shirinboyev</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Experience</span>
                        <span>3+ Years</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Nationality</span>
                        <span>Uzbek</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Freelance</span>
                        <span>Available</span>
                      </li>
                    </ul>

                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Phone</span>
                        <span>+998 (93) 009 11 66</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Telegram</span>
                        <span>@sh_shirinboyev</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Email</span>
                        <span>shahboz.sh.b@gmail.com</span>
                      </li>
                      <li className="flex gap-3 font-semibold">
                        <span className="opacity-50">Languages</span>
                        <span>Uzbek, English, Russian</span>
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
                    <h3 className="text-2xl font-semibold mb-3">Education</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi fugit blanditiis ab perspiciatis nostrum
                      excepturi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 h-[350px] overflow-y-scroll">
                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>
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
                    <h3 className="text-2xl font-semibold mb-3">Experience</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi fugit blanditiis ab perspiciatis nostrum
                      excepturi.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 h-[350px] overflow-y-scroll">
                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm">
                      <span className="text-green-500 font-bold">
                        2019 - 2023
                      </span>
                      <h4 className="pt-3 font-bold">
                        Tashkent University of Information Technologies
                      </h4>

                      <ul className="mt-5 list-disc list-inside custom-list">
                        <li className="font-semibold">Computer Engineering</li>
                      </ul>
                    </div>
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
                    <h3 className="text-2xl font-semibold mb-3">Skills</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi fugit blanditiis ab perspiciatis nostrum
                      excepturi.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 mt-5 gap-4 h-[350px] overflow-y-scroll">
                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>

                    <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-javascript"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                        />
                      </svg>
                    </div>
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
