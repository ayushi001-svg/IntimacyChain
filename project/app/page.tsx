"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LockIcon,
  Users2Icon,
  CalendarIcon,
  ShieldIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const experts = [
    {
      name: "Dr. Sarah Mitchell",
      specialization: "Gynecologist",
      experience: "15+ years",
      availability: "Mon-Fri",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. James Wilson",
      specialization: "Urologist",
      experience: "12+ years",
      availability: "Tue-Sat",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. Emily Chen",
      specialization: "Sexual Health Therapist",
      experience: "10+ years",
      availability: "Mon-Thu",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    },
  ];

  const features = [
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: "Private & Secure",
      description: "End-to-end encryption for all consultations",
    },
    {
      icon: <Users2Icon className="h-6 w-6" />,
      title: "Expert Professionals",
      description: "Verified healthcare specialists",
    },
    {
      icon: <CalendarIcon className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Book appointments at your convenience",
    },
    {
      icon: <HeartIcon className="h-6 w-6" />,
      title: "Comprehensive Care",
      description: "Holistic sexual health support",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Your Sexual Health Matters
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Private, secure, and professional consultations powered by blockchain technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg h-12" asChild>
                <Link href="/experts">
                  Find an Expert
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-12" asChild>
                <Link href="/auth">Connect Wallet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose IntimacyChain?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a secure and confidential platform for all your sexual health needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Showcase */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consult with verified healthcare professionals specializing in sexual health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {experts.map((expert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl mb-2">{expert.name}</h3>
                  <p className="text-blue-600 mb-2">{expert.specialization}</p>
                  <p className="text-muted-foreground mb-1">Experience: {expert.experience}</p>
                  <p className="text-muted-foreground mb-4">Available: {expert.availability}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/expert/${index + 1}`}>View Profile</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/experts">View All Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Sexual Health?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of others who trust IntimacyChain for their sexual health needs
          </p>
          <Button size="lg" className="text-lg h-12" asChild>
            <Link href="/auth">
              Get Started Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}