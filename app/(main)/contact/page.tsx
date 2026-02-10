"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import LocationMap from "@/app/Components/LocationMap";

const patterns = {
  name: /^[A-Za-z\s]{2,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  mobile: /^[0-9]{10}$/,
  subject: /^.{3,}$/,
  message: /^.{10,}$/,
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!values.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (!patterns.name.test(values.name)) {
      newErrors.name = "Enter a valid full name";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!patterns.email.test(values.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!values.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!patterns.mobile.test(values.mobile)) {
      newErrors.mobile = "Enter 10 digit mobile number";
    }

    if (!values.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!patterns.subject.test(values.subject)) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (!patterns.message.test(values.message)) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sending-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully!");

      setValues({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 md:py-32 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-pink-600 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Get In Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Create
            </span>
            <br />
            <span className="text-white">Something Amazing</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up delay-200">
            Have a project in mind? We&apos;d love to hear from you. Drop us a
            message and let&apos;s bring your vision to life.
          </p>
        </div>

        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 animate-shimmer"></div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="container mx-auto px-6 py-20 -mt-16 relative z-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <MapPin className="h-6 w-6" />,
              title: "Our Address",
              value: "Patia , Bhubaneswar Odisha",
              gradient: "from-purple-600 to-pink-600",
              delay: "delay-100",
            },
            {
              icon: <Mail className="h-6 w-6" />,
              title: "Email Us",
              value: "demo@mail.com",
              gradient: "from-pink-600 to-purple-600",
              delay: "delay-200",
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: "Call Us",
              value: "+91 7987584003",
              gradient: "from-purple-600 to-blue-600",
              delay: "delay-300",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 border border-gray-700 hover:border-purple-500/50 animate-fade-in-up ${item.delay}`}
            >
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/50`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="container mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl animate-fade-in">
          <LocationMap />
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-50/30"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                  <Send className="h-4 w-4 text-white" />
                  <span className="text-sm text-white font-medium">
                    Send us a message
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Start a Conversation
                </h2>
                <p className="text-purple-100 max-w-2xl mx-auto">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours
                </p>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                {/* NAME */}
                <div className="group animate-fade-in-up delay-100">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="name"
                      placeholder="John Doe"
                      value={values.name}
                      onChange={handleChange}
                      className={`transition-all duration-300 border-2 ${
                        errors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500"
                      } focus:ring-4 focus:ring-purple-500/20 rounded-xl h-12 px-4`}
                    />
                    {!errors.name &&
                      values.name &&
                      patterns.name.test(values.name) && (
                        <CheckCircle2 className="absolute right-3 top-3 h-6 w-6 text-green-500 animate-scale-in" />
                      )}
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-shake">
                      <span className="text-lg">⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div className="group animate-fade-in-up delay-150">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={values.email}
                      onChange={handleChange}
                      className={`transition-all duration-300 border-2 ${
                        errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500"
                      } focus:ring-4 focus:ring-purple-500/20 rounded-xl h-12 px-4`}
                    />
                    {!errors.email &&
                      values.email &&
                      patterns.email.test(values.email) && (
                        <CheckCircle2 className="absolute right-3 top-3 h-6 w-6 text-green-500 animate-scale-in" />
                      )}
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-shake">
                      <span className="text-lg">⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* MOBILE */}
                <div className="group animate-fade-in-up delay-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="mobile"
                      type="tel"
                      placeholder="9876543210"
                      value={values.mobile}
                      onChange={handleChange}
                      className={`transition-all duration-300 border-2 ${
                        errors.mobile
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500"
                      } focus:ring-4 focus:ring-purple-500/20 rounded-xl h-12 px-4`}
                    />
                    {!errors.mobile &&
                      values.mobile &&
                      patterns.mobile.test(values.mobile) && (
                        <CheckCircle2 className="absolute right-3 top-3 h-6 w-6 text-green-500 animate-scale-in" />
                      )}
                  </div>
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-shake">
                      <span className="text-lg">⚠</span> {errors.mobile}
                    </p>
                  )}
                </div>

                {/* SUBJECT */}
                <div className="group animate-fade-in-up delay-250">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="subject"
                      placeholder="Project inquiry"
                      value={values.subject}
                      onChange={handleChange}
                      className={`transition-all duration-300 border-2 ${
                        errors.subject
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500"
                      } focus:ring-4 focus:ring-purple-500/20 rounded-xl h-12 px-4`}
                    />
                    {!errors.subject &&
                      values.subject &&
                      patterns.subject.test(values.subject) && (
                        <CheckCircle2 className="absolute right-3 top-3 h-6 w-6 text-green-500 animate-scale-in" />
                      )}
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-shake">
                      <span className="text-lg">⚠</span> {errors.subject}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2 animate-fade-in-up delay-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-pink-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    className={`min-h-[180px] transition-all duration-300 border-2 ${
                      errors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-purple-500"
                    } focus:ring-4 focus:ring-purple-500/20 rounded-xl p-4 resize-none`}
                    value={values.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-shake">
                      <span className="text-lg">⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="md:col-span-2 text-center mt-4 animate-fade-in-up delay-350">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group  cursor-pointer relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                    <span className="relative flex items-center gap-3 justify-center">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-sm text-gray-500 mt-4">
                    We&lsquo;ll respond within{" "}
                    <span className="font-semibold text-purple-600">
                      24 hours
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.4s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-250 {
          animation-delay: 0.25s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-350 {
          animation-delay: 0.35s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default ContactPage;
