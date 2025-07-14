import Statistic from "./Statistic/Statistic";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [home] = t("home", { returnObjects: true });
  return (
    <>
      <div id="home" className="c_container">
        <div className="flex flex-col laptop:flex-row gap-4 ">
          <div className="w-full order-2 laptop:order-1">

            <div className="text-center laptop:text-start ">
              <span className="font-semibold pb-3">{home.role}</span>
              <h2 className="font-extrabold ">
                <span className="text-2xl tablet:text-4xl">{home.greeting}</span>
                <br />
                <span className="text-green-500 text-3xl tablet:text-5xl">{home.name}</span>
              </h2>
              <p className="font-normal mt-4">{home.description}</p> </div>

            <div className="flex gap-2 mt-5 justify-center laptop:justify-start">
              <a href="./cv/shirinboyev_shahboz_cv_ru.pdf" download className="btn rounded-full flex gap-2 border border-green-200 bg-green-50 dark:bg-green-50/10 dark:border-green-200/10 text-green-500 hover:bg-green-500 hover:text-white hover:border-transparent">
                <span>{home.downloadCV}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" /> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" /> </svg>
              </a>
              <a href="https://github.com/shahbozshirinboyev" className="btn btn-circle border border-green-200 bg-green-50 dark:bg-green-50/10 dark:border-green-200/10 text-green-500 hover:bg-green-500 hover:text-white hover:border-transparent" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" /> </svg>
              </a>
              <a href="https://www.linkedin.com/in/shahboz-shirinboyev" className="btn btn-circle border border-green-200 bg-green-50 dark:bg-green-50/10 dark:border-green-200/10 text-green-500 hover:bg-green-500 hover:text-white hover:border-transparent" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /> </svg>
              </a>
              <a href="https://t.me/sh_shirinboyev" className="btn btn-circle border border-green-200 bg-green-50 dark:bg-green-50/10 dark:border-green-200/10 text-green-500 hover:bg-green-500 hover:text-white hover:border-transparent" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" /> </svg>
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center items-center order-1 laptop:order-2">
            <img className="rounded-full w-72 h-72 object-cover p-5 border-3 border-dashed" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2025%2F01%2F21%2Ftravis-scott-4x4-single-premiere-college-football-championship-halftime-show-stream-1.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
          </div>
        </div>
        <Statistic />
      </div>


    </>
  )
}

export default Home