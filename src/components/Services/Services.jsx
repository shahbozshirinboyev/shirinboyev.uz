import "./Services.css"
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true });
  return (
    <div id="services" className="c_container">

      <div className="c_section">
        <h2>{services.section}</h2>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-14 items-stretch">
        {services.items.map((item, index) => (
          <div key={index} className="group h-full">
            <a href={item.link} target="_blank" className="flex flex-col justify-between h-full transition-all duration-500 ease-in-out">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-5xl font-extrabold number__font-services group-hover:text-green-500">
                    {item.number}
                  </span>
                  <div className="rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle-fill group-hover:text-green-500" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl laptop:text-3xl font-extrabold mt-3 group-hover:text-green-500">{item.title}</h2>
              </div>
              <div>
                <p className="mt-12 text-md laptop:text-lg opacity-50 group-hover:opacity-30">{item.description}</p>
                <hr className="opacity-50 mt-3" />
              </div>
            </a>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Services