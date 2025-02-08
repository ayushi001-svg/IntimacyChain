"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletIcon, LockIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleMetaMaskConnect = async () => {
    setIsConnecting(true);
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask to continue");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        // Store the account address
        localStorage.setItem("walletAddress", accounts[0]);
        localStorage.setItem("userName", `User ${accounts[0].slice(0, 6)}`);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Failed to connect to MetaMask");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center py-12 px-6">
      <Card className="w-full max-w-md p-6">
        <Tabs defaultValue="connect" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="connect">Connect Wallet</TabsTrigger>
            <TabsTrigger value="email">Email Sign In</TabsTrigger>
          </TabsList>

          <TabsContent value="connect">
            <div className="text-center mb-6">
              <WalletIcon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h1 className="text-2xl font-bold mb-2">Connect Your Wallet</h1>
              <p className="text-muted-foreground">
                Sign in securely using your crypto wallet
              </p>
            </div>

            <Button
              className="w-full h-12 text-lg"
              onClick={handleMetaMaskConnect}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect with MetaMask"}
            </Button>
          </TabsContent>

          <TabsContent value="email">
            <div className="text-center mb-6">
              <LockIcon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in using your email address
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </main>
  );
}