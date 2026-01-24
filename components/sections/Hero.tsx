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
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm text-white mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-secondary mr-2" />
                    {content.hero.highlight}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6 shadow-sm"
                >
                    {content.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-light"
                >
                    {content.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 text-lg rounded-full">
                        {content.hero.cta} <ArrowRight size={16} />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary gap-2 h-12 px-8 text-lg rounded-full backdrop-blur-sm">
                        {content.hero.secondaryCta}
                    </Button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-white/20 pt-8 w-full max-w-4xl"
                >
                    {content.hero.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                            <span className="text-sm text-gray-300 uppercase tracking-wider font-medium">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
