import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
// import { useEffect } from "react";

export const GridCardOpen = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed  inset-0 bg-black/95 z-50 flex items-center justify-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          layoutId={`card-${project.id}`}
          onClick={(e) => e.stopPropagation()}
          className=" bg-primary w-[90%] max-w-5xl max-h-[90%] h-full grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden"
        >
          <div className=" flex flex-col gap-1 items-center justify-center ">
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-full object-cover flex-9"
            />
          </div>

          <div className="p-6 flex flex-col gap-4 text-white overflow-y-auto">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-white/80">{project.description}</p>
            <section className=" flex-1 flex justify-center gap-2 w-full px-2">
              {project.tecnologies.map((t, idx) => (
                <span
                  id={idx}
                  className=" m-x-auto text-white flex flex-col justify-center items-center flex-wrap"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="size-12 p-1 rounded-full"
                  />
                  <strong className="">{t.name}</strong>
                </span>
              ))}
            </section>
            <div className="mt-auto flex gap-3">
              <a href={project.demo} className="underline">
                Demo
              </a>
              <a href={project.github} className="underline">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
