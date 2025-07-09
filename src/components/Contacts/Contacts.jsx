import { section } from "motion/react-client";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  const contacts = t("contacts", { returnObjects: true });

  return (
    <div id="contacts" className="c_container">
      <div className="border border-green-200 bg-green-50/70 backdrop-blur-sm p-2 mb-4 rounded-sm">
        <h2 className="font-bold text-green-500">{contacts.section}</h2>
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 laptop:gap-12">
        <div className="p-5 laptop:p-8 border border-zinc-200 rounded-md order-2 laptop:order-1">
          <h4 className="font-semibold text-green-500 text-3xl">{contacts.form.title}</h4>
          <p className="my-3">{contacts.form.description}</p>

          <form action="">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={contacts.form.first_name}
                className="input input-sm tablet:input-md"
              />
              <input
                type="text"
                placeholder={contacts.form.last_name}
                className="input input-sm tablet:input-md"
              />
              <input
                type="email"
                placeholder={contacts.form.email}
                className="input input-sm tablet:input-md"
              />
              <input
                type="number"
                placeholder={contacts.form.phone}
                className="input input-sm tablet:input-md"
              />
            </div>

            <div>
              <select
                defaultValue="Select a service"
                className="select select-sm tablet:select-md w-full my-4 text-zinc-400"
              >
                <option disabled={true} className="opacity-50">
                  {contacts.form.service}
                </option>
                <option>{contacts.form.services.createWebsite}</option>
                <option>{contacts.form.services.createApi}</option>
                <option>{contacts.form.services.other}</option>
              </select>
              <textarea
                className="textarea w-full"
                placeholder={contacts.form.message}
              ></textarea>
            </div>

            <button className="btn mt-4 btn-sm tablet:btn-md bg-green-50 hover:bg-green-100 border-green-200 text-green-500">
              {contacts.form.submit}
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center gap-4 order-1 laptop:order-2">
          <div className="flex gap-3 justify-start items-center">
            <div className="w-[50px] h-[50px] flex justify-center items-center bg-green-50 border border-green-200 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-telephone-fill text-green-500"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold opacity-70">{contacts.info.phone.name}</span>
              <p className="font-semibold leading-4">{contacts.info.phone.value}</p>
            </div>
          </div>

          <div className="flex gap-3 justify-start items-center">
            <div className="w-[50px] h-[50px] flex justify-center items-center bg-green-50 border border-green-200 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-telegram text-green-500"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold opacity-70">{contacts.info.telegram.name}</span>
              <p className="font-semibold leading-4">{contacts.info.telegram.value}</p>
            </div>
          </div>

          <div className="flex gap-3 justify-start items-center">
            <div className="w-[50px] h-[50px] flex justify-center items-center bg-green-50 border border-green-200 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope-fill text-green-500"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold opacity-70">{contacts.info.email.name}</span>
              <p className="font-semibold leading-4">{contacts.info.email.value}</p>
            </div>
          </div>

          <div className="flex gap-3 justify-start items-center">
            <div className="w-[50px] h-[50px] flex justify-center items-center bg-green-50 border border-green-200 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-geo-alt-fill text-green-500"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold opacity-70">{contacts.info.address.name}</span>
              <p className="font-semibold leading-4">
                {contacts.info.address.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
