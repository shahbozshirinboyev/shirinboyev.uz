// import { useState, useEffect } from "react";
// import i18n from "../i18n";

// const languages = [
//   { code: "uz", name: "O'zbekcha", icon: "/images/language_icons/uz.png" },
//   { code: "en", name: "English", icon: "/images/language_icons/en.png" },
//   { code: "ru", name: "Русский", icon: "/images/language_icons/ru.png" },
// ];

// function LanguageSwitcher() {
//   const [currentLang, setCurrentLang] = useState(i18n.language || "uz");

//   useEffect(() => {
//     const storedLang = localStorage.getItem("i18nextLng") || "uz";
//     setCurrentLang(storedLang);
//   }, [i18n.language]);

//   const handleSwitchLanguage = () => {
//     const currentIndex = languages.findIndex((lang) => lang.code === currentLang);
//     const nextIndex = (currentIndex + 1) % languages.length;
//     const nextLang = languages[nextIndex];
//     i18n.changeLanguage(nextLang.code);
//     setCurrentLang(nextLang.code);
//   };

//   const current = languages.find((lang) => lang.code === currentLang);

//   return (
//     <button
//       onClick={handleSwitchLanguage}
//       className="btn btn-circle transition-all duration-1000 active:rotate-90 border border-green-200 bg-green-50/70 backdrop-blur-sm">
//         <img src={current.icon} className="w-5" alt={current.name} />
//       {/* <span>{current.name}</span> */}
//     </button>
//   );
// };

// export default LanguageSwitcher;

import { useState, useEffect } from "react";
import i18n from "../i18n";

const languages = [
  { code: "uz", name: "O'zbekcha", icon: "/images/language_icons/uz.png" },
  { code: "en", name: "English", icon: "/images/language_icons/en.png" },
  { code: "ru", name: "Русский", icon: "/images/language_icons/ru.png" },
];

function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "uz");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "uz";
    setCurrentLang(storedLang);
  }, [i18n.language]);

  const handleSwitchLanguage = () => {
    setIsFading(true);
    setTimeout(() => {
      const currentIndex = languages.findIndex(
        (lang) => lang.code === currentLang
      );
      const nextIndex = (currentIndex + 1) % languages.length;
      const nextLang = languages[nextIndex];
      i18n.changeLanguage(nextLang.code);
      setCurrentLang(nextLang.code);
      setIsFading(false);
    }, 200);
  };

  const current = languages.find((lang) => lang.code === currentLang);

  return (
    <button
      onClick={handleSwitchLanguage}
      className="btn btn-sm btn-circle shadow-none flex justify-center items-center border-zinc-200 transition-transform duration-500 ease-in-out"
    >
      <img
        src={current.icon}
        alt={current.name}
        className={`w-5 transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      />
    </button>
  );
}

export default LanguageSwitcher;
