"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen py-32 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 w-max mb-16"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">Contact</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-16 leading-tight"
            >
                Let's Design Create Craft <br /> Incredible Work Together
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-6 max-w-3xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">Full Name *</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">Email Address *</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">Subject *</label>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-2 mt-4 mb-4">
                    <label className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">Your Message *</label>
                    <textarea
                        placeholder="A brief desc about your project"
                        rows={4}
                        className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                </div>

                <button
                    type="button"
                    className="bg-primary text-zinc-950 font-bold py-4 px-8 rounded-xl w-max hover:bg-primary/90 transition-colors"
                >
                    Send Message
                </button>
            </motion.form>
        </section>
    );
}
