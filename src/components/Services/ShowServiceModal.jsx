import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ShowServiceModal({ isOpen, setIsOpen, data }) {

  // const [isOpen, setIsOpen] = useState(false);

  console.log(data)

  // Escape bosilsa modalni yopish
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </button> */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Modal box */}
            <motion.div
              className="relative z-10 bg-slate-50 dark:bg-slate-950 border border-green-200 dark:border-green-200/10 p-6 rounded-md w-[95%] tablet:w-[70%] laptop:w-[50%]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-bold">{data.number}</h3>
              <p className="py-4">{data.title}</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="btn btn-error"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ShowServiceModal;
