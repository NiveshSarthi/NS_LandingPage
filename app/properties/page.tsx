'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { content } from '@/app/data/content';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Banknote, ArrowRight, ShieldCheck, Search, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PropertiesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* High Impact Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-pattern-grid opacity-20" />
                    <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2670"
                        alt="High-end Real Estate"
                        fill
                        className="object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-background" />

                    {/* Decorative Vectors */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-float"
                        style={{ animationDelay: '2s' }}
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-none border border-secondary/30 bg-secondary/10 text-secondary font-bold uppercase tracking-widest text-[10px] mb-8 relative overflow-hidden group">
                            <motion.div
                                className="absolute inset-0 bg-secondary/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                            />
                            <ShieldCheck size={12} className="relative z-10" />
                            <span className="relative z-10">Verified Listings Only</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
                            Exclusive <span className="text-gradient-gold">Estates</span>
                        </h1>
                        <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Discover our handpicked selection of premium residential and commercial opportunities across India's most prestigious locations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Premium Filter Section */}
            <section className="relative -mt-16 z-20 pb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-2 items-center border border-slate-100"
                    >
                        <div className="relative flex-grow w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by location or project..."
                                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border-none focus:ring-0 text-sm font-medium placeholder:text-slate-400"
                            />
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Button variant="outline" className="h-14 px-6 border-slate-200 text-slate-600 gap-2 font-bold uppercase tracking-widest text-[10px] rounded-none flex-grow md:flex-grow-0 hover:bg-slate-50 transition-colors">
                                <SlidersHorizontal size={16} /> Filters
                            </Button>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-grow md:flex-grow-0"
                            >
                                <Button className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-[11px] rounded-none w-full gold-glow-hover transition-all">
                                    Search Properties
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {content.properties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card className="group overflow-hidden border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-700 flex flex-col h-full bg-white rounded-none relative">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                                            <Badge className="bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em] rounded-none border-none shadow-lg">
                                                {property.type}
                                            </Badge>
                                            <Badge className="bg-secondary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em] rounded-none border-none shadow-lg">
                                                {property.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-8 pb-4 relative z-10">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-500">
                                            {property.title}
                                        </h3>
                                        <div className="flex items-center text-slate-500 text-sm font-light mb-6">
                                            <MapPin size={14} className="mr-2 text-secondary" />
                                            <span>{property.location}</span>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-widest border-y border-slate-100 py-6 font-bold mb-6">
                                            <div className="flex items-center gap-2">
                                                <Banknote size={14} className="text-secondary" /> {property.price}
                                            </div>
                                            <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
                                                <Home size={14} className="text-secondary" /> {property.specs.area}
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="p-8 pt-0 mt-auto">
                                        <Button className="w-full bg-transparent border border-slate-200 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-none h-14 text-xs font-bold uppercase tracking-widest" variant="outline">
                                            View Details <ArrowRight size={14} className="ml-2" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
