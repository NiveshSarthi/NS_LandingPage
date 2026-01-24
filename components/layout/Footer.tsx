import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { content } from '@/app/data/content';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-1 space-y-4">
                        <Logo className="invert brightness-200" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {content.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {content.footer.socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {content.footer.links.map((group) => (
                        <div key={group.title} className="md:col-span-1">
                            <h4 className="font-semibold mb-4 text-white">{group.title}</h4>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} NiveshSarthi. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
