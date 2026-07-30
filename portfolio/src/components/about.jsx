import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLayerGroup,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "I build responsive and modern websites with clean layouts and smooth user experiences.",
    },
    {
      icon: <FaCode />,
      title: "Programming",
      description:
        "I solve programming problems and work with Java, C++, JavaScript and React.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Full Stack Apps",
      description:
        "I create frontend and backend applications using React, Node.js and modern tools.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white"
    >
      {/* Soft background */}
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Turning ideas into
            <span className="block text-blue-600">
              digital experiences.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I am a BCA student and aspiring Full Stack Developer who enjoys
            building useful, responsive and visually clean web applications.
          </p>
        </motion.div>

        {/* About content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left education card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              
              <div className="rounded-[25px] bg-white p-7 shadow-sm sm:p-9">
                
                {/* Education icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg shadow-blue-500/25">
                  <FaGraduationCap />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Education
                </p>

                <h3 className="mt-3 text-3xl font-black text-slate-950">
                  Bachelor of Computer Applications
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Currently learning software development, web technologies,
                  data structures and modern programming concepts.
                </p>

                {/* Stats */}
                <div className="mt-9 grid grid-cols-2 gap-4">
                  
                  <div className="rounded-2xl bg-blue-50 p-5">
                    <p className="text-3xl font-black text-blue-600">
                      5+
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      Technologies
                    </p>
                  </div>

                  <div className="rounded-2xl bg-indigo-50 p-5">
                    <p className="text-3xl font-black text-indigo-600">
                      3+
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      Projects
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              What I Do
            </p>

            <h3 className="mt-4 text-4xl font-black leading-tight text-slate-950">
              I create websites that are
              <span className="block text-blue-600">
                clean and useful.
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              My goal is to combine good design with clean code to build
              websites that look professional, work smoothly and provide a
              good experience on every device.
            </p>
             
            {/* Service cards */}
            <div className="mt-9 space-y-4">
              
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-900">
                      {service.title}
                    </h4>

                    <p className="mt-1 leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Button */}
            <a
              href="#projects"
              className="group mt-9 inline-flex items-center gap-3 font-bold text-blue-600 transition hover:text-blue-800"
            >
              Explore my projects

              <FaArrowRight className="transition group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;