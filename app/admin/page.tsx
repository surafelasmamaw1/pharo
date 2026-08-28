"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { ClipboardList, Mail, Newspaper, CheckCircle, Clock, Plus, RefreshCw, UserCheck, Lock, LogOut, Eye, EyeOff, KeyRound, UploadCloud, Image as ImageIcon, X, Trash2, TrendingUp } from "lucide-react";

interface ApplicationItem {
  id: string;
  applicantName: string;
  parentName?: string;
  email: string;
  phone: string;
  emergencyPhone?: string;
  gradeLevel: string;
  age?: string;
  gender?: string;
  previousSchool?: string;
  city?: string;
  program?: string;
  notes?: string;
  status: string;
  createdAt: string;
}

interface InquiryItem {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: string;
  createdAt: string;
}

interface NewsItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  imageUrl?: string;
  date: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<"applications" | "inquiries" | "news">("applications");
  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // New News form state
  const [newNews, setNewNews] = useState({
    title: "",
    category: "News",
    snippet: "",
    content: "",
    imageUrl: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [isSubmittingNews, setIsSubmittingNews] = useState<boolean>(false);
  const [newsSuccessMsg, setNewsSuccessMsg] = useState<string>("");

  // Check auth status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/login");
        const data = await res.json();
        setIsAuthenticated(data.authenticated === true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        setPasswordInput("");
        fetchData();
      } else {
        setAuthError(data.message || "Incorrect password. Try again.");
      }
    } catch {
      setAuthError("Login failed. Check your connection.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/login", { method: "DELETE" });
      setIsAuthenticated(false);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [appRes, inqRes, newsRes] = await Promise.all([
        fetch("/api/admissions"),
        fetch("/api/contact"),
        fetch("/api/news"),
      ]);

      const appData = await appRes.json();
      const inqData = await inqRes.json();
      const newsData = await newsRes.json();

      if (appData.success) setApplications(appData.data || []);
      if (inqData.success) setInquiries(inqData.data || []);
      if (newsData.success) setNewsList(newsData.data || []);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleCreateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNews(true);
    setNewsSuccessMsg("");

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNews),
      });
      const data = await res.json();

      if (data.success) {
        setNewsSuccessMsg("Announcement published successfully!");
        setNewNews({ title: "", category: "News", snippet: "", content: "", imageUrl: "", date: new Date().toISOString().split("T")[0] });
        fetchData();
      }
    } catch (err) {
      console.error("Failed to create news:", err);
    } finally {
      setIsSubmittingNews(false);
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return;
    try {
      await fetch(`/api/news?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error("Failed to delete news:", err);
    }
  };

  const handleUpdateAppStatus = async (id: string, newStatus: string) => {
    try {
      await fetch("/api/admissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      fetchData();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleDeleteApp = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    try {
      await fetch(`/api/admissions?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error("Failed to delete application:", err);
    }
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-32 flex items-center justify-center bg-background">
          <div className="flex items-center gap-3 text-muted text-sm font-medium">
            <RefreshCw className="w-5 h-5 animate-spin text-scholarly" />
            Checking admin access...
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Lock Screen Modal if unauthenticated
  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-32 pb-20 bg-background text-foreground flex items-center justify-center">
          <Container>
            <div className="max-w-md mx-auto p-8 rounded-3xl border border-border bg-card shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-scholarly-pale border border-scholarly/20 flex items-center justify-center mx-auto mb-6 text-scholarly">
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground">Admin Portal Access</h1>
              <p className="text-muted text-xs mt-1.5 mb-6">
                Enter your admin passcode to access admissions, inquiries, and news management.
              </p>

              {authError && (
                <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs text-left">
                  {authError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter Admin Password..."
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-3 rounded-xl bg-scholarly text-white font-bold text-sm hover:bg-scholarly-light transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <KeyRound className="w-4 h-4" />
                  {isLoggingIn ? "Authenticating..." : "Unlock Dashboard"}
                </button>
              </form>
              <p className="text-[11px] text-muted mt-6">
                Default password: <code className="bg-border/40 px-1.5 py-0.5 rounded font-mono text-foreground">pharo2026</code> (configured in <code className="bg-border/40 px-1.5 py-0.5 rounded font-mono text-foreground">.env.local</code>)
              </p>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  // Dashboard View (Authenticated)
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-background text-foreground">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scholarly-pale border border-scholarly/20 text-xs font-semibold text-scholarly mb-2">
                <UserCheck className="w-3.5 h-3.5" />
                AUTHENTICATED ADMIN SESSION
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Pharo Foundation Dashboard
              </h1>
              <p className="text-muted text-sm mt-1">
                Manage admissions, read contact messages, and publish news.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchData}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-border/40 hover:bg-border text-foreground font-medium text-sm transition-colors border border-border"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                Refresh Data
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold text-sm transition-colors border border-red-500/20"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-border/30 border border-border max-w-fit">
            <button
              onClick={() => setActiveTab("applications")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "applications"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Admissions ({applications.length})
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "inquiries"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Mail className="w-4 h-4" />
              Contact Messages ({inquiries.length})
            </button>

            <button
              onClick={() => setActiveTab("news")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "news"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Newspaper className="w-4 h-4" />
              News & Announcements ({newsList.length})
            </button>
          </div>

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">Student Applications</h2>
              {applications.length === 0 ? (
                <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
                  No applications received yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.id} className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{app.applicantName}</h3>
                          <p className="text-xs text-muted">Grade/Level: <span className="font-medium text-foreground">{app.gradeLevel}</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={app.status}
                            onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-border/40 border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-scholarly cursor-pointer"
                          >
                            <option value="PENDING">⏳ PENDING</option>
                            <option value="REVIEWED">👀 REVIEWED</option>
                            <option value="ACCEPTED">✅ ACCEPTED</option>
                            <option value="REJECTED">❌ REJECTED</option>
                          </select>
                          <button
                            onClick={() => handleDeleteApp(app.id)}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
                            title="Delete application"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-muted space-y-1 mb-3 pt-2 border-t border-border/50">
                        <p><strong className="text-foreground">Email:</strong> {app.email}</p>
                        <p><strong className="text-foreground">Phone:</strong> {app.phone} {app.emergencyPhone ? `(Emergency: ${app.emergencyPhone})` : ""}</p>
                        {app.parentName && <p><strong className="text-foreground">Parent/Guardian:</strong> {app.parentName}</p>}
                        {(app.age || app.gender || app.city) && (
                          <p><strong className="text-foreground">Student Info:</strong> {[app.age ? `${app.age} yrs` : "", app.gender, app.city].filter(Boolean).join(" • ")}</p>
                        )}
                        {app.previousSchool && <p><strong className="text-foreground">Previous School:</strong> {app.previousSchool}</p>}
                        {app.program && <p><strong className="text-foreground">Program:</strong> {app.program}</p>}
                        {app.notes && <p className="mt-2 text-foreground/80 italic">"{app.notes}"</p>}
                      </div>
                      <div className="text-[11px] text-muted text-right">
                        Submitted: {new Date(app.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Inquiries Tab */}
          {activeTab === "inquiries" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">Contact Inquiries</h2>
              {inquiries.length === 0 ? (
                <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
                  No contact messages received yet.
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-5 rounded-2xl border border-border bg-card shadow-sm">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{inq.name}</h3>
                          <span className="text-xs text-muted">&lt;{inq.email}&gt;</span>
                        </div>
                        <span className="text-xs text-muted">{new Date(inq.createdAt).toLocaleDateString()}</span>
                      </div>
                      {inq.subject && <p className="text-sm font-medium text-scholarly mb-2">Subject: {inq.subject}</p>}
                      <p className="text-sm text-foreground/90 bg-border/20 p-3 rounded-xl border border-border/40 whitespace-pre-wrap">
                        {inq.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* News & Announcements Tab */}
          {activeTab === "news" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-1 p-6 rounded-2xl border border-border bg-card shadow-sm h-fit">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-scholarly" />
                  Publish Announcement
                </h3>
                {newsSuccessMsg && (
                  <div className="p-3 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {newsSuccessMsg}
                  </div>
                )}
                <form onSubmit={handleCreateNews} className="space-y-3 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Title</label>
                    <input
                      type="text"
                      required
                      value={newNews.title}
                      onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                      placeholder="e.g. Annual Science Fair 2026"
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Category</label>
                    <select
                      value={newNews.category}
                      onChange={(e) => setNewNews({ ...newNews, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    >
                      <option value="News">News</option>
                      <option value="Events">Events</option>
                      <option value="Academic">Academic</option>
                      <option value="Activity">Activity</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1.5">
                      Article Image (Upload File, Drag & Drop, or Preset)
                    </label>

                    {newNews.imageUrl ? (
                      /* Live Image Preview Card */
                      <div className="relative rounded-2xl border border-border p-2 bg-background flex items-center gap-3">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-border/40 flex-shrink-0 relative border border-border">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={newNews.imageUrl} alt="Selected preview" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">Selected Image</p>
                          <p className="text-[10px] text-muted truncate">{newNews.imageUrl.substring(0, 45)}...</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setNewNews({ ...newNews, imageUrl: "" })}
                          className="p-1.5 rounded-full hover:bg-red-500/10 text-red-500 transition-colors"
                          title="Remove image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      /* Drag & Drop File Picker Box */
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onDrop={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const file = e.dataTransfer.files?.[0];
                          if (file && file.type.startsWith("image/")) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              setNewNews((prev) => ({ ...prev, imageUrl: reader.result as string }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="relative rounded-2xl border-2 border-dashed border-border hover:border-scholarly/50 p-4 text-center bg-background/50 hover:bg-border/20 transition-all cursor-pointer group"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = () => {
                                setNewNews((prev) => ({ ...prev, imageUrl: reader.result as string }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center gap-1.5 pointer-events-none">
                          <div className="w-9 h-9 rounded-full bg-scholarly-pale text-scholarly flex items-center justify-center group-hover:scale-110 transition-transform">
                            <UploadCloud className="w-5 h-5" />
                          </div>
                          <p className="text-xs font-semibold text-foreground">
                            Drag &amp; Drop your image here, or <span className="text-scholarly underline">browse files</span>
                          </p>
                          <p className="text-[10px] text-muted">Supports PNG, JPG, WebP, GIF</p>
                        </div>
                      </div>
                    )}

                    {/* Quick Presets */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="text-[10px] text-muted self-center">Presets:</span>
                      {[
                        { label: "Football", url: "/ronaldo.jpg" },
                        { label: "Classrooms", url: "/classrooms.png" },
                        { label: "Library", url: "/library.png" },
                        { label: "Campus", url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" },
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setNewNews({ ...newNews, imageUrl: preset.url })}
                          className="px-2 py-0.5 rounded bg-border/40 hover:bg-border text-[10px] font-medium text-foreground transition-colors"
                        >
                          + {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Summary / Snippet</label>
                    <textarea
                      required
                      rows={2}
                      value={newNews.snippet}
                      onChange={(e) => setNewNews({ ...newNews, snippet: e.target.value })}
                      placeholder="Brief overview..."
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Full Content</label>
                    <textarea
                      required
                      rows={4}
                      value={newNews.content}
                      onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
                      placeholder="Detailed content..."
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingNews}
                    className="w-full py-2.5 rounded-xl bg-scholarly text-white font-medium hover:bg-scholarly-light transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmittingNews ? "Publishing..." : "Publish Article"}
                  </button>
                </form>
              </div>

              {/* Published List */}
              <div className="lg:col-span-2 space-y-3">
                <h3 className="text-lg font-bold text-foreground mb-4">Published Announcements</h3>
                {newsList.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
                    No articles published yet.
                  </div>
                ) : (
                  newsList.map((item) => (
                    <div key={item.id} className="p-4 rounded-2xl border border-border bg-card shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
                      {item.imageUrl && (
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-border/40 flex-shrink-0 relative border border-border">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-scholarly-pale text-scholarly border border-scholarly/20">
                            {item.category}
                          </span>
                          <span className="text-xs text-muted">{item.date}</span>
                        </div>
                        <h4 className="font-semibold text-foreground text-base truncate">{item.title}</h4>
                        <p className="text-xs text-muted mt-1 line-clamp-2">{item.snippet}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteNews(item.id)}
                        className="p-2 rounded-xl hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors flex-shrink-0"
                        title="Delete announcement"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
