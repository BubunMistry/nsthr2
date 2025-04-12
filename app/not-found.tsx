"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, HelpCircle, Rocket } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const primaryColor = "#29A0D8";
  const secondaryColor = "#6DD3FF";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          {/* Gradient Header */}
          <div 
            className="h-2"
            style={{ background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})` }}
          ></div>
          
          <div className="p-8 sm:p-10 text-center">
            {/* 404 Graphic */}
            <div className="relative mx-auto w-52 h-52 mb-8 group">
              <div 
                className="absolute inset-0 rounded-full opacity-10 blur-md group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-full border-4 transition-all duration-300 group-hover:scale-105"
                style={{ 
                  borderColor: primaryColor,
                  background: `radial-gradient(circle at center, ${primaryColor}10, transparent 70%)`
                }}
              >
                <span 
                  className="text-7xl font-bold tracking-tighter"
                  style={{ 
                    color: 'transparent',
                    background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  404
                </span>
              </div>
            </div>
            
            {/* Content */}
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Page Not Found
            </h1>
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.back()}
                className="flex items-center gap-2 group"
                variant="default" // This will use your default gradient
                size="lg"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Go Back
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-2 hover:border-[#29A0D8] hover:text-[#29A0D8]"
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                  Return Home
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
            <Button 
              asChild
              variant="link"
              className="text-gray-600 hover:text-[#29A0D8]"
            >
              <Link href="/contact">
                <HelpCircle className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                Need help? Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Rocket */}
      <div className="fixed bottom-6 right-6 animate-bounce">
        <Rocket className="w-10 h-10 text-[#29A0D8]" />
      </div>
    </div>
  );
}