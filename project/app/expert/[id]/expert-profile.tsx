"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, BadgeCheckIcon, MessageCircleIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";

type Expert = {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  languages: string[];
  rating: number;
  price: number;
  availability: string;
  location: string;
  bio: string;
  education: string[];
  reviews: {
    rating: number;
    comment: string;
    date: string;
  }[];
};

export default function ExpertProfile({ expert }: { expert: Expert }) {
  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{expert.name}</h1>
              <p className="text-blue-600 flex items-center gap-1 text-lg">
                {expert.specialization}
                <BadgeCheckIcon className="h-5 w-5" />
              </p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1 text-lg p-2">
              <StarIcon className="h-4 w-4" />
              {expert.rating}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground mb-6">{expert.bio}</p>
              
              <div className="space-y-2 mb-6">
                <p><strong>Experience:</strong> {expert.experience}</p>
                <p><strong>Location:</strong> {expert.location}</p>
                <p><strong>Languages:</strong> {expert.languages.join(", ")}</p>
                <p><strong>Availability:</strong> {expert.availability}</p>
                <p><strong>Price:</strong> ${expert.price} per session</p>
              </div>

              <h2 className="text-xl font-semibold mb-4">Education & Certifications</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {expert.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Patient Reviews</h2>
              <div className="space-y-4">
                {expert.reviews.map((review, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">{review.rating}</span>
                      <span className="text-muted-foreground">• {review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button size="lg" className="flex-1" asChild>
              <Link href={`/booking/${expert.id}`}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <Link href={`/chat/${expert.id}`}>
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Start Chat
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}