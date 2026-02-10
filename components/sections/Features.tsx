'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';

export function Features() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid opacity-10" />

            {/* Decorative Vectors */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
                className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float"
            />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <SectionHeader
                    title="Our Competitive Advantage"
                    subtitle="Conquer the market with unbeatable dominance in property. We combine expertise, technology, and personalized service."
                    align="center"
                    className="max-w-3xl mx-auto mb-20"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group p-10 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] hover:-translate-y-2 transition-all duration-700 rounded-none relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                                    <Icon size={28} className="text-secondary group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-500 uppercase tracking-widest leading-tight">
                                    {feature.title.split(' ').map((word, i) => (
                                        <span key={i} className={i === 1 ? "text-gradient-gold block" : "block"}>{word} </span>
                                    ))}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-slate-600 transition-colors duration-500">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
