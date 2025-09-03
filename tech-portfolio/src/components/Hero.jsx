import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Raja Balaji
        </motion.h1>
        <p style={{ fontSize: "1.2rem", color: "#aaa" }}>
          Software Engineer Intern | Entrepreneur | Tech Enthusiast 
        </p>
      </div>
    </section>
  );
}
