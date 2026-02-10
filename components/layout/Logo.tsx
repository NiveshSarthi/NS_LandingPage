import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`block relative ${className}`}>
            <div className="relative h-12 w-40 md:h-14 md:w-48">
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
