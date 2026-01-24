'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Briefcase, Rocket, UserPlus, Heart } from 'lucide-react';
import Image from 'next/image';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670"
                        alt="Team working"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                </div>

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                        <Rocket size={16} />
                        <span>We are hiring!</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                        Build the Future of <br /> <span className="text-primary">Real Estate</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Join a team of visionaries, creators, and achievers. At NiveshSarthi, we don't just sell properties; we fulfill dreams.
                    </p>
                    <Button size="lg" className="rounded-full px-8 h-12 text-lg">
                        View Open Positions
                    </Button>
                </div>
            </section>

            {/* Culture/Benefits */}
            <section className="py-24 bg-secondary/5">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <SectionHeader title="Why Join Us?" subtitle="More than just a job, it's a calling to excellence." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.careers.benefits.map((benefit, index) => (
                            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-background">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{benefit}</h4>
                                    <p className="text-sm text-muted-foreground">We take care of our own with industry-leading perks.</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <SectionHeader title="Open Positions" subtitle="Find your perfect role." />
                        <Button variant="outline">Filter by Department</Button>
                    </div>

                    <div className="space-y-4">
                        {content.careers.positions.map((job, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl group-hover:text-primary transition-colors">{job.title}</h4>
                                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mt-2">
                                                <span className="flex items-center gap-1"><UserPlus size={14} /> {job.department}</span>
                                                <span>•</span>
                                                <span>{job.type}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="md:opacity-0 group-hover:opacity-100 transition-opacity">Apply Now</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
