// import { useState, useEffect } from "react";
// import i18n from "../i18n";

// const languages = [
//   { code: "uz", name: "O'zbekcha", icon: "/images/language_icons/uz.png" },
//   { code: "en", name: "English", icon: "/images/language_icons/en.png" },
//   { code: "ru", name: "Русский", icon: "/images/language_icons/ru.png" },
// ];

// function LanguageSwitcher() {
//   const [currentLang, setCurrentLang] = useState(i18n.language || "uz");
//   const [isFading, setIsFading] = useState(false);

//   useEffect(() => {
//     const storedLang = localStorage.getItem("i18nextLng") || "uz";
//     setCurrentLang(storedLang);
//   }, [i18n.language]);

//   const handleSwitchLanguage = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       const currentIndex = languages.findIndex(
//         (lang) => lang.code === currentLang
//       );
//       const nextIndex = (currentIndex + 1) % languages.length;
//       const nextLang = languages[nextIndex];
//       i18n.changeLanguage(nextLang.code);
//       setCurrentLang(nextLang.code);
//       setIsFading(false);
//     }, 200);
//   };

//   const current = languages.find((lang) => lang.code === currentLang);

//   return (
//     <button
//       onClick={handleSwitchLanguage}
//       className="btn btn-sm btn-circle shadow-none border-transparent bg-transparent flex justify-center items-center transition-transform duration-500 ease-in-out"
//     >
//       <img
//         src={current?.icon}
//         alt={current?.code}
//         className={`w-5 transition-opacity duration-300 ${
//           isFading ? "opacity-0" : "opacity-100"
//         }`}
//       />
//     </button>
//   );
// }

// export default LanguageSwitcher;
import { useState, useEffect } from "react";
import i18n from "../i18n";
import languages from "../data/languages.json";

function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("uz");
  const [isFading, setIsFading] = useState(false);

  // Foydalanuvchining tilini aniqlash va normalize qilish
  useEffect(() => {
    let storedLang = localStorage.getItem("i18nextLng");

    if (!storedLang) {
      const browserLang = (navigator.language || "uz").split("-")[0];
      const availableLangs = languages.map((lang) => lang.code);
      storedLang = availableLangs.includes(browserLang) ? browserLang : "uz";
      localStorage.setItem("i18nextLng", storedLang);
      i18n.changeLanguage(storedLang);
    } else {
      // Normalize lang: "en-US" -> "en"
      storedLang = storedLang.split("-")[0];
      i18n.changeLanguage(storedLang);
    }

    setCurrentLang(storedLang);
  }, []);

  const handleSwitchLanguage = () => {
    setIsFading(true);
    setTimeout(() => {
      const normalizedLang = currentLang.split("-")[0];
      const currentIndex = languages.findIndex(
        (lang) => lang.code === normalizedLang
      );
      const nextIndex = (currentIndex + 1) % languages.length;
      const nextLang = languages[nextIndex];

      i18n.changeLanguage(nextLang.code);
      setCurrentLang(nextLang.code);
      localStorage.setItem("i18nextLng", nextLang.code);
      setIsFading(false);
    }, 200);
  };

  const normalizedLang = currentLang.split("-")[0];
  const current = languages.find((lang) => lang.code === normalizedLang);

  return (
    <button
      onClick={handleSwitchLanguage}
      className="btn btn-sm btn-circle shadow-none border-transparent bg-transparent flex justify-center items-center transition-transform duration-500 ease-in-out"
    >
      <img
        src={current?.icon}
        alt={current?.code}
        className={`w-5 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"
          }`}
      />
    </button>
  );
}

export default LanguageSwitcher;