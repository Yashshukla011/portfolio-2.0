import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Experience() {
  const journey = [
    {
      year: "2024",
      title: "Started BCA Journey",
      description:
        "Started learning computer fundamentals, programming concepts and software development.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2025",
      title: "Started Web Development",
      description:
        "Learned HTML, CSS and JavaScript and started building responsive websites and interactive projects.",
      icon: <FaCode />,
    },
    {
      year: "2026",
      title: "Learning Full Stack Development",
      description:
        "Working with React, Node.js, Express and MongoDB to build modern full stack applications.",
      icon: <FaLaptopCode />,
    },
    {
      year: "Next Goal",
      title: "Internship & Professional Growth",
      description:
        "Preparing for internships, improving DSA skills and building more real-world projects.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Learning, building and
            <span className="block text-blue-600">
              growing every day.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My journey from learning programming basics to building modern
            full stack web applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          
          {/* Center line */}
          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-blue-100 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-10">
            
            {journey.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative grid items-center gap-7 md:grid-cols-2"
                >
                  {/* Left side */}
                  <div
                    className={`${
                      isLeft
                        ? "md:text-right"
                        : "md:col-start-2"
                    }`}
                  >
                    <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                      
                      <p className="text-sm font-black text-blue-600">
                        {item.year}
                      </p>

                      <h3 className="mt-3 text-2xl font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline icon */}
                  <div className="absolute left-0 top-7 hidden h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/25 md:left-1/2 md:flex md:-translate-x-1/2">
                    {item.icon}
                  </div>

                  {/* Empty side */}
                  <div
                    className={`hidden md:block ${
                      isLeft
                        ? "md:col-start-2"
                        : "md:col-start-1 md:row-start-1"
                    }`}
                  />
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-[30px] bg-slate-950 p-8 text-center text-white sm:p-11"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Current Focus
          </p>

          <h3 className="mt-4 text-3xl font-black">
            Building real-world projects.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            Currently focused on improving React, backend development,
            data structures and problem-solving skills.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;