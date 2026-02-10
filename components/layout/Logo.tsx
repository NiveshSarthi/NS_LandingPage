import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`block relative ${className}`}>
            <div className="relative h-32 w-80 md:h-40 md:w-96">
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
