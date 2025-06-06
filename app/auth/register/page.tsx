"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import corporateImage from "@/public/images/auth-side-image.jpg";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function AuthForm() {
  const searchParams = useSearchParams();
  const isLogin = searchParams.get("login") === "true";
  const [isLoginView, setIsLoginView] = useState(isLogin);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!isLoginView && !form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!isLoginView && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const endpoint = isLoginView
        ? "http://localhost:9000/api/users/auth/login"
        : "http://localhost:9000/api/users/auth/register";

      const body = isLoginView
        ? { email: form.email, password: form.password }
        : {
            name: form.name,
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword,
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      toast.success(isLoginView ? "Login successful! Redirecting... " : "Registration successful! Redirecting...");

      // Save token in localStorage
      if (data?.token) {
        localStorage.setItem("token", data.token);
        console.log("✅ Token saved:", data.token);
      } else {
        console.warn("⚠️ No token found in response");
      }

      // Delay navigation to allow toast to be visible
      setTimeout(() => {
        router.push("/auth/UserDashboard");
      }, 1000);

    } catch (error: any) {
      console.error("❌ Auth error:", error);
      toast.error(error.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <div className="relative w-full h-full">
          <Image 
            src={corporateImage} 
            alt="Corporate team working" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLoginView ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLoginView ? "Sign in to access your dashboard" : "Get started with your free account"}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLoginView && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`block w-full px-4 py-2 rounded-md border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@example.com"
                className={`block w-full px-4 py-2 rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className={`block w-full px-4 py-2 rounded-md border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {!isLoginView && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className={`block w-full px-4 py-2 rounded-md border ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full justify-center group bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {isLoginView ? "Signing In..." : "Creating Account..."}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {isLoginView ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6">
            {isLoginView ? "Don't have an account?" : "Already have an account?"}{" "}
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium"
              onClick={() => {
                setIsLoginView(!isLoginView);
                router.push(isLoginView ? "/auth/register" : "/auth/register?login=true");
              }}
            >
              {isLoginView ? "Sign up" : "Sign in"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
