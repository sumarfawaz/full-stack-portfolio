"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono">
            <p className="text-green-500">$ whoami</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Sumar Fawaz
            </h1>
            <p className="text-gray-400 mb-2">
              Full-Stack Developer | Blockchain Researcher & Enthusiast
            </p>
            <p className="text-green-500">$ skills</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                MERN
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Python
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                WordPress
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                PHP
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Laravel
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                GraphQL\REST APIs
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                AWS
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Docker
              </span>
              {/* <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Kubernetes
              </span> */}
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Ethereum | Hyperledger Fabric | Smart Contracts
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                CI/CD
              </span>
            </div>

            <p className="text-green-500">$ls ./education</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                BEng in Software Engineering (Senior)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
