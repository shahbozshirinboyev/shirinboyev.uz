import React from "react";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-base-100 shadow-sm">
        <div className="container mx-auto lg:px-18 xl:px-32 navbar">
          <div className="navbar-start">
            <a className="text-xl font-medium cursor-pointer select-none">
              Logo.
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center gap-2">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 4</a>
              </li>
              <li>
                <a>Item 5</a>
              </li>
              <li>
                <a className="btn rounded-full">Item 6</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm lg:menu dropdown-content bg-base-100 rounded-box z-5 mt-2 w-52 p-2 shadow right-0"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
                <li>
                  <a>Item 4</a>
                </li>
                <li>
                  <a>Item 5</a>
                </li>
                <li>
                  <a>Item 6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}

      {/* Home */}
      <div className="min-h-[500px] flex flex-col justify-center items-center p-6">
        <div className="flex flex-col-reverse lg:flex-row container mx-auto lg:px-18 xl:px-32 items-center justify-center">
          <div className="w-full">
            <span>Software developer</span>
            <h2>Hello I'm</h2>
            <h3>Shahboz Shirinboyev</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi
              ad numquam, neque cum perspiciatis.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-sm">
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </button>
              <div className="flex gap-2">
                <button className="btn rounded-full btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </button>

                <button className="btn rounded-full btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </button>
                <button className="btn rounded-full btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              className="rounded-full w-[250px] h-[250px] object-cover"
              src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
              alt=""
            />
          </div>
        </div>
        <div className="container mx-auto lg:px-18 xl:px-32 items-center mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="flex justify-start items-center p-4">
              <span className="text-5xl font-bold">12</span>
              <p>
                Years of <br /> experience
              </p>
            </div>
            <div className="flex justify-start items-center p-4">
              <span className="text-5xl font-bold">26</span>
              <p>
                Projects <br /> completed
              </p>
            </div>
            <div className="flex justify-start items-center p-4">
              <span className="text-5xl font-bold">8</span>
              <p>
                Technologies <br /> mastered
              </p>
            </div>
            <div className="flex justify-start items-center p-4">
              <span className="text-5xl font-bold">600</span>
              <p>
                Code <br /> commits
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /Home */}

      {/* Services */}
      <div className="min-h-[500px] flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto lg:px-18 xl:px-32 items-center">
          <div className="p-8 w-full">
            <div className="flex justify-between items-center">
              <span className="text-3xl">01</span>
              <button className="btn rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right rotate-45"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique alias deserunt ipsam.
              </p>
              <hr />
            </div>
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-center">
              <span className="text-3xl">02</span>
              <button className="btn rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right rotate-45"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique alias deserunt ipsam.
              </p>
              <hr />
            </div>
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-center">
              <span className="text-3xl">03</span>
              <button className="btn rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right rotate-45"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique alias deserunt ipsam.
              </p>
              <hr />
            </div>
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-center">
              <span className="text-3xl">04</span>
              <button className="btn rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right rotate-45"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique alias deserunt ipsam.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      {/* /Services */}
    </>
  );
}

export default App;
