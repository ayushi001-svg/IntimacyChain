"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeartPulseIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("userName");
    setUserName(null);
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <HeartPulseIcon className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-lg">IntimacyChain</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/experts" className="text-muted-foreground hover:text-foreground transition-colors">
            Find an Expert
          </Link>
          {userName && (
            <>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/upload" className="text-muted-foreground hover:text-foreground transition-colors">
                STI Records
              </Link>
            </>
          )}
        </div>

        {userName ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                {userName}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/upload")}>
                Upload Records
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild>
            <Link href="/auth">Connect Wallet</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}