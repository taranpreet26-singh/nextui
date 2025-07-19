import { motion } from "framer-motion";




export const AnimatedBorderCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative p-6 rounded-xl bg-neutral-900 text-white w-80 overflow-hidden"
    >
      <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-border-pulse" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-2">Next-Gen Tech</h3>
        <p className="text-sm">Experience cutting-edge innovation today.</p>
      </div>
    </motion.div>
  );
};
