'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/Logo';
import { cn } from '@/lib/utils'; // Assuming cn is available here, if not I will check imports

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const links = [
        { href: '/', label: 'Home' },
        { href: '/properties', label: 'Properties' },
        { href: '/about', label: 'About' },
        { href: '/careers', label: 'Careers' },
        { href: '/contact', label: 'Contact' },
    ];

    const springTransition = {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
    };

    return (
        <React.Fragment>
            <motion.header
                layout
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    (isScrolled || pathname !== '/')
                        ? "bg-primary/95 backdrop-blur-lg border-b border-white/5 py-3 shadow-lg"
                        : "bg-transparent py-7"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-10">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-[13px] font-medium uppercase tracking-[0.15em] transition-all hover:text-secondary relative group",
                                        pathname === link.href ? "text-secondary" : "text-white/80"
                                    )}
                                >
                                    {link.label}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                                        pathname === link.href ? "w-full" : ""
                                    )} />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Section */}
                        <div className="hidden md:flex items-center">
                            <Link href="/contact">
                                <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 h-11 font-bold uppercase tracking-widest text-[10px] shadow-lg transition-transform hover:translate-y-[-2px]">
                                    Book Consult
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden text-white p-2">
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Button - Fixed bottom right or top right? Keeping simple for now, maybe add mobile overlay later if needed. 
                For now main requirement is desktop scroll behavior. 
            */}
        </React.Fragment>
    );
}
