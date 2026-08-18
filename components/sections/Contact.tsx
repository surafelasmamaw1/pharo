"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { contactFormSchema } from "@/lib/zodSchemas";
import { siteConfig } from "@/lib/siteConfig";

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject || "Pharo Foundation Website Inquiry",
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result?.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-section-sm md:py-section-md bg-foreground/[0.025] dark:bg-white/[0.02]"
    >
      <Container>
        <div className="text-left max-w-3xl">
          <SectionHeading className="text-left">
            Contact Pharo Foundation
          </SectionHeading>
          <p className="mt-6 text-muted leading-relaxed text-base md:text-lg">
            We would love to hear from you. Whether you are
            exploring admissions, planning a visit, or have a question for our
            team — please reach out and a member of our staff will respond
            promptly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Side - Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:pr-4 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-scholarly-pale border border-scholarly/10 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="w-5 h-5 text-scholarly"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Address
                  </h4>
                  <p className="text-muted leading-relaxed">
                    {siteConfig.contact.address.join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-scholarly-pale border border-scholarly/10 flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="w-5 h-5 text-scholarly"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Phone
                  </h4>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-muted hover:text-scholarly transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-scholarly-pale border border-scholarly/10 flex items-center justify-center flex-shrink-0">
                  <Mail
                    className="w-5 h-5 text-scholarly"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Email
                  </h4>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="text-muted hover:text-scholarly transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-scholarly-pale border border-scholarly/10 flex items-center justify-center flex-shrink-0">
                  <Clock
                    className="w-5 h-5 text-scholarly"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Office Hours
                  </h4>
                  <p className="text-muted leading-relaxed">
                    {siteConfig.contact.officeHours}
                    <br />
                    Saturday &amp; Sunday · Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/60">
              <h4 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Visit Our Campus
              </h4>
              <p className="text-muted leading-relaxed mb-5">
                We warmly invite families to schedule a personal
                tour and experience the Pharo Foundation difference in person.
              </p>
              <Button href="#admissions" variant="outline" size="md">
                Schedule a Tour
              </Button>
            </div>
          </m.div>

          {/* Right Side - Contact Form */}
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {status === "success" ? (
              <div className="p-8 md:p-10 bg-success/10 dark:bg-success/10 border border-success/30 dark:border-success/40 rounded-2xl text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-success mb-3">
                  Thank You!
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Your message has been received. A member of the Pharo
                  Foundation team will be in touch shortly.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  size="lg"
                  className="w-full"
                  variant="secondary"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 md:p-8 rounded-2xl border border-border bg-background shadow-sm space-y-5"
              >
                {status === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
                    Something went wrong. Please try again.
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    {...register("name")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-foreground ${
                      errors.name
                        ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400"
                        : "border-border focus:border-scholarly"
                    } bg-background focus:outline-none focus:ring-2 focus:ring-scholarly/20`}
                  />
                  {errors.name && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-foreground ${
                        errors.email
                          ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400"
                          : "border-border focus:border-scholarly"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-scholarly/20`}
                    />
                    {errors.email && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+00 000 000 0000"
                      {...register("phone")}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-foreground ${
                        errors.phone
                          ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400"
                          : "border-border focus:border-scholarly"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-scholarly/20`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    {...register("subject")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-foreground ${
                      errors.subject
                        ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400"
                        : "border-border focus:border-scholarly"
                    } bg-background focus:outline-none focus:ring-2 focus:ring-scholarly/20`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us a little about your inquiry..."
                    {...register("message")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-foreground ${
                      errors.message
                        ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400"
                        : "border-border focus:border-scholarly"
                    } bg-background focus:outline-none focus:ring-2 focus:ring-scholarly/20 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full"
                  variant="secondary"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </m.div>
        </div>
      </Container>
    </section>
  );
}
