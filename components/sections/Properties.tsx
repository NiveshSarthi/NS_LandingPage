'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { ArrowUpRight, Bed, Bath, Move } from 'lucide-react';
import Image from 'next/image';

export function Properties() {
    return (
        <section className="py-24 bg-secondary/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid opacity-20" />

            {/* Decorative Vectors */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <SectionHeader
                        title="Premium Properties For Sale & Lease"
                        subtitle="Handpicked properties that offer the best value and location advantages."
                        align="left"
                        className="mb-0"
                    />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block"
                    >
                        <Button variant="premium" className="bg-primary text-white rounded-none px-10 h-14 font-bold uppercase tracking-widest text-[11px] shadow-lg gold-glow-hover transition-all">
                            View All Properties
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-700 group bg-white rounded-none relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
                                            {property.type}
                                        </span>
                                        <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
                                            {property.status}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <div className="bg-white/95 backdrop-blur-sm text-primary font-bold px-6 py-2 shadow-xl text-xl border-l-4 border-secondary">
                                            {property.price}
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">{property.title}</h3>
                                    <p className="text-slate-500 mb-6 flex items-center gap-2 text-sm font-light">
                                        <span className="w-1 h-1 rounded-full bg-secondary" />
                                        {property.location}
                                    </p>

                                    <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-widest border-y border-slate-100 py-6 mb-8 font-bold">
                                        {property.specs.area && (
                                            <div className="flex items-center gap-2">
                                                <Move size={14} className="text-secondary" /> {property.specs.area}
                                            </div>
                                        )}
                                        {property.specs.beds && (
                                            <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
                                                <Bed size={14} className="text-secondary" /> {property.specs.beds} Beds
                                            </div>
                                        )}
                                        {property.specs.baths && (
                                            <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
                                                <Bath size={14} className="text-secondary" /> {property.specs.baths} Baths
                                            </div>
                                        )}
                                    </div>

                                    <Button className="w-full bg-transparent border border-slate-200 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-none h-12 text-xs font-bold uppercase tracking-widest" variant="outline">
                                        View Details <ArrowUpRight size={14} className="ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="premium" className="bg-primary text-white rounded-full w-full">
                        View All Properties
                    </Button>
                </div>
            </div>
        </section>
    );
}
