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
        <section className="py-24 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <SectionHeader
                        title="Premium Properties For Sale & Lease"
                        subtitle="Handpicked properties that offer the best value and location advantages."
                        align="left"
                        className="mb-0"
                    />
                    <Button variant="premium" className="hidden md:flex bg-primary text-white rounded-full">
                        View All Properties
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {property.type}
                                        </span>
                                        <span className="bg-primary/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {property.status}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-white text-primary font-bold px-4 py-2 rounded-lg shadow-sm text-lg">
                                            {property.price}
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{property.title}</h3>
                                    <p className="text-muted-foreground mb-4 flex items-center gap-1 text-sm">
                                        <span className="inline-block w-4 h-4 rounded-full bg-secondary/50" />
                                        {property.location}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4 mb-4">
                                        {property.specs.area && (
                                            <div className="flex items-center gap-1">
                                                <Move size={16} /> {property.specs.area}
                                            </div>
                                        )}
                                        {property.specs.beds && (
                                            <div className="flex items-center gap-1">
                                                <Bed size={16} /> {property.specs.beds} Beds
                                            </div>
                                        )}
                                        {property.specs.baths && (
                                            <div className="flex items-center gap-1">
                                                <Bath size={16} /> {property.specs.baths} Baths
                                            </div>
                                        )}
                                    </div>

                                    <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" variant="ghost">
                                        View Details <ArrowUpRight size={16} className="ml-2" />
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
