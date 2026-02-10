import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { content } from '@/app/data/content';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1 space-y-6">
                        <Logo />
                        <p className="text-sm text-slate-400 leading-relaxed font-light">
                            {content.footer.description}
                        </p>
                        <div className="flex gap-4 text-slate-400">
                            <a href="https://www.linkedin.com/company/nivesh-sarthi/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/syndicate_niveshsarthi/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/niveshsarthi10x/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.493 4.372-4.493 1.242 0 2.311.092 2.622.134v3.038l-1.797.001c-1.412 0-1.687.671-1.687 1.657v2.174h3.363l-.438 3.403h-2.925v8.74h6.028c.732 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                        </div>
                    </div>

                    {content.footer.links.map((group) => (
                        <div key={group.title} className="md:col-span-1">
                            <h4 className="font-serif text-lg font-medium mb-6 text-white">{group.title}</h4>
                            <ul className="space-y-4">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={(item === 'About Us' || item === 'Careers' || item === 'Contact') ? `/${item.toLowerCase().split(' ')[0]}` : '#'}
                                            className="text-sm text-slate-400 hover:text-secondary transition-colors inline-block group flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
                    <p className="font-light">&copy; {new Date().getFullYear()} NiveshSarthi. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
