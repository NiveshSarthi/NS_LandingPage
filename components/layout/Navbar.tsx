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
                transition={springTransition}
                className={cn(
                    "fixed z-50",
                    isScrolled
                        ? "top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-lg py-1.5 px-6"
                        : "top-0 left-0 right-0 w-full bg-transparent py-6"
                )}
            >
                <motion.div
                    layout
                    transition={springTransition}
                    className={cn(
                        "flex items-center w-full",
                        isScrolled ? "justify-between" : "justify-center"
                    )}
                >
                    {/* Logo Section */}
                    <motion.div
                        layout
                        transition={springTransition}
                        className={cn(
                            "relative flex-shrink-0",
                            isScrolled ? "scale-70 origin-left" : "scale-110"
                        )}
                    >
                        <Logo />
                    </motion.div>

                    {/* Desktop Navigation - Only visible when scrolled */}
                    <AnimatePresence>
                        {isScrolled && (
                            <motion.nav
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="hidden md:flex items-center gap-6"
                            >
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-yellow-400",
                                            pathname === link.href ? "text-yellow-400" : "text-white/90"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 font-semibold">
                                    Book Consult
                                </Button>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.header>

            {/* Mobile Menu Button - Fixed bottom right or top right? Keeping simple for now, maybe add mobile overlay later if needed. 
                For now main requirement is desktop scroll behavior. 
            */}
        </React.Fragment>
    );
}
