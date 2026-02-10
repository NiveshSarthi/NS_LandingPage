'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';

export function ExpertAdvice() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-circuit opacity-10" />

            {/* Decorative Vectors */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
                className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float"
            />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left Side Info */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block border-l-4 border-secondary px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] bg-white/5 text-secondary mb-2"
                        >
                            GET IN TOUCH
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
                        >
                            Get Expert <span className="text-gradient-gold">Advice</span> <br />
                            <span className="italic font-serif font-light text-slate-400">From Our Team</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-300 leading-relaxed max-w-xl font-light"
                        >
                            Fill out the form and our team will get back to you within 24 hours to discuss your property needs and help you find the perfect investment.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                            {[
                                { icon: Phone, label: "Call Us", val: "+91 9560031319" },
                                { icon: Mail, label: "Email Us", val: "info@niveshsarthi.com" },
                                { icon: Clock, label: "Hours", val: "Tue - Sun: 9AM - 6PM" },
                                { icon: MapPin, label: "Location", val: "Faridabad, India" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="group flex items-center gap-6"
                                >
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-xl">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                                        <p className="text-sm font-bold uppercase tracking-wider group-hover:text-secondary transition-colors whitespace-nowrap">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white text-primary p-8 sm:p-12 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-t-[12px] border-secondary relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Request a <span className="text-secondary">Callback</span></h3>
                        <p className="text-slate-500 mb-12 text-sm font-light leading-relaxed">Your property journey starts with a simple conversation. Let us help you find the perfect match.</p>

                        <form className="space-y-10">
                            {[
                                { placeholder: "Your Name *", type: "text" },
                                { placeholder: "Your Email", type: "email" },
                                { placeholder: "Your Mobile *", type: "tel" }
                            ].map((input, i) => (
                                <div key={i} className="space-y-1 border-b border-slate-100 pb-3 group focus-within:border-secondary transition-colors">
                                    <Input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        className="border-none bg-transparent h-14 focus-visible:ring-0 px-0 text-xl font-medium placeholder:text-slate-200"
                                    />
                                </div>
                            ))}

                            <Button className="w-full h-18 text-xs font-bold uppercase tracking-[0.4em] bg-primary hover:bg-secondary text-white shadow-2xl transition-all hover:translate-y-[-4px] rounded-none group">
                                Submit Request <ArrowRight className="ml-6 w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                            </Button>
                        </form>
                        <p className="text-[10px] text-slate-400 mt-12 text-center uppercase tracking-[0.2em] font-bold">
                            Professionalism Guaranteed • Private & Confidential
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
