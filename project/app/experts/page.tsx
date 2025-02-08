"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, StarIcon, BadgeCheckIcon } from "lucide-react";
import Link from "next/link";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialization: "Gynecologist",
    experience: "15+ years",
    languages: ["English", "Spanish"],
    rating: 4.9,
    price: 150,
    availability: "Mon-Fri",
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialization: "Urologist",
    experience: "12+ years",
    languages: ["English", "French"],
    rating: 4.8,
    price: 140,
    availability: "Tue-Sat",
    location: "London, UK",
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    specialization: "Sexual Health Therapist",
    experience: "10+ years",
    languages: ["English", "Mandarin"],
    rating: 4.7,
    price: 120,
    availability: "Mon-Thu",
    location: "Singapore",
  },
  // Add more experts here
];

export default function ExpertDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("all");

  const filteredExperts = experts.filter((expert) => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = specialization === "all" || expert.specialization === specialization;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Find Your Expert</h1>
        
        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or location"
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={specialization} onValueChange={setSpecialization}>
            <SelectTrigger>
              <SelectValue placeholder="Select Specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>
              <SelectItem value="Gynecologist">Gynecologist</SelectItem>
              <SelectItem value="Urologist">Urologist</SelectItem>
              <SelectItem value="Sexual Health Therapist">Sexual Health Therapist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.map((expert) => (
            <Card key={expert.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-xl">{expert.name}</h3>
                  <p className="text-blue-600 flex items-center gap-1">
                    {expert.specialization}
                    <BadgeCheckIcon className="h-4 w-4" />
                  </p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <StarIcon className="h-3 w-3" />
                  {expert.rating}
                </Badge>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-muted-foreground">Experience: {expert.experience}</p>
                <p className="text-muted-foreground">Location: {expert.location}</p>
                <p className="text-muted-foreground">Languages: {expert.languages.join(", ")}</p>
                <p className="text-muted-foreground">Available: {expert.availability}</p>
                <p className="font-medium">${expert.price} per session</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" asChild>
                  <Link href={`/booking/${expert.id}`}>Book Now</Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link href={`/expert/${expert.id}`}>View Profile</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}