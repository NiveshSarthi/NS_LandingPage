import { LucideIcon, BarChart3, ShieldCheck, Zap, Users, Globe, Smartphone, TrendingUp, BookOpen, Clock, Building, Home, Briefcase, Award } from 'lucide-react';

export const content = {
    hero: {
        title: "Discover the Pinnacle of Property in Every Segment",
        highlight: "Explore Properties",
        subtitle: "Experience the best-in-class properties, where every detail is meticulously crafted to exceed your expectations.",
        cta: "Explore Now",
        secondaryCta: "Contact Us",
        images: [
            "/hero-bg.jpg",
            "/hero-bg-2.jpg",
            "/hero-bg-3.jpg",
            "/hero-bg-4.jpg",
            "/hero-bg-5.jpg"
        ],
        stats: [
            { label: "Happy Clients", value: "997+" },
            { label: "Properties Sold", value: "1000+" },
            { label: "Years Experience", value: "15+" },
        ]
    },
    features: [
        {
            title: "Expertise & Experience",
            description: "15+ years in real estate ensuring you get the best advice.",
            icon: Award
        },
        {
            title: "Wide Range of Properties",
            description: "1000+ listings across Residential, Commercial, and Industrial segments.",
            icon: Building
        },
        {
            title: "Market Knowledge",
            description: "Best price guarantee based on deep market analysis.",
            icon: TrendingUp
        },
        {
            title: "Client-Centric Approach",
            description: "Your needs come first. We customize our search for you.",
            icon: Users
        },
        {
            title: "Technology Driven",
            description: "Smart property solutions and virtual tours.",
            icon: Zap
        },
        {
            title: "Strong Network",
            description: "Industry connections that get you exclusive deals.",
            icon: Globe
        },
        {
            title: "Transparent Process",
            description: "No hidden charges, full transparency in every deal.",
            icon: ShieldCheck
        },
        {
            title: "Legal Verified",
            description: "100% safe deals with complete legal due diligence.",
            icon: BookOpen
        }
    ],
    testimonials: [
        {
            name: "Monica Goel",
            role: "Happy Client",
            quote: "The team at Nivesh Sarthi went above and beyond to find us the perfect commercial space for our business. Their dedication and commitment to our needs were truly remarkable.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            rating: 5
        },
        {
            name: "Rahul Sharma",
            role: "Home Owner",
            quote: "Buying my first home was seamless with them. They handled everything from documentation to handing over the keys.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            rating: 5
        },
        {
            name: "Amit Patel",
            role: "Investor",
            quote: "Professionalism at its best. My ROI has significantly increased after their advisory.",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            rating: 5
        }
    ],
    properties: [
        {
            id: 1,
            title: "Luxury Villa in Gurgaon",
            location: "DLF Phase 5, Gurgaon",
            price: "₹2.5 Cr",
            type: "Residential",
            status: "Featured",
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2670",
            specs: { area: "3500 sq.ft", beds: 4, baths: 4 }
        },
        {
            id: 2,
            title: "Modern Apartment",
            location: "Sector 128, Noida",
            price: "₹95 Lac",
            type: "Residential",
            status: "Featured",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2670",
            specs: { area: "1800 sq.ft", beds: 3, baths: 2 }
        },
        {
            id: 3,
            title: "Premium Office Space",
            location: "Cyber City, Gurgaon",
            price: "₹1.2 Cr",
            type: "Commercial",
            status: "For Lease",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2669",
            specs: { area: "2000 sq.ft" }
        },
        {
            id: 4,
            title: "Penthouse with View",
            location: "Golf Course Road, Gurgaon",
            price: "₹4.5 Cr",
            type: "Residential",
            status: "Featured",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2670",
            specs: { area: "4500 sq.ft", beds: 5, baths: 5 }
        },
        {
            id: 5,
            title: "Residential Plot",
            location: "Sector 150, Noida",
            price: "₹80 Lac",
            type: "Plot",
            status: "Featured",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2832",
            specs: { area: "200 sq.yds" }
        }
    ],
    careers: {
        title: "Join Our Team",
        subtitle: "Build your future with NiveshSarthi",
        benefits: ["Competitive Salary", "Health Insurance", "Performance Bonuses", "Professional Development"],
        positions: [
            { title: "Sales Executive", type: "Full-time", location: "Faridabad", department: "Sales" },
            { title: "SEO Expert", type: "Full-time", location: "Remote/Hybrid", department: "Marketing" },
            { title: "HR Executive", type: "Full-time", location: "Faridabad", department: "Human Resources" },
            { title: "Administrator", type: "Full-time", location: "Faridabad", department: "Operations" },
        ]
    },
    company: {
        story: "Founded with a vision to transparency in real estate, NiveshSarthi has grown from a small consultancy to a trusted name in the NCR region.",
        mission: "To empower every Indian to own their dream property with confidence and ease.",
        vision: "To be the most customer-centric real estate platform in India."
    },
    cta: {
        title: "Request a Callback",
        subtitle: "Fill in your details and we'll call you back within 24 hours.",
        buttonText: "Request Callback"
    },
    contact: {
        phone: "+91 - 9560031319",
        email: "info.niveshsarthi@gmail.com",
        address: "628~630, 6th Floor, Puri 81 Business Hub, Sector 81, Faridabad"
    },
    team: [
        {
            name: "Rahul Kushwaha",
            role: "Founder & CEO",
            initials: "RK",
            color: "bg-purple-100 text-purple-600"
        },
        {
            name: "Rakesh Kushwaha",
            role: "Co-Founder",
            initials: "RK",
            color: "bg-pink-100 text-pink-600"
        },
        {
            name: "Satpal Sorout",
            role: "Co-Founder & IT HEAD",
            initials: "SS",
            color: "bg-violet-100 text-violet-600"
        }
    ],
    footer: {
        description: "Your trusted partner in Real Estate journey. We turn dreams into realty.",
        links: [
            {
                title: "Properties",
                items: ["Residential", "Commercial", "Industrial", "Plots"]
            },
            {
                title: "Company",
                items: ["About Us", "Careers", "Contact", "Blog"]
            },
            {
                title: "Legal",
                items: ["Privacy Policy", "Terms of Service", "RERA Compliance"]
            }
        ],
        socials: [
            { name: "LinkedIn", href: "https://www.linkedin.com/company/nivesh-sarthi/?originalSubdomain=in" },
            { name: "Instagram", href: "https://www.instagram.com/syndicate_niveshsarthi/" },
            { name: "Facebook", href: "https://www.facebook.com/niveshsarthi10x/" },
            { name: "Twitter", href: "#" }
        ]
    }
};
