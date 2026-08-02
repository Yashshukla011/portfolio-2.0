import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "yashshuklashuklas@gmail.com",
    href: "mailto:yashshuklashuklas@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/yashshukla011",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Connect With Me",
    href: "https://www.linkedin.com/in/yash-shukla-108563327/",
    icon: FaLinkedinIn,
  },
  {
    label: "LeetCode",
    value: "yashshukla8796",
    href: "https://leetcode.com/u/yashshukla8796/",
    icon: SiLeetcode,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();

  form.append("access_key", "4c7a7c51-ea05-4890-982c-5412453a7007");
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("subject", formData.subject);
  form.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0c] px-6 py-28 sm:px-10 lg:px-12">
      {/* single accent glow, consistent with rest of site */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#34d399]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#f2f2f3] sm:text-5xl">
            Let&apos;s build something great together.
          </h2>

          <p className="mt-6 text-lg text-[#a1a1aa]">
            Have a project, internship opportunity or idea? Send me a
            message.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Left side — info card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-[30px] border border-white/10 bg-[#111114] p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
                Get In Touch
              </p>

              <h3 className="mt-5 text-3xl font-black text-[#f2f2f3]">
                Let&apos;s create something useful.
              </h3>

              <p className="mt-5 text-[#a1a1aa]">
                I am interested in internships, collaborations and
                opportunities.
              </p>

              <div className="mt-10 space-y-4">
                {CONTACT_LINKS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0c] p-4 transition hover:border-[#34d399]/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#34d399]/10 text-[#34d399]">
                      <c.icon />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">
                        {c.label}
                      </p>
                      <p className="font-bold text-[#f2f2f3]">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[30px] border border-white/10 bg-[#111114] p-6 sm:p-9"
            >
              <h3 className="text-2xl font-black text-[#f2f2f3]">
                Send a Message
              </h3>

              {submitted && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#34d399]/30 bg-[#34d399]/10 p-4 text-[#34d399]">
                  <FaCheckCircle />
                  Message sent successfully!
                </div>
              )}

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="rounded-xl border border-white/10 bg-[#0a0a0c] p-4 text-sm text-[#f2f2f3] outline-none transition placeholder:text-[#6b6b70] focus:border-[#34d399]/50"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="rounded-xl border border-white/10 bg-[#0a0a0c] p-4 text-sm text-[#f2f2f3] outline-none transition placeholder:text-[#6b6b70] focus:border-[#34d399]/50"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="mt-5 w-full rounded-xl border border-white/10 bg-[#0a0a0c] p-4 text-sm text-[#f2f2f3] outline-none transition placeholder:text-[#6b6b70] focus:border-[#34d399]/50"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0c] p-4 text-sm text-[#f2f2f3] outline-none transition placeholder:text-[#6b6b70] focus:border-[#34d399]/50"
              />

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#34d399] p-4 font-bold text-[#0a0a0c] transition hover:-translate-y-0.5"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;