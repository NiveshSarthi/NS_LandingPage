'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { ChevronLeft, ChevronRight, Quote, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
        <section id="testimonials" className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            Client Testimonials
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            What Our <br />
                            <span className="text-primary">Happy Clients Say!</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            With over a decade of experience, we have successfully delivered smiles with highest ROI at lowest investment.
                        </p>

                        <div className="flex gap-4">
                            <Card className="flex-1 border-none shadow-md bg-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary">
                                        <Users size={24} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-foreground">997+</h4>
                                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                                </CardContent>
                            </Card>
                            <Card className="flex-1 border-none shadow-md bg-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary">
                                        <Star size={24} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-foreground">1000+</h4>
                                    <p className="text-sm text-muted-foreground">Properties Sold</p>
                                </CardContent>
                            </Card>
                            <Card className="flex-1 border-none shadow-md bg-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary">
                                        <Quote size={24} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-foreground">15+</h4>
                                    <p className="text-sm text-muted-foreground">Years Experience</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right Carousel */}
                    <div className="relative">
                        <Card className="border-none shadow-xl bg-white relative overflow-hidden h-[400px] flex items-center">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Quote size={120} className="text-primary transform -scale-x-100" />
                            </div>

                            <CardContent className="p-8 md:p-12 relative z-10 w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex gap-1 text-secondary">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={20} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
                                            &quot;{content.testimonials[current].quote}&quot;
                                        </p>

                                        <div className="flex items-center gap-4 pt-4">
                                            <div className="relative w-14 h-14">
                                                <Image
                                                    src={content.testimonials[current].avatar}
                                                    alt={content.testimonials[current].name}
                                                    fill
                                                    className="rounded-full object-cover border-2 border-primary"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-foreground">{content.testimonials[current].name}</h4>
                                                <p className="text-primary text-sm font-medium">{content.testimonials[current].role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </CardContent>
                        </Card>

                        {/* Controls */}
                        <div className="flex justify-end gap-4 mt-6">
                            <Button variant="outline" onClick={prevSlide} className="rounded-full w-12 h-12 p-0 bg-white hover:bg-primary hover:text-white transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </Button>
                            <Button variant="default" onClick={nextSlide} className="rounded-full w-12 h-12 p-0 bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <ChevronRight size={20} />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
