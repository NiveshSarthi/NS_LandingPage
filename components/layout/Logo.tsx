import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`block relative ${className}`}>
            <div className="relative h-16 w-56 md:h-20 md:w-64">
                <Image
                    src="/logo.png"
                    alt="NiveshSarthi Logo"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </Link>
    );
}
