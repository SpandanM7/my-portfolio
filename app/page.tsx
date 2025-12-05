"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Section 1: Hero */}
      <section className="flex flex-col h-screen items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Spandan Mukherjee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-8 text-center"
        >
          Developer • Designer • Creator
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#about"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: About */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Skills/Work */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl w-full"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-400">
                Building modern web applications with cutting-edge technologies.
              </p>
            </motion.div>

            {/* Skill Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-400">
                Creating beautiful and intuitive user experiences.
              </p>
            </motion.div>

            {/* Skill Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                Turning ideas into reality with creative solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Contact */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get In Touch
            </a>
            <Link
              href="/aboutme"
              className="px-8 py-3 bg-transparent text-white border border-gray-600 rounded-lg font-semibold hover:border-gray-400 transition"
            >
              View Full Profile
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}