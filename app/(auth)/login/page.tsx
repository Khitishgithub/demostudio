// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Camera, Sparkles } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOtp(true);
    }, 1000);
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

  const handleOtpChange = (index: number, value: string) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pasted)) return;

    const digits = pasted.slice(0, 6).split("");
    const newOtp = [...otp];
    digits.forEach((d, i) => (newOtp[i] = d));
    setOtp(newOtp);

    const nextEmpty = newOtp.findIndex((d) => !d);
    document.getElementById(`otp-${nextEmpty === -1 ? 5 : nextEmpty}`)?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (
      !/^\d$/.test(e.key) &&
      !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      e.preventDefault();
    }

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="mx-auto flex  max-w-6xl flex-col md:flex-row">
        {/* LEFT SIDE IMAGE */}
        <div className="relative hidden md:block md:w-1/2 mt-10 ">
          <div className="absolute inset-0">
            <Image
              src="/Images/Login.jpg"
              alt="Wedding"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Decorative overlay */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-white">
                Welcome to <span className="text-purple-400">MemoryLens</span>
              </h2>
              <p className="mt-2 text-sm text-gray-200">
                Capture the magic. Create the memories.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center px-6 mt-10 ">
          <div className="relative w-full max-w-md rounded-2xl border border-gray-700 bg-gray-900/70 p-8 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">
                Login to <span className="text-purple-400">MemoryLens</span>
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Professional creators only
              </p>
            </div>

            {!showOtp ? (
              <form onSubmit={handleLogin} className="space-y-6">
                {error && (
                  <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="creator@studio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 pr-12 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
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
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl transition hover:scale-[1.02] disabled:opacity-50"
                >
                  {isLoading ? "Processing..." : "Login"}
                </button>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleOtpSubmit();
                }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white">Enter OTP</h2>
                  <p className="text-sm text-gray-400 mt-2">
                    Sent to <span className="text-purple-400">{email}</span>
                  </p>
                </div>

                {error && (
                  <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div className="flex justify-center gap-2" onPaste={handleOtpPaste}>
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      value={d}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      maxLength={1}
                      inputMode="numeric"
                      className="h-14 w-12 rounded-lg border border-gray-700 bg-gray-800/50 text-center text-xl font-semibold text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={otp.some((d) => !d)}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl transition hover:scale-[1.02] disabled:opacity-50"
                >
                  Verify & Login
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowOtp(false);
                    setOtp(["", "", "", "", "", ""]);
                    setError("");
                  }}
                  className="w-full text-sm text-gray-400 hover:text-purple-400 transition"
                >
                  ← Back to login
                </button>
              </form>
            )}

            <div className="mt-8 text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <button className="font-medium text-purple-400 hover:text-purple-300">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
