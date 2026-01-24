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

            {/* Hero Section - Split Layout */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 rounded-l-full hidden lg:block" />

                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
                                About NiveshSarthi
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                                Redefining <br />
                                <span className="text-primary relative inline-block">
                                    Real Estate
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                We go beyond traditional brokerage. As your strategic partner, we empower you with data-driven insights and curated opportunities to build lasting wealth through real estate.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 border-t pt-8">
                                <div>
                                    <p className="text-3xl font-bold text-foreground">15+</p>
                                    <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-foreground">1k+</p>
                                    <p className="text-sm text-muted-foreground mt-1">Happy Familes</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-foreground">₹500Cr+</p>
                                    <p className="text-sm text-muted-foreground mt-1">Assets Managed</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                                    alt="Modern Building"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating decorative element */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Creative Grid */}
            <section className="py-24 bg-card">
                <div className="container px-4 md:px-6">
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
                <div className="container px-4 md:px-6">
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
                            <div key={idx} className="bg-background border rounded-2xl p-6 hover:border-primary/50 transition-colors group cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center mb-4 text-foreground">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-secondary/5">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-secondary-foreground font-semibold mb-2 tracking-widest text-xs uppercase">Our Team</p>
                        <SectionHeader title="Meet the Experts" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {content.team.map((member, idx) => (
                            <div key={idx} className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className={`w-24 h-24 mx-auto ${member.color} rounded-full flex items-center justify-center text-3xl font-bold mb-6`}>
                                    {member.initials}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
