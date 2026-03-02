"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceOptions = [
  "Fencing",
  "Decks",
  "Painting",
  "Interior Renovation",
  "Landscaping",
  "Exterior Renovation & Repair",
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            Ready to Start?
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Get a Free Estimate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you with a free,
            no-obligation estimate.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              name="quote-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid gap-4 sm:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="quote-request" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-charcoal">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-charcoal">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(469) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-charcoal">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Project address"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="service" className="text-sm font-medium text-charcoal">
                  Service Needed *
                </label>
                <Select name="service" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto cursor-pointer">
                  Send Request
                </Button>
              </div>
            </form>
          </div>

          {/* Contact sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-charcoal">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out anytime — we&apos;re happy to discuss your project.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand/10">
                  <Phone className="h-5 w-5 text-sand-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Phone</p>
                  <a
                    href="tel:4693465900"
                    className="text-sm text-muted-foreground hover:text-sand-dark"
                  >
                    (469) 346-5900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand/10">
                  <Mail className="h-5 w-5 text-sand-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <a
                    href="mailto:rustynailcontractors@gmail.com"
                    className="break-all text-sm text-muted-foreground hover:text-sand-dark"
                  >
                    rustynailcontractors@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand/10">
                  <MapPin className="h-5 w-5 text-sand-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    Service Area
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Carrollton &amp; Greater Dallas, TX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
