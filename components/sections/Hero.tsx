'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { content } from '@/app/data/content';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % content.hero.images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
            {/* Background Image Carousel with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-pattern-grid opacity-20 z-10" />
                <AnimatePresence>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={content.hero.images[currentImage]}
                            alt="Hero Background"
                            fill
                            className="object-cover"
                            priority
                            quality={90}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Decorative Vectors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-float z-10"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-none border-l-4 border-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white/5 backdrop-blur-sm text-white mb-8 relative group"
                >
                    <motion.div
                        className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                    />
                    <span className="relative z-10">{content.hero.highlight}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white max-w-5xl mb-8 shadow-sm leading-[1.1]"
                >
                    {content.hero.title.split(' ').map((word, i) => (
                        <span key={i} className={i === 2 ? "text-gradient-gold" : ""}>{word} </span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light"
                >
                    {content.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-3 h-14 px-10 text-sm font-bold uppercase tracking-widest rounded-none transition-all hover:translate-y-[-2px]">
                        {content.hero.cta} <ArrowRight size={18} />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary gap-3 h-14 px-10 text-sm font-bold uppercase tracking-widest rounded-none backdrop-blur-sm transition-all hover:translate-y-[-2px]">
                        {content.hero.secondaryCta}
                    </Button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 border-t border-white/10 pt-12 w-full max-w-5xl"
                >
                    {content.hero.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start">
                            <span className="text-4xl md:text-5xl font-serif font-medium text-secondary mb-2">{stat.value}</span>
                            <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.3em] font-bold">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
