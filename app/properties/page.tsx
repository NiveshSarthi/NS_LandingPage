import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { content } from '@/app/data/content';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Banknote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Properties | NiveshSarthi',
    description: 'Explore our premium collection of residential and commercial properties.',
};

export default function PropertiesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background/0">
                <div className="container px-4 md:px-6 text-center">
                    <SectionHeader
                        title="Premium Properties"
                        subtitle="Discover our handpicked selection of exclusive real estate opportunities."
                    />
                </div>
            </section>

            {/* Filter Section (Mock) */}
            <section className="pb-12">
                <div className="container px-4 md:px-6">
                    <div className="bg-card border shadow-sm rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <input type="text" placeholder="Search location..." className="border rounded-md px-3 py-2 text-sm bg-background w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary" />
                            <select className="border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                                <option>All Types</option>
                                <option>Residential</option>
                                <option>Commercial</option>
                                <option>Plots</option>
                            </select>
                        </div>
                        <Button className="w-full md:w-auto">Search Properties</Button>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="pb-24">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.properties.map((property) => (
                            <Card key={property.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="secondary" className="backdrop-blur-md bg-black/50 text-white border-none font-medium">
                                            {property.type}
                                        </Badge>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-primary text-primary-foreground font-semibold">
                                            {property.status}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader className="p-6">
                                    <h3 className="text-xl font-bold line-clamp-1 mb-2 group-hover:text-primary transition-colors">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin size={16} className="mr-1 flex-shrink-0" />
                                        <span className="line-clamp-1">{property.location}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="p-6 pt-0 flex-grow">
                                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
                                        <div className="flex items-center gap-2">
                                            <Banknote size={16} className="text-primary" />
                                            <span className="font-semibold text-foreground">{property.price}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Home size={16} className="text-primary" />
                                            <span>{property.specs.area}</span>
                                        </div>
                                        {property.specs.beds && (
                                            <div className="col-span-2 text-xs border-t pt-3 flex gap-3">
                                                <span>{property.specs.beds} Beds</span>
                                                <span>•</span>
                                                <span>{property.specs.baths} Baths</span>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>

                                <CardFooter className="p-6 pt-0 mt-auto">
                                    <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all" variant="outline">
                                        View Details <ArrowRight size={16} />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
