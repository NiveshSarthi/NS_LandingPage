'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { ChevronLeft, ChevronRight, Quote, Star, Users } from 'lucide-react';


export function Testimonials() {
    const [current, setCurrent] = React.useState(0);
    const length = content.testimonials.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section id="testimonials" className="py-24 bg-background overflow-hidden relative">
            <div className="absolute inset-0 bg-pattern-dots opacity-5" />

            {/* Decorative Vectors */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
                className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-float"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block border-l-4 border-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-primary/5 text-primary mb-8"
                        >
                            Trust & Excellence
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-primary leading-tight"
                        >
                            What Our <br />
                            <span className="text-gradient-gold">Happy Clients</span> Say!
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 leading-relaxed mb-12 font-light"
                        >
                            With over a decade of excellence in the NCR real estate market, we have successfully delivered value and smiles to hundreds of investors.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { val: "997+", label: "Happy Clients", accent: false },
                                { val: "1000+", label: "Properties Sold", accent: true },
                                { val: "15+", label: "Years Exp.", accent: false }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className={cn(
                                        "p-8 text-center bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                                        stat.accent ? "border-t-secondary border-t-4" : ""
                                    )}
                                >
                                    <h4 className="text-3xl font-serif font-medium text-primary mb-2 whitespace-nowrap">{stat.val}</h4>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white p-6 sm:p-10 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden border border-slate-50">
                            <Quote size={80} className="text-secondary/10 absolute top-6 right-6 sm:top-10 sm:right-10" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8"
                                >
                                    <div className="flex gap-1 text-secondary">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-2xl md:text-3xl text-primary font-serif font-medium italic leading-relaxed">
                                        &quot;{content.testimonials[current].quote}&quot;
                                    </p>

                                    <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                                        <div className="relative w-16 h-16 grayscale hover:grayscale-0 transition-all duration-500">
                                            <Image
                                                src={content.testimonials[current].avatar}
                                                alt={content.testimonials[current].name}
                                                fill
                                                className="object-cover border-2 border-secondary p-1"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primary">{content.testimonials[current].name}</h4>
                                            <p className="text-secondary text-xs uppercase tracking-widest font-bold mt-1">{content.testimonials[current].role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-end gap-4 mt-6">
                            <Button variant="outline" onClick={prevSlide} className="rounded-full w-12 h-12 p-0 bg-white hover:bg-primary hover:text-white transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </Button>
                            <Button variant="default" onClick={nextSlide} className="rounded-full w-12 h-12 p-0 bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <ChevronRight size={20} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
