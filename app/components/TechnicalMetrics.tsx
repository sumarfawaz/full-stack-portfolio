"use client";

import { motion } from "framer-motion";

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects & Contributions
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* Readway Institute CRM & Attendance Management System */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Readway Institute CRM & Attendance Management System -
              readwayinstitute.lk
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  CRM & Attendance Marking System
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    • Developed a complete CRM system along with an NFC-based
                    attendance marking system that sends SMS notifications to
                    parents upon student arrival and departure.
                  </li>
                  <li>
                    • Student Information, Student Clustering based on Batches,
                    Student Reviews, Student Attendance Report, Student Portal
                    for viewing Results.
                  </li>
                  <li>
                    • Developed an automation to deploy updates, changes and bug
                    fixing automatically using GitHub Actions.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Technologies Used
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Laravel</li>
                  <li>• JetStream</li>
                  <li>• Livewire</li>
                  <li>• SMS Gateway</li>
                  <li>• NFC Reader</li>
                  <li>• NFC Card</li>
                  <li>• Linux Shared Hosting</li>
                  <li>• GitHub Actions</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Temperature & Humidity Monitoring System
           */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Temperature & Humidity Monitoring System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Real-time Temperature and Humidity Reading
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    • The server I am using is RAID enabled which makes it a
                    perfect match for a purpose like this. So, this produced a
                    lot of heat in my room and I wanted to monitor the
                    temperature in my room to automate the process of turning on
                    the AC
                  </li>
                  <li>
                    • Integrated an Arduino UNO with a DHT11 sensor to read
                    real-time temperature and humidity data. The Arduino sketch
                    (code) is available in the repository and sends data to a
                    Node.js server via an API.
                  </li>
                  <li>
                    • Developed a React.js front-end that fetches and displays
                    the sensor data. If the temperature exceeds 32°C, a message
                    prompts to turn on the AC—laying the foundation for future
                    automation of AC control.
                  </li>
                  <li>
                    {" "}
                    <a href="https://github.com/sumarfawaz/sensor-heat-monitor.git">
                      Github - Source Code
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Technologies Used
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Arduino UNO</li>
                  <li>• dht11 Humidity & Temperature Sensor</li>
                  <li>• Node.Js</li>
                  <li>• React.JS</li>
                  <li>• Arduino Cloud</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* DoseDash Medicine Delivery Mobile App */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              DoseDash Medicine Delivery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Mobile App
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    • Led the university-level team project{" "}
                    <strong>DoseDash</strong> as Scrum Master and Developer. The
                    platform was designed to deliver medicines across Sri Lanka,
                    inspired by real-time delivery models like Uber and PickMe,
                    with live driver tracking functionality.
                  </li>

                  <li>
                    • The application was developed as a series of MVPs through
                    agile sprints, each lasting three weeks. The project was
                    successfully completed with on-time submissions, and I was
                    proud to architect the solution using Flutter and Firebase.
                  </li>

                  <li>
                    • Flutter and Firebase were chosen to enable a NoSQL-based
                    architecture with centralized backend operations,
                    eliminating the need for a separate server deployment—making
                    it a cost-effective and efficient solution for a
                    university-level project.
                  </li>
                  <li>
                    • Flutter and Firebase, both developed by Google, offer
                    seamless integration and enable efficient cross-platform
                    development for both iOS and Android.
                  </li>
                  <li>
                    <a href="https://github.com/sumarfawaz/dosedash-patient-app.git">GitHub - Source Code</a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Technologies Used
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Agile</li>
                  <li>• Scrum</li>
                  <li>• Jira</li>
                  <li>• Flutter</li>
                  <li>• Firebase</li>
                  <li>• Google Maps SDK</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
