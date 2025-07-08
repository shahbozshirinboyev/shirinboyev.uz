import React from "react";

function Resume() {
  return (
    <div className="container mx-auto px-4 tablet:px-0 my-12 border border-red-500">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 tablet:gap-12 laptop:gap-32">
        <div className="w-full border">
          <div>
            <h2 className="text-3xl font-semibold mb-3">Why hire me?</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <button className="btn w-full">About Me</button>
            <button className="btn w-full">Education</button>
            <button className="btn w-full">Experience</button>
            <button className="btn w-full">Skills</button>
          </div>
        </div>

        <div className="col-span-1 laptop:col-span-2">
          {/* About Me */}
          <div className="border">
            <div>
              <h3 className="text-2xl font-semibold mb-3">About me</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugit blanditiis ab perspiciatis nostrum excepturi.
              </p>
            </div>
            <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4">
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

          {/* Education */}
          <div className="border">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Education</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugit blanditiis ab perspiciatis nostrum excepturi.
              </p>
            </div>

            <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 h-[300px] overflow-y-scroll">
              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="border">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Experience</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugit blanditiis ab perspiciatis nostrum excepturi.
              </p>
            </div>
            <div className="grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 h-[300px] overflow-y-scroll">
              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>

              <div className="border border-zinc-400 p-4 rounded-sm">
                <span class="text-green-500 font-bold">2019 - 2023</span>
                <h4 className="pt-3 font-bold">
                  Tashkent University of Information Technologies
                </h4>

                <ul className="mt-5 list-disc list-inside custom-list">
                  <li className="font-semibold">Computer Engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="border">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Skills</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi fugit blanditiis ab perspiciatis nostrum excepturi.
              </p>
            </div>
            <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 mt-5 gap-4 h-[300px] overflow-y-scroll">
              <div className="border border-zinc-400 p-4 rounded-sm flex justify-center items-center h-[130px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
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
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
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
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
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
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
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
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
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
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
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
                  class="bi bi-javascript"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
