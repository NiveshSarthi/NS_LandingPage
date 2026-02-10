'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { content } from '@/app/data/content';
import { Input } from '@/components/ui/input';
import { sendEmail } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function CTA() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('loading');

        const formData = new FormData(event.currentTarget);
        formData.append('formType', 'Callback Request (Estate)');
        formData.append('name', 'Interested Investor');

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
            (event.target as HTMLFormElement).reset();
        } else {
            setStatus('error');
        }
    }

    return (
        <section className="py-32 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-pattern-grid opacity-10" />

            {/* Decorative Vectors */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-float"
                style={{ animationDelay: '3s' }}
            />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                            Ready to Claim Your <br />
                            <span className="text-gradient-gold">Private Estate?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Join our exclusive list of elite investors and receive curated opportunities before they hit the open market.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center bg-white/5 p-2 border border-white/10 backdrop-blur-xl group focus-within:border-secondary transition-all">
                            <Input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="bg-transparent border-none text-white h-16 px-6 text-lg placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow"
                            />
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-secondary hover:bg-white hover:text-primary text-white h-16 px-10 rounded-none font-bold uppercase tracking-widest text-xs transition-all shadow-2xl"
                                >
                                    {status === 'loading' ? <Loader2 className="animate-spin" /> : content.cta.buttonText}
                                </Button>
                            </motion.div>
                        </form>
                        {status === 'success' && (
                            <p className="text-green-500 text-sm font-medium">Thank you! You've been added to our list.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
