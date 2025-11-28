import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // 👈 close when clicking the overlay
      >
        {/* Modal content */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-gray-300 dark:border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking inside
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            <X size={22} />
          </button>

          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl w-full h-52 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {project.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {project.link && (
            <div className="flex gap-4 mt-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-md transition"
              >
                View Project
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-red-800 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-md transition"
                >
                  🤖 Github Link
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;