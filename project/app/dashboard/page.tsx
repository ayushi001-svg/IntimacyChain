"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarIcon,
  FileIcon,
  WalletIcon,
  ClockIcon,
  CheckCircleIcon,
} from "lucide-react";
import Link from "next/link";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Mitchell",
    specialization: "Gynecologist",
    date: "2024-04-15",
    time: "10:00 AM",
    status: "upcoming",
  },
  {
    id: 2,
    doctor: "Dr. James Wilson",
    specialization: "Urologist",
    date: "2024-03-20",
    time: "02:00 PM",
    status: "completed",
  },
];

const records = [
  {
    id: 1,
    name: "STI Test Results",
    date: "2024-03-15",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Medical Certificate",
    date: "2024-03-10",
    type: "PDF",
    size: "1.1 MB",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button asChild>
            <Link href="/upload">Upload New Record</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <CalendarIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
                <p className="text-2xl font-semibold">2</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <FileIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Medical Records</p>
                <p className="text-2xl font-semibold">5</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <WalletIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Wallet Balance</p>
                <p className="text-2xl font-semibold">$450</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="records">Medical Records</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <div className="grid gap-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{appointment.doctor}</h3>
                      <p className="text-sm text-muted-foreground">
                        {appointment.specialization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {appointment.status === "upcoming" ? (
                        <ClockIcon className="h-4 w-4 text-blue-600" />
                      ) : (
                        <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      )}
                      <span className="text-sm capitalize">{appointment.status}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p>{appointment.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p>{appointment.time}</p>
                    </div>
                  </div>
                  {appointment.status === "upcoming" && (
                    <div className="mt-4">
                      <Button asChild>
                        <Link href={`/chat/${appointment.id}`}>Join Session</Link>
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="records">
            <div className="grid gap-4">
              {records.map((record) => (
                <Card key={record.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileIcon className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">{record.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {record.date} • {record.type} • {record.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline">Download</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}