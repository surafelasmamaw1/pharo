"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import {
  ClipboardList,
  Mail,
  Newspaper,
  CheckCircle,
  Clock,
  Plus,
  RefreshCw,
  UserCheck,
  Lock,
  LogOut,
  Eye,
  EyeOff,
  KeyRound,
  UploadCloud,
  X,
  Trash2,
  Sliders,
  Megaphone,
  Heart,
  Images,
} from "lucide-react";

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

interface SiteSettingsItem {
  urgentBannerActive: boolean;
  urgentBannerText: string;
  tuitionFeeText: string;
  admissionDeadline: string;
  contactPhone: string;
  contactEmail: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  type: "Parent" | "Student" | "Teacher";
  createdAt: string;
}

interface GalleryPhotoItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<
    "applications" | "inquiries" | "news" | "settings" | "testimonials" | "gallery"
  >("applications");

  // Data lists
  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [settings, setSettings] = useState<SiteSettingsItem>({
    urgentBannerActive: false,
    urgentBannerText: "",
    tuitionFeeText: "ETB 9,700",
    admissionDeadline: "Rolling Admissions",
    contactPhone: "+251 91 234 5678",
    contactEmail: "admissions@pharoschool.edu.et",
  });
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhotoItem[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Form states
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

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    quote: "",
    type: "Parent" as "Parent" | "Student" | "Teacher",
  });
  const [isSubmittingTestimonial, setIsSubmittingTestimonial] = useState<boolean>(false);
  const [testimonialSuccessMsg, setTestimonialSuccessMsg] = useState<string>("");

  const [newGalleryPhoto, setNewGalleryPhoto] = useState({
    title: "",
    category: "Campus",
    imageUrl: "",
  });
  const [isSubmittingGallery, setIsSubmittingGallery] = useState<boolean>(false);
  const [gallerySuccessMsg, setGallerySuccessMsg] = useState<string>("");

  const [isSavingSettings, setIsSavingSettings] = useState<boolean>(false);
  const [settingsSuccessMsg, setSettingsSuccessMsg] = useState<string>("");

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
      const [appRes, inqRes, newsRes, settingsRes, testRes, gallRes] = await Promise.all([
        fetch("/api/admissions"),
        fetch("/api/contact"),
        fetch("/api/news"),
        fetch("/api/settings"),
        fetch("/api/testimonials"),
        fetch("/api/gallery"),
      ]);

      const [appData, inqData, newsData, settingsData, testData, gallData] = await Promise.all([
        appRes.json(),
        inqRes.json(),
        newsRes.json(),
        settingsRes.json(),
        testRes.json(),
        gallRes.json(),
      ]);

      if (appData.success) setApplications(appData.data || []);
      if (inqData.success) setInquiries(inqData.data || []);
      if (newsData.success) setNewsList(newsData.data || []);
      if (settingsData.success && settingsData.data) {
        setSettings({
          urgentBannerActive: Boolean(settingsData.data.urgentBannerActive),
          urgentBannerText: settingsData.data.urgentBannerText || "",
          tuitionFeeText: settingsData.data.tuitionFeeText || "ETB 9,700",
          admissionDeadline: settingsData.data.admissionDeadline || "Rolling Admissions",
          contactPhone: settingsData.data.contactPhone || "+251 91 234 5678",
          contactEmail: settingsData.data.contactEmail || "admissions@pharoschool.edu.et",
        });
      }
      if (testData.success) setTestimonials(testData.data || []);
      if (gallData.success) setGalleryPhotos(gallData.data || []);
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

  // News handlers
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
        setNewNews({
          title: "",
          category: "News",
          snippet: "",
          content: "",
          imageUrl: "",
          date: new Date().toISOString().split("T")[0],
        });
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

  // Admissions handlers
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

  // Site Settings handler
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    setSettingsSuccessMsg("");

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) {
        setSettingsSuccessMsg("Site settings and announcement banner saved!");
      }
    } catch (err) {
      console.error("Failed to save settings:", err);
    } finally {
      setIsSavingSettings(false);
    }
  };

  // Testimonials handlers
  const handleCreateTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingTestimonial(true);
    setTestimonialSuccessMsg("");

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });
      const data = await res.json();
      if (data.success) {
        setTestimonialSuccessMsg("Testimonial added!");
        setNewTestimonial({ name: "", role: "", quote: "", type: "Parent" });
        fetchData();
      }
    } catch (err) {
      console.error("Failed to create testimonial:", err);
    } finally {
      setIsSubmittingTestimonial(false);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      await fetch(`/api/testimonials?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error("Failed to delete testimonial:", err);
    }
  };

  // Gallery handlers
  const handleCreateGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingGallery(true);
    setGallerySuccessMsg("");

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGalleryPhoto),
      });
      const data = await res.json();
      if (data.success) {
        setGallerySuccessMsg("Photo added to gallery!");
        setNewGalleryPhoto({ title: "", category: "Campus", imageUrl: "" });
        fetchData();
      }
    } catch (err) {
      console.error("Failed to add gallery photo:", err);
    } finally {
      setIsSubmittingGallery(false);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Are you sure you want to delete this photo from the gallery?")) return;
    try {
      await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error("Failed to delete photo:", err);
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
                Enter your admin passcode to access admissions, inquiries, news, and site content.
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
                Manage admissions, announcements, site settings, testimonials, and gallery.
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
          <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-border/30 border border-border">
            <button
              onClick={() => setActiveTab("applications")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
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
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "inquiries"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Mail className="w-4 h-4" />
              Messages ({inquiries.length})
            </button>

            <button
              onClick={() => setActiveTab("news")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "news"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Newspaper className="w-4 h-4" />
              News ({newsList.length})
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "settings"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Sliders className="w-4 h-4" />
              Site Settings &amp; Banner
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "testimonials"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Heart className="w-4 h-4" />
              Testimonials ({testimonials.length})
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === "gallery"
                  ? "bg-scholarly text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-border/40"
              }`}
            >
              <Images className="w-4 h-4" />
              Photo Gallery ({galleryPhotos.length})
            </button>
          </div>

          {/* TAB 1: Applications */}
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

          {/* TAB 2: Inquiries */}
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

          {/* TAB 3: News & Announcements */}
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
                      Article Image (Upload File, Drag &amp; Drop, or Preset)
                    </label>

                    {newNews.imageUrl ? (
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
                      <div
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
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
                            Drag &amp; Drop image, or <span className="text-scholarly underline">browse</span>
                          </p>
                          <p className="text-[10px] text-muted">Supports PNG, JPG, WebP</p>
                        </div>
                      </div>
                    )}

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

          {/* TAB 4: Site Settings & Urgent Banner */}
          {activeTab === "settings" && (
            <div className="max-w-2xl bg-card border border-border rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-xl bg-scholarly-pale text-scholarly flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Site Settings &amp; Announcement Banner</h2>
                  <p className="text-xs text-muted">Control the top urgent notification banner, tuition fees, and deadlines.</p>
                </div>
              </div>

              {settingsSuccessMsg && (
                <div className="p-3 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {settingsSuccessMsg}
                </div>
              )}

              <form onSubmit={handleSaveSettings} className="space-y-6">
                {/* Urgent Banner Switch & Text */}
                <div className="p-5 rounded-2xl border border-border bg-background space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                        <Megaphone className="w-4 h-4 text-gold" />
                        Top Urgent Announcement Banner
                      </h4>
                      <p className="text-xs text-muted">Displays a high-visibility announcement across the top of all pages.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.urgentBannerActive}
                        onChange={(e) => setSettings({ ...settings, urgentBannerActive: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-scholarly"></div>
                    </label>
                  </div>

                  {settings.urgentBannerActive && (
                    <div>
                      <label className="block text-xs font-semibold text-muted mb-1">Banner Announcement Text</label>
                      <input
                        type="text"
                        value={settings.urgentBannerText}
                        onChange={(e) => setSettings({ ...settings, urgentBannerText: e.target.value })}
                        placeholder="e.g. 📢 School reopens Monday, September 15 for the new academic semester!"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                      />
                    </div>
                  )}
                </div>

                {/* Fees & Deadlines */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Tuition Fee Display Text</label>
                    <input
                      type="text"
                      value={settings.tuitionFeeText}
                      onChange={(e) => setSettings({ ...settings, tuitionFeeText: e.target.value })}
                      placeholder="e.g. ETB 9,700"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                    />
                    <p className="text-[11px] text-muted mt-1">Displayed in the Admissions section on the homepage.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Admissions Deadline</label>
                    <input
                      type="text"
                      value={settings.admissionDeadline}
                      onChange={(e) => setSettings({ ...settings, admissionDeadline: e.target.value })}
                      placeholder="e.g. September 30, 2026"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                    />
                  </div>
                </div>

                {/* Contact details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Official Contact Phone</label>
                    <input
                      type="tel"
                      value={settings.contactPhone}
                      onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                      placeholder="+251 91 234 5678"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Official Contact Email</label>
                    <input
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                      placeholder="admissions@pharoschool.edu.et"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSavingSettings}
                  className="px-6 py-3 rounded-xl bg-scholarly text-white font-bold text-sm hover:bg-scholarly-light transition-colors shadow-sm disabled:opacity-50"
                >
                  {isSavingSettings ? "Saving..." : "Save Settings"}
                </button>
              </form>
            </div>
          )}

          {/* TAB 5: Testimonials */}
          {activeTab === "testimonials" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-1 p-6 rounded-2xl border border-border bg-card shadow-sm h-fit">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-scholarly" />
                  Add Community Testimonial
                </h3>
                {testimonialSuccessMsg && (
                  <div className="p-3 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {testimonialSuccessMsg}
                  </div>
                )}
                <form onSubmit={handleCreateTestimonial} className="space-y-3 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Person Name *</label>
                    <input
                      type="text"
                      required
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                      placeholder="e.g. Amina Tesfaye"
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Role / Description *</label>
                    <input
                      type="text"
                      required
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                      placeholder="e.g. Parent of a Grade 4 student"
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Category *</label>
                    <select
                      value={newTestimonial.type}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, type: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    >
                      <option value="Parent">Parent</option>
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Quote / Review *</label>
                    <textarea
                      required
                      rows={4}
                      value={newTestimonial.quote}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                      placeholder="Write the testimonial statement..."
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingTestimonial}
                    className="w-full py-2.5 rounded-xl bg-scholarly text-white font-medium hover:bg-scholarly-light transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmittingTestimonial ? "Adding..." : "Publish Testimonial"}
                  </button>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-2 space-y-3">
                <h3 className="text-lg font-bold text-foreground mb-4">Published Testimonials ({testimonials.length})</h3>
                {testimonials.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
                    No custom testimonials yet. The website is currently displaying default community quotes.
                  </div>
                ) : (
                  testimonials.map((item) => (
                    <div key={item.id} className="p-5 rounded-2xl border border-border bg-card shadow-sm flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-scholarly-pale text-scholarly border border-scholarly/20">
                            {item.type}
                          </span>
                          <span className="font-semibold text-foreground text-sm">{item.name}</span>
                          <span className="text-xs text-muted">— {item.role}</span>
                        </div>
                        <p className="text-xs text-muted italic">"{item.quote}"</p>
                      </div>
                      <button
                        onClick={() => handleDeleteTestimonial(item.id)}
                        className="p-2 rounded-xl hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors flex-shrink-0"
                        title="Delete testimonial"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 6: Photo Gallery */}
          {activeTab === "gallery" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-1 p-6 rounded-2xl border border-border bg-card shadow-sm h-fit">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-scholarly" />
                  Upload Photo to Gallery
                </h3>
                {gallerySuccessMsg && (
                  <div className="p-3 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {gallerySuccessMsg}
                  </div>
                )}
                <form onSubmit={handleCreateGallery} className="space-y-3 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Caption / Title *</label>
                    <input
                      type="text"
                      required
                      value={newGalleryPhoto.title}
                      onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, title: e.target.value })}
                      placeholder="e.g. Science Fair Presentation"
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Category *</label>
                    <select
                      value={newGalleryPhoto.category}
                      onChange={(e) => setNewGalleryPhoto({ ...newGalleryPhoto, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly"
                    >
                      <option value="Campus">Campus</option>
                      <option value="Students">Students</option>
                      <option value="Classrooms">Classrooms</option>
                      <option value="Sports">Sports</option>
                      <option value="Technology">Technology</option>
                      <option value="Events">Events</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1.5">Photo (Drag &amp; Drop or Upload)</label>
                    {newGalleryPhoto.imageUrl ? (
                      <div className="relative rounded-2xl border border-border p-2 bg-background flex items-center gap-3">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-border/40 flex-shrink-0 relative border border-border">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={newGalleryPhoto.imageUrl} alt="Selected preview" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">Selected Photo</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setNewGalleryPhoto({ ...newGalleryPhoto, imageUrl: "" })}
                          className="p-1.5 rounded-full hover:bg-red-500/10 text-red-500 transition-colors"
                          title="Remove photo"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const file = e.dataTransfer.files?.[0];
                          if (file && file.type.startsWith("image/")) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              setNewGalleryPhoto((prev) => ({ ...prev, imageUrl: reader.result as string }));
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
                                setNewGalleryPhoto((prev) => ({ ...prev, imageUrl: reader.result as string }));
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
                            Drag &amp; Drop photo, or <span className="text-scholarly underline">browse</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingGallery || !newGalleryPhoto.imageUrl}
                    className="w-full py-2.5 rounded-xl bg-scholarly text-white font-medium hover:bg-scholarly-light transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmittingGallery ? "Adding..." : "Add to Gallery"}
                  </button>
                </form>
              </div>

              {/* Grid */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold text-foreground mb-4">Published Gallery Photos ({galleryPhotos.length})</h3>
                {galleryPhotos.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
                    No custom photos added yet. Default campus photos are shown.
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryPhotos.map((photo) => (
                      <div key={photo.id} className="relative rounded-2xl overflow-hidden border border-border bg-card group shadow-sm">
                        <div className="aspect-[4/3] w-full relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3 flex items-center justify-between">
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-scholarly">
                              {photo.category}
                            </span>
                            <p className="text-xs font-semibold text-foreground truncate">{photo.title}</p>
                          </div>
                          <button
                            onClick={() => handleDeleteGallery(photo.id)}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors flex-shrink-0"
                            title="Delete photo"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
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
