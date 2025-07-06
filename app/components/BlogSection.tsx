"use client";

import { motion } from "framer-motion";

export default function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Blogs & Tutorials
        </motion.h2>

        {/* <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Full-Stack Developer - Web Lankan (Mar2025 - Present)",
              description:
                "Experienced Full-Stack Developer specializing in custom WordPress backends integrated with headless CMS architecture. Skilled in connecting Next.js, GraphQL, Docker, Redux, and Redis to build high-performance websites and web applications.",
              details: [
                "Led the development of scalable web and e-commerce platforms using Next.js, React.js, and Node.js. Engineered secure and efficient backend systems with PHP, MySQL, Redis, and GraphQL—adhering to OOP and MVC principles to create robust custom headless CMS solutions for dynamic content delivery.",
                "Designed and maintained RESTful and GraphQL APIs, integrated Jira APIs to automate project workflows, and developed AI-powered tools to streamline business operations.",
                "Introduced Python-based automated testing to improve code reliability and maintainability",
                "Implemented CI/CD pipelines with GitHub Actions, containerized applications with Docker, and deployed them across AWS services including EC2, S3, and Lightsail. Ensured high code quality and performance standards with continuous monitoring via SonarQube.",
                "Developing a base theme template in Next.js to accelerate product delivery and enhance code reusability, following established React design patterns.",
                "Contributing to a company-wide NPM component library to centralize and maintain reusable UI components for consistent development.",
              ],
              tech: [
                "NEXT.js",
                "tailwindcss",
                "GraphQL",
                "REST APIs",
                "WooCommerce REST APIs",
                "ACF",
                "Custom WordPress Plugins & Themes",
                "Node.js",
                "Redux",
                "Redis",
                "Docker",
                "GitHub",
              ],
            },
            {
              title: "Full-Stack Developer - DealStreet (Jan2024 - Present)",
              description:
                "This is my personal dream—to build the leading bike spares e-commerce platform in Sri Lanka, enabling customers to purchase motorcycle parts from anywhere in the country and have them delivered to their doorstep. While the business currently serves in-store customers, my vision is to expand and establish a strong presence in the online market as well. - dealstreet.lk",
              details: [
                "Managing customer data through a custom-built CRM and POS system developed using Laravel, Jetstream, and Livewire.",
                "Built a mobile application using Flutter and SQLite to capture customer inquiries about products, enabling targeted follow-ups for sales and marketing. The app is fully integrated with the CRM system.",
                "Developing an e-commerce platform with WordPress, WooCommerce, ACF, CPT UI, and custom plugins—automating the delivery process and integrating a secure payment gateway for seamless transactions.",
                "Creating an AI-powered agent to automate product advertisement generation, utilizing a standardized design template built in Figma for consistent and efficient post creation.",
              ],
              tech: [
                "WordPress",
                "WooCommerce",
                "Woostify Theme",
                "Elementor",
                "WooCommerce REST API",
                "PHP",
                "HTML",
                "CSS",
                "JavaScript",
                "Laravel",
                "Jetstream",
                "Livewire",
                "Flutter",
                "SQLite",
                "ACF",
                "CPT UI",
                "Custom WordPress Plugins",
                "MySQL",
                "Git",
                "GitHub",
                "Figma",
                "OpenAI API",
                "LangChain",
                "Playwright",
                "Figma API",
                "Python",
                "Node.js",
              ],
            },
            {
              title: "Web Developer - Infinity Co. (Nov2024 - March2025)",
              description:
                "Developed a custom child theme on top of the Woostify parent theme to tailor and extend WooCommerce functionality for a high-performance e-commerce platform - infinitystore.lk",
              details: [
                "Worked as an intern on developing a custom child theme based on the Woostify parent theme, customizing and extending WooCommerce functionality for a high-performance e-commerce platform. Utilized Elementor for building responsive, modular front-end layouts and integrated WooCommerce APIs to enable dynamic product and order management features.",
                "Deployed the production site on an AWS EC2 instance, ensuring scalability and site reliability. Collaborated with the development team to enforce best practices around WordPress coding standards, including the use of hooks, filters, and actions for clean and maintainable code.",
              ],
              tech: [
                "WordPress",
                "WooCommerce",
                "Woostify Theme",
                "Elementor",
                "WooCommerce REST API",
                "PHP",
                "HTML",
                "CSS",
                "JavaScript",
                "AWS EC2",
                "MySQL",
                "Git",
                "GitHub",
              ],
            },
            {
              title: "Web Developer - BCAS City Campus (Nov2022 - Apr2023)",
              description:
                "My primary responsibility was website maintenance and bug fixing to ensure maximum uptime and prevent functionality issues. I was specifically tasked with resolving issues related to restoring ACF (Advanced Custom Fields) in the backend, enabling content updates without the need for hardcoding.",
              details: [
                "Handled website maintenance and bug fixing to ensure optimal performance and uptime. Resolved critical issues involving Advanced Custom Fields (ACF), restoring backend functionality to allow non-technical users to manage and update site content without relying on hardcoded changes.",
                "Restored the website with fully customizable fields and sections, enabling seamless content updates while addressing and mitigating security vulnerabilities.",
              ],
              tech: [
                "WordPress",
                "Custom WordPress Theme",
                "OWASP",
                "HTML",
                "CSS",
                "JavaScript",
                "FTP Manager",
                "ACF",
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
