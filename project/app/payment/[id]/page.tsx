"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WalletIcon, CheckCircleIcon, LoaderIcon } from "lucide-react";
import Link from "next/link";

export default function PaymentPage({ params, searchParams }: { 
  params: { id: string },
  searchParams: { date: string, time: string, type: string }
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8">Complete Payment</h1>
        
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Session Details</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Date: {searchParams.date}</p>
            <p>Time: {searchParams.time}</p>
            <p>Type: {searchParams.type}</p>
            <p className="text-foreground font-medium mt-4">Total: $150</p>
          </div>
        </Card>

        {!isSuccess ? (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Connect Wallet</h2>
              <WalletIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            
            <Button 
              className="w-full" 
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Pay Now"
              )}
            </Button>
          </Card>
        ) : (
          <Card className="p-6 text-center">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-6">You can now access your consultation.</p>
            <Button className="w-full" asChild>
              <Link href={`/chat/${params.id}`}>Go to Consultation</Link>
            </Button>
          </Card>
        )}
      </div>
    </main>
  );
}