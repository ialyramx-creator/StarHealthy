"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { motion } from "framer-motion"


export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-900/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA Heading */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6 text-gray-900 leading-none">
            Entrena con nosotros
          </h2>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed font-medium">
            {"\u00a1Cuida tu cuerpo y mente, y siembra el camino hacia un futuro m\u00e1s saludable!"}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a href="https://maps.app.goo.gl/NzpAKtxwFVRMn2mC6" target="_blank" rel="noopener noreferrer">
              <LiquidButton
                size="xxl"
                className="font-bold text-xl tracking-wide px-12 py-4 bg-gray-900 hover:bg-gray-800 text-white border-2 border-gray-900 hover:scale-105 transition-all duration-300"
              >
                Encuentranos
              </LiquidButton>
            </a>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
