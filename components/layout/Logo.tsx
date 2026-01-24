import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`block relative ${className}`}>
            <div className="relative h-20 w-64 md:h-24 md:w-72">
                <Image
                    src="/SNS.png"
                    alt="NiveshSarthi Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </Link>
    );
}
