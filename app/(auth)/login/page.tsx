// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Camera, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Generate particles only on client side
  const [particles] = useState(() =>
    Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 10}s`,
    })),
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowOtp(true);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take last digit
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Only allow numbers
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, 6).split("");
    const newOtp = [...otp];

    digits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });

    setOtp(newOtp);

    // Focus the next empty input or the last one
    const nextEmptyIndex = newOtp.findIndex((d) => d === "");
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    document.getElementById(`otp-${focusIndex}`)?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Prevent non-numeric keys except special keys
    if (
      !/^\d$/.test(e.key) &&
      !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      e.preventDefault();
    }

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      document.cookie = "auth=true; path=/";
      router.push("/app");
    } else {
      setError("Invalid OTP. Please try again.");
      setOtp(["", "", "", "", "", ""]);
      document.getElementById("otp-0")?.focus();
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12">
      {/* Animated background elements */}
      {/* Floating particles - only render after mount */}
      {mounted &&
        particles.map((particle, i) => (
          <div
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-purple-400 opacity-20"
            style={{
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} infinite ease-in-out`,
              animationDelay: particle.delay,
            }}
          />
        ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.2);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.8);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow:
              0 0 20px rgba(147, 51, 234, 0.3),
              0 0 40px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow:
              0 0 30px rgba(147, 51, 234, 0.5),
              0 0 60px rgba(236, 72, 153, 0.3),
              0 0 80px rgba(147, 51, 234, 0.2);
          }
        }

        .button-shimmer {
          background: linear-gradient(
            90deg,
            rgba(147, 51, 234, 1) 0%,
            rgba(236, 72, 153, 1) 50%,
            rgba(147, 51, 234, 1) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }

        .button-pulse {
          animation: pulse-glow 2s infinite ease-in-out;
        }
      `}</style>

      {/* Main card */}
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-purple-600 to-pink-500 opacity-20 blur-xl"></div>
        <div className="relative rounded-2xl border border-gray-700 bg-gray-800/90 p-8 shadow-2xl backdrop-blur-sm">
          {/* Logo/Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-pink-500 shadow-lg">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-2 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent">
              Videography Studio
            </h1>
            <p className="flex items-center justify-center gap-2 text-gray-400">
              <Sparkles className="h-4 w-4" />
              Welcome back, creator!
            </p>
          </div>

          {!showOtp ? (
            // Login Form
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="creator@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 pr-12 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="button-shimmer button-pulse group relative w-full overflow-hidden rounded-lg py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    "Login"
                  )}
                </span>
              </button>
            </form>
          ) : (
       
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleOtpSubmit();
              }}
            >
              <div className="text-center">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Enter verification code
                </h2>
                <p className="text-sm text-gray-400">
                  sent to
                  <br />
                  <span className="font-medium text-purple-400">{email}</span>
                </p>
              </div>

              {error && (
                <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <div
                className="flex justify-center gap-2"
                onPaste={handleOtpPaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={1}
                    className="h-14 w-12 rounded-lg border border-gray-600 bg-gray-700/50 text-center text-xl font-semibold text-white backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:scale-110"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={otp.some((d) => !d)}
                className="button-shimmer button-pulse group relative w-full overflow-hidden rounded-lg py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              >
                <span className="relative z-10">Verify & Login</span>
              </button>

              <button
                onClick={() => {
                  setShowOtp(false);
                  setOtp(["", "", "", "", "", ""]);
                  setError("");
                }}
                className="w-full text-sm text-gray-400 transition-colors hover:text-purple-400 cursor-pointer"
              >
                ← Back to login
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <button className="font-medium text-purple-400 transition-colors hover:text-purple-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
