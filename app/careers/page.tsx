'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Briefcase, Rocket, UserPlus, Heart } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden flex items-center justify-center text-center bg-primary">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-pattern-circuit opacity-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670"
                        alt="Team working"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-secondary/10" />

                    {/* Decorative Vectors */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-none border border-secondary/30 bg-secondary/10 text-secondary font-bold uppercase tracking-widest text-[10px] mb-8">
                            <Rocket size={12} />
                            <span>We are hiring!</span>
                        </div>
                        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
                            Build the <span className="italic text-secondary font-serif">Future</span> <br /> of Real Estate
                        </h1>
                        <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Join a team of visionaries, creators, and achievers. At NiveshSarthi, we don't just sell properties; we fulfill dreams.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-10 h-14 font-bold uppercase tracking-[0.2em] text-xs shadow-2xl transition-transform hover:translate-y-[-2px]">
                                View Open Positions
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            {/* Culture/Benefits */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <SectionHeader title="Why Join Us?" subtitle="More than just a job, it's a calling to excellence." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.careers.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background group rounded-none overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    <CardContent className="p-8 text-center">
                                        <div className="w-16 h-16 mx-auto bg-slate-50 text-secondary border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">{benefit}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">We take care of our own with industry-leading perks and specialized growth plans.</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <SectionHeader title="Open Positions" subtitle="Find your perfect role." />
                        <Button variant="outline">Filter by Department</Button>
                    </div>

                    <div className="space-y-6">
                        {content.careers.positions.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-none border border-slate-100 bg-background p-8 hover:border-secondary/50 transition-all duration-500 shadow-sm hover:shadow-2xl gold-glow-hover"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="flex flex-col lg:flex-row items-baseline lg:items-center justify-between gap-6 relative z-10">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 bg-slate-50 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-inner shrink-0">
                                            <Briefcase size={24} className="text-secondary group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-300 tracking-wide">{job.title}</h4>
                                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-slate-500 mt-3 font-bold uppercase tracking-widest">
                                                <span className="flex items-center gap-2"><UserPlus size={14} className="text-secondary" /> {job.department}</span>
                                                <span className="hidden sm:inline text-slate-200">|</span>
                                                <span>{job.type}</span>
                                                <span className="hidden sm:inline text-slate-200">|</span>
                                                <span className="flex items-center gap-2 text-slate-500">📍 {job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full lg:w-auto lg:opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary hover:bg-secondary text-white rounded-none px-8 font-bold uppercase tracking-widest text-[10px] shadow-lg">
                                        Apply Now
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
