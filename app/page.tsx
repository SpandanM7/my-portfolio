"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  // Generate random stars
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);
  const projects = [
    {
      title: "SUDHAAR - Civic Issues Resolve System",
      year: "2024",
      tech: "Kotlin, Jetpack Compose, Firebase, NeonDB",
      description: "End-to-end civic infrastructure platform with Android app and web dashboard for real-time issue reporting and resolution tracking.",
      highlights: [
        "Geo-tagged reporting with Google Maps API integration",
        "MVVM architecture with repository pattern",
        "Sub-second latency across mobile and web platforms"
      ],
      link: "#"
    },
    {
      title: "3D Brain Tumor Segmentation",
      year: "2025",
      tech: "Python, PyTorch, Transformers, U-Net",
      description: "End-to-end 3D brain tumor segmentation pipeline using BraTS 2021 dataset with multi-modal MRI scans.",
      highlights: [
        "Hybrid CNN-Transformer architecture",
        "78-82% mean Dice score achievement",
        "Interactive 3D slice viewer with color-coded regions"
      ],
      link: "#"
    },
    {
      title: "SAR Image Colorization",
      year: "2024",
      tech: "Python, TensorFlow, PyTorch, OpenCV, MLflow",
      description: "Deep learning pipeline transforming grayscale SAR images into realistic colorized outputs using U-Net and conditional GAN.",
      highlights: [
        "Custom loss functions for enhanced color accuracy",
        "25% improvement in model training stability",
        "MLflow integration for experiment tracking"
      ],
      link: "#"
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "Kotlin", "Java", "C", "C++", "SQL"]
    },
    {
      category: "Frameworks",
      items: ["Jetpack Compose", "KMM", "Ktor", "TensorFlow", "PyTorch", "Firebase"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "PostgreSQL", "MLflow", "GCP"]
    },
    {
      category: "Core Competencies",
      items: ["Mobile Development", "Machine Learning", "Deep Learning", "RESTful APIs", "MVVM Architecture"]
    }
  ];

  return (
    <main className="bg-black text-white relative overflow-hidden">
      {/* Starry background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-900/10 via-transparent to-purple-900/10 blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col h-screen items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
          >
            Spandan Mukherjee
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-gray-400 mb-2"
          >
            <MapPin className="w-4 h-4" />
            <span>Kolkata, West Bengal, India</span>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-gray-400 text-xl mb-8 text-center max-w-2xl"
        >
          Software Engineer specializing in Mobile Development, Machine Learning & Cross-Platform Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
          className="flex gap-4 mb-12"
        >
          <a
            href="mailto:spandanmukherjee0818@gmail.com"
            className="p-3 border border-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-900 transition"
            aria-label="Email"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="w-5 h-5" />
            </motion.div>
          </a>
          <a
            href="https://linkedin.com/in/spandan-mukherjee1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-900 transition"
            aria-label="LinkedIn"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.div>
          </a>
          <a
            href="https://github.com/SpandanM7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-900 transition"
            aria-label="GitHub"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="#experience"
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
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

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-zinc-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl w-full"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Experience
          </h2>
          
          <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-900/0 via-purple-900/10 to-purple-900/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-1">Software Engineer Intern</h3>
                  <p className="text-xl text-gray-400 mb-2">IEPSSOLS & Co</p>
                  <p className="text-gray-500">Kolkata, India</p>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-400 mt-2 md:mt-0"
                >
                  April 2025 – Present
                </motion.p>
              </div>
              
              <div className="space-y-3 text-gray-300">
                {[
                  "Engineered cross-platform mobile applications using Kotlin Multiplatform Mobile with MVVM architecture, enabling 40% reduction in development time",
                  "Architected custom Jetpack Compose UI components and integrated Ktor client for secure RESTful API communication",
                  "Implemented AWS S3 integration for secure media handling, achieving 99.9% upload reliability across production environment",
                  "Established comprehensive testing strategy with JUnit and MockK, achieving 75% code coverage"
                ].map((text, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <span className="text-gray-500 mt-1">•</span>
                    <span>{text}</span>
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl w-full"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all group relative overflow-hidden"
              >
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-900/0 via-purple-900/0 to-pink-900/0 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.1,
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)"
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <motion.h3 
                      className="text-xl font-bold group-hover:text-gray-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.a 
                      href={project.link}
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label="View project"
                      whileHover={{ rotate: 45, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-400 flex gap-2"
                      >
                        <motion.span 
                          className="text-gray-600"
                          whileHover={{ x: 5, color: "#9CA3AF" }}
                        >
                          →
                        </motion.span>
                        {highlight}
                      </motion.p>
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-600 mt-4">{project.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl w-full"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />
                
                <h3 className="text-xl font-bold mb-4 text-gray-300 relative z-10">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillSet.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#374151",
                        boxShadow: "0 0 10px rgba(147, 51, 234, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl w-full"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Education
          </h2>
          
          <motion.div 
            className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-blue-900/0 to-purple-900/0 opacity-0 group-hover:opacity-10"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(147, 51, 234, 0) 100%)",
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
                  "linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(147, 51, 234, 0) 100%)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
                  <p className="text-xl text-gray-400 mb-1">Computer Science (Minor in Business)</p>
                  <p className="text-gray-500">Techno International New Town</p>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gray-400 mt-2 md:mt-0"
                >
                  Expected 2026
                </motion.p>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg"
              >
                
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-zinc-900">
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-8"
          >
            
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="mailto:spandanmukherjee0818@gmail.com"
              className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="tel:+916290480746"
              className="px-8 py-3 bg-transparent text-white border border-gray-600 rounded-lg font-semibold hover:border-gray-400 transition inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              +91 6290480746
            </motion.a>
          </div>

          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://linkedin.com/in/spandan-mukherjee1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/SpandanM7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ scale: 1.3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}