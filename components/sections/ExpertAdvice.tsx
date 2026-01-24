'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';

export function ExpertAdvice() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side Info */}
                    <div className="space-y-8">
                        <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm font-medium border border-white/20">
                            GET IN TOUCH
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Get Expert Advice From Our Experienced Team
                        </h2>
                        <p className="text-lg text-blue-100/90 leading-relaxed max-w-xl">
                            Fill out the form and our team will get back to you within 24 hours to discuss your property needs and help you find the perfect investment.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-200 uppercase">Call Us</p>
                                    <p className="font-bold text-lg">+91 9560031319</p>
                                </div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-200 uppercase">Email Us</p>
                                    <p className="font-bold text-lg">info@niveshsarthi.com</p>
                                </div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-200 uppercase">Working Hours</p>
                                    <p className="font-bold">Mon - Sat: 9AM - 7PM</p>
                                </div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-lg text-secondary-foreground">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-200 uppercase">Location</p>
                                    <p className="font-bold">Faridabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white text-foreground p-8 md:p-10 rounded-2xl shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-2">Request a Callback</h3>
                        <p className="text-muted-foreground mb-8 text-sm">Fill in your details and we&apos;ll call you back</p>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Input placeholder="Your Name *" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <Input placeholder="Your Email" type="email" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <Input placeholder="Your Mobile *" type="tel" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                            </div>

                            <Button className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 text-white shadow-lg transition-transform active:scale-95">
                                Request Callback <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            By submitting, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
