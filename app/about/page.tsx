'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Heart, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* High Impact Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-pattern-dots opacity-20" />
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670"
                        alt="Modern Architecture"
                        fill
                        className="object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />

                    {/* Decorative Vectors */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/3 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-none border border-secondary/30 bg-secondary/10 text-secondary font-bold uppercase tracking-widest text-[10px] mb-8">
                            <ShieldCheck size={12} />
                            <span>Legacy of Trust Since 2011</span>
                        </div>
                        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
                            Redefining the <span className="italic text-secondary font-serif">Aura</span> <br /> of Real Estate
                        </h1>
                        <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            We go beyond traditional brokerage. As your strategic partner, we empower you with data-driven insights and curated opportunities to build lasting wealth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10 pt-12">
                            {[
                                { val: "15+", label: "Years Experience" },
                                { val: "1k+", label: "Happy Families" },
                                { val: "₹500Cr+", label: "Assets Managed" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="text-center"
                                >
                                    <p className="text-4xl font-bold text-secondary mb-2">{stat.val}</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision - Creative Grid */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                            <CardContent className="p-12 relative flex flex-col justify-center h-full">
                                <Target size={48} className="mb-6 text-white/80" />
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                                    {content.company.mission}
                                </p>
                            </CardContent>
                        </Card>

                        <div className="grid grid-rows-2 gap-8">
                            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-secondary/20">
                                <CardContent className="p-8 flex items-start gap-4">
                                    <div className="bg-background p-3 rounded-xl shadow-sm">
                                        <Lightbulb size={24} className="text-secondary-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                                        <p className="text-muted-foreground">{content.company.vision}</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-8 flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-xl shadow-sm text-primary">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Our Promise</h3>
                                        <p className="text-muted-foreground">To deliver transparency, trust, and excellence in every interaction, ensuring your peace of mind.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Horizontal Cards */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <SectionHeader title="Our Core Values" subtitle="The pillars that hold up our legacy of trust." />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Integrity", desc: "Honesty is our only policy." },
                            { icon: Users, title: "Customer Centric", desc: "You are the center of our universe." },
                            { icon: TrendingUp, title: "Innovation", desc: "Always staying ahead of the curve." },
                            { icon: Target, title: "Excellence", desc: "We don't settle for good. We aim for best." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group cursor-default hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center mb-4 text-foreground">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-secondary font-bold mb-4 tracking-[0.3em] text-[10px] uppercase">Our Team</p>
                        <SectionHeader title="Meet the Experts" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {content.team.map((member, idx) => (
                            <div key={idx} className="bg-background rounded-none p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-50 group">
                                <div className="relative w-32 h-32 mx-auto mb-8">
                                    <div className="absolute inset-0 border border-secondary/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
                                        <Image
                                            src={member.avatar}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">{member.name}</h4>
                                <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
