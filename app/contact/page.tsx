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
import { motion } from 'framer-motion';


export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-10" />

                {/* Decorative Vectors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-float"
                />

                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    >
                        Get in <span className="text-secondary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light"
                    >
                        Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-4xl font-bold mb-4 tracking-tight">Send us a <span className="text-secondary">Message</span></h3>
                                <p className="text-slate-500 text-lg font-light leading-relaxed">Fill in the form below and our dedicated team will get back to you within 24 hours.</p>
                            </div>
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div className="space-y-1 border-b border-slate-100 pb-3 focus-within:border-secondary transition-colors">
                                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</label>
                                        <Input id="name" placeholder="John Doe" className="border-none bg-transparent h-12 focus-visible:ring-0 px-0 text-lg font-medium placeholder:text-slate-200" />
                                    </div>
                                    <div className="space-y-1 border-b border-slate-100 pb-3 focus-within:border-secondary transition-colors">
                                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address *</label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="border-none bg-transparent h-12 focus-visible:ring-0 px-0 text-lg font-medium placeholder:text-slate-200" />
                                    </div>
                                </div>
                                <div className="space-y-1 border-b border-slate-100 pb-3 focus-within:border-secondary transition-colors">
                                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Number *</label>
                                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="border-none bg-transparent h-12 focus-visible:ring-0 px-0 text-lg font-medium placeholder:text-slate-200" />
                                </div>
                                <div className="space-y-1 border-b border-slate-100 pb-3 focus-within:border-secondary transition-colors">
                                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                                    <Textarea id="message" placeholder="How can we help you achieve your goals?" className="min-h-[150px] border-none bg-transparent focus-visible:ring-0 px-0 text-lg font-medium placeholder:text-slate-200 resize-none" />
                                </div>
                                <Button className="w-full h-18 text-xs font-bold uppercase tracking-[0.4em] bg-primary hover:bg-secondary text-white shadow-2xl transition-all hover:translate-y-[-4px] rounded-none group">
                                    Send Message <Send size={18} className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info & Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-4xl font-bold mb-4 tracking-tight">Contact <span className="text-secondary">Details</span></h3>
                                <p className="text-slate-500 text-lg font-light leading-relaxed">Visit our luxury business hub or reach out to us directly via phone or email.</p>
                            </div>

                            <div className="grid gap-6">
                                {[
                                    { icon: MapPin, title: "Our Office", val: content.contact.address, subtitle: null },
                                    { icon: Phone, title: "Phone", val: content.contact.phone, subtitle: "Tue-Sun: 9am - 6pm", link: `tel:${content.contact.phone.replace(/\s+/g, '')}` },
                                    { icon: Mail, title: "Email", val: content.contact.email, subtitle: "Response: within 24 hours", link: `mailto:${content.contact.email}` }
                                ].map((item, i) => (
                                    <Card key={i} className="rounded-none border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-700 group cursor-default">
                                        <CardContent className="p-6 md:p-8 flex items-center gap-4 md:gap-8">
                                            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.title}</h4>
                                                {item.link ? (
                                                    <a href={item.link} className="text-lg font-bold hover:text-secondary transition-colors uppercase tracking-tight">{item.val}</a>
                                                ) : (
                                                    <p className="text-lg font-bold uppercase tracking-tight">{item.val}</p>
                                                )}
                                                {item.subtitle && <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">{item.subtitle}</p>}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Map Integration */}
                            <div className="bg-slate-50 rounded-none h-80 w-full overflow-hidden border border-slate-100 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.871148557102!2d77.3401548!3d28.392959499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd1ebc130233%3A0xb86d2aa9b527df59!2sPuri%20Business%20Hub%2C%20A%20209%2C%20Sector%2081%2C%20Faridabad%2C%20Haryana%20121007!5e0!3m2!1sen!2sin!4v1769238530936!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
