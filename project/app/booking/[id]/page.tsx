"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarIcon, VideoIcon, MessageSquareIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM"
];

// List of expert IDs that will be pre-rendered
const expertIds = ["1", "2", "3"];

export function generateStaticParams() {
  return expertIds.map((id) => ({
    id: id,
  }));
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [consultationType, setConsultationType] = useState("");

  const handleBooking = () => {
    // Handle booking logic here
    window.location.href = `/payment/${params.id}?date=${date?.toISOString()}&time=${timeSlot}&type=${consultationType}`;
  };

  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book Your Consultation</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
            
            <div className="mb-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date > new Date(2025, 0, 1)}
              />
            </div>

            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select Time Slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Consultation Type</h2>
              
              <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="flex items-center gap-2">
                      <VideoIcon className="h-4 w-4" />
                      Video Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="audio" id="audio" />
                    <Label htmlFor="audio" className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4" />
                      Audio Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="chat" id="chat" />
                    <Label htmlFor="chat" className="flex items-center gap-2">
                      <MessageSquareIcon className="h-4 w-4" />
                      Text Chat
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p>Date: {date ? date.toLocaleDateString() : "Not selected"}</p>
                <p>Time: {timeSlot || "Not selected"}</p>
                <p>Type: {consultationType || "Not selected"}</p>
                <p className="text-foreground font-medium mt-4">Total: $150</p>
              </div>

              <Button 
                className="w-full" 
                disabled={!date || !timeSlot || !consultationType}
                onClick={handleBooking}
              >
                Proceed to Payment
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}