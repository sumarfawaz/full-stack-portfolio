"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono">
              <p className="text-green-500 mb-2">$ contact --info</p>
              <h2 className="text-3xl font-bold mb-8 text-gray-200">
                Let&apos;s Connect
              </h2>
              <p className="text-green-500 mb-2">$ location --current</p>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Colombo, Sri Lanka</span>
              </div>
              <p className="text-green-500 mt-8 mb-2">$ contact --email</p>
              <motion.a
                href="mailto:sumar.fawaz@outlook.com"
                whileHover={{ scale: 1.02 }}
                className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
              >
                sumar.fawaz@outlook.com
              </motion.a>
              {/* <p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p>
							<motion.a
								href="/path-to-resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								</svg>
								<span>Download Resume</span>
							</motion.a> */}
              <p className="text-green-500 mt-8 mb-4">$ ls ./social-links</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.a
                  href="https://github.com/sumarfawaz/"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">GitHub</p>
                    <p className="text-sm text-gray-400">@sumarfawaz</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sumar-fawaz-/"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">LinkedIn</p>
                    <p className="text-sm text-gray-400">Sumar Fawaz</p>
                  </div>
                </motion.a>
				{/* <motion.a
					href="https://medium.com/@sumar.fawaz"
					whileHover={{ scale: 1.05 }}
					className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
				>
					<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
					<svg
						className="w-5 h-5 text-green-400"
						fill="currentColor"
						viewBox="0 -55 256 256"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid"
					>
						<path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" />
					</svg>
					</div>
					<div>
					<p className="font-semibold text-gray-200">Medium</p>
					<p className="text-sm text-gray-400">@sumar.fawaz</p>
					</div>
				</motion.a> */}

                {/* <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 461.001 461.001"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
       c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
       C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123
       c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881
       C304.363,229.873,304.298,235.248,300.506,237.056z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">YouTube</p>
                    <p className="text-sm text-gray-400">@youryoutubechannel</p>
                  </div>
                </motion.a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
