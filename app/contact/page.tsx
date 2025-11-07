"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to an API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a question about our products or interested in a partnership?
              We&apos;d love to hear from you. Reach out to our team and
              we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          <Card className="border border-border/50">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Navya Fashion House
                    <br />
                    Surat, Gujarat 395006
                    <br />
                    India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    +91 76000 06036
                    <br />
                    Mon-Fri 9AM-6PM IST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    taraklunagariya@navyafashionn.in
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="font-serif font-bold text-lg mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 (261) 234-5678"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Business Hours & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="size-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((hour) => (
                  <div key={hour.day} className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {hour.day}
                    </span>
                    <span
                      className={
                        hour.closed
                          ? "text-muted-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {hour.closed ? "Closed" : hour.time}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2">
                    FAQ
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Find answers to common questions
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    CATALOG
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Download our product catalog
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    PARTNERS
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Explore partnership opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Visit Us</h2>
          <div className="rounded-lg overflow-hidden border border-border h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: "none" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0842023894547!2d72.8479!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59999999999%3A0x1234567890abcdef!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Our headquarters is located in the heart of Surat&apos;s textile
            district. We&apos;re easily accessible by road and welcome visits by
            appointment.
          </p>
        </div>
      </div>
    </main>
  );
}

const businessHours = [
  { day: "Monday", time: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
  { day: "Thursday", time: "9:00 AM - 6:00 PM" },
  { day: "Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", closed: true },
];
