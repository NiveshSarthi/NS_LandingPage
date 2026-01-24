'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { content } from '@/app/data/content';
import { Input } from '@/components/ui/input';

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary opacity-90" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        {content.cta.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-blue-100"
                    >
                        {content.cta.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
                    >
                        <div className="flex w-full max-w-sm items-center space-x-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none text-white placeholder:text-blue-200 focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                            <Button variant="premium" className="whitespace-nowrap">
                                {content.cta.buttonText}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
