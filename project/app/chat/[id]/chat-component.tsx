"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VideoIcon, PhoneIcon, FileIcon, SendIcon } from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "expert";
  content: string;
  timestamp: Date;
};

export default function ChatComponent({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "expert",
      content: "Hello! How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");

    // Simulate expert response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: "expert",
        content: "I understand your concern. Let me help you with that.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Chat Header */}
        <Card className="p-4 rounded-none border-x-0 border-t-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold">Dr. Sarah Mitchell</h1>
              <p className="text-sm text-muted-foreground">Gynecologist</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <VideoIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <PhoneIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FileIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-secondary"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <Card className="p-4 rounded-none border-x-0 border-b-0">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit">
              <SendIcon className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}