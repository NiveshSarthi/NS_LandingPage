'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export function Features() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="features" className="py-24 bg-background">
            <div className="container px-4 md:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block bg-accent/20 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">
                            Our Competitive <br />
                            <span className="text-primary">Advantage</span>
                        </h2>
                        <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
                            Conquer the market with unbeatable dominance in property. We combine expertise, technology, and personalized service to deliver exceptional results for every client.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {content.features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors border border-transparent hover:border-secondary/20">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Video/Image Area */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2673"
                                alt="Competitive Advantage"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 hover:bg-primary/10 transition-colors cursor-pointer flex items-center justify-center group">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform">
                                    <PlayCircle size={40} className="ml-1" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-10 -left-10 bg-secondary text-secondary-foreground p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                            <h3 className="text-5xl font-bold mb-2">15</h3>
                            <p className="font-bold text-xl leading-none">Years <br /> of Excellence</p>
                        </div>

                        {/* Satisfaction Card */}
                        <div className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 hidden md:flex animate-bounce duration-[3000ms]">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">100%</p>
                                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
