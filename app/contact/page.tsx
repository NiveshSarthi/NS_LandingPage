'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Contact Form */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                                <p className="text-muted-foreground">Fill in the form below and our team will get back to you.</p>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                                </div>
                                <Button className="w-full h-12 text-lg gap-2">
                                    Send Message <Send size={18} />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                                <p className="text-muted-foreground">Visit our office or reach out to us directly.</p>
                            </div>

                            <div className="grid gap-6">
                                <Card>
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Our Office</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {content.contact.address}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Phone</h4>
                                            <p className="text-sm text-muted-foreground">{content.contact.phone}</p>
                                            <p className="text-xs text-muted-foreground mt-1">Mon-Sat from 9am to 6pm</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Email</h4>
                                            <p className="text-sm text-muted-foreground">{content.contact.email}</p>
                                            <p className="text-xs text-muted-foreground mt-1">Expected response: 24 hours</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-muted rounded-xl h-64 w-full flex items-center justify-center text-muted-foreground border">
                                <p>Map Integration Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
